// Pre-render pipeline for the Henna By Masu site.
//
// The site/*.html files are shipped as fully static HTML (no React, no Babel,
// no runtime framework) so search engines and social scrapers see real
// content in the first HTTP response. The React components in site/*.jsx are
// still the source of truth for markup and styling — this script runs them
// once, at build time, through real React server-side rendering, and bakes
// the result into each page's <body>. Interactivity (menu, gallery/lightbox,
// hero video, journal toggles, the enquiry form) is handled separately by the
// small hand-written site/assets/site.js, not by React.
//
// Usage: after editing any site/*.jsx file, run `npm install && npm run build`
// from this `build/` folder, then re-upload the changed site/*.html files.
// Do NOT upload this `build/` folder itself to Hostinger — see HOSTINGER-SETUP.md.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const babel = require('@babel/core');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const SITE = path.join(__dirname, '..', 'site');
const DS_PATH = path.join(SITE, '_ds', 'henna-by-masu-design-system-0b7f2a79-0298-46bd-a6b4-f735902b1bdf', '_ds_bundle.js');

function readSrc(name) { return fs.readFileSync(path.join(SITE, name), 'utf8'); }
function transpile(code, filename) {
  return babel.transform(code, { presets: ['@babel/preset-react'], filename, babelrc: false, configFile: false }).code;
}

function extractDataScript(html, varName) {
  const re = new RegExp('<script>\\s*window\\.' + varName + '\\s*=\\s*(\\{[\\s\\S]*?\\});?\\s*</script>');
  const m = html.match(re);
  if (!m) return null;
  return m[1];
}

function makeSandbox() {
  const sandbox = {};
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  sandbox.React = React;
  sandbox.console = console;
  sandbox.ReactDOM = { createRoot: () => ({ render: () => {} }) };
  function fakeElement() { return { appendChild(){}, style: {}, textContent: '', isConnected: false }; }
  sandbox.document = {
    getElementById: () => fakeElement(),
    querySelectorAll: () => [],
    addEventListener: () => {},
    removeEventListener: () => {},
    createElement: () => fakeElement(),
    body: { style: {} },
    hidden: false,
  };
  sandbox.matchMedia = () => ({ matches: false, addEventListener(){}, removeEventListener(){} });
  sandbox.innerWidth = 1440;
  sandbox.innerHeight = 900;
  sandbox.scrollTo = () => {};
  sandbox.addEventListener = () => {};
  sandbox.removeEventListener = () => {};
  sandbox.dispatchEvent = () => {};
  sandbox.CustomEvent = function CustomEvent(){};
  sandbox.parent = { postMessage(){} };
  sandbox.location = { href: '' };
  vm.createContext(sandbox);
  return sandbox;
}

function runInSandbox(sandbox, code, filename) {
  const script = new vm.Script(code, { filename });
  return script.runInContext(sandbox);
}

// Each source file declares its own top-level `const { Button, ... } = ...`.
// In a real browser, Babel Standalone (the old setup) evaluated each
// <script type="text/babel"> via indirect eval, so every file got a fresh
// top-level let/const scope even though they all shared the same global
// object. vm.Script#runInContext does NOT do this by default — separate
// scripts run against one context share the SAME top-level lexical
// environment, so a repeated `const Button` throws a redeclaration
// SyntaxError. Wrapping each file's code in an IIFE reproduces the
// indirect-eval scoping this codebase was written against.
function runModuleInSandbox(sandbox, code, filename) {
  return runInSandbox(sandbox, '(function(){\n' + code + '\n})();', filename);
}

function overrideButton(sandbox) {
  const ns = sandbox.HennaByMasuDesignSystem_0b7f2a;
  const RealButton = ns.Button;
  ns.Button = function Button(props) {
    const variant = props.variant || 'primary';
    const cls = ['btn', 'btn-' + variant, props.className].filter(Boolean).join(' ');
    const rest = Object.assign({}, props, { className: cls });
    return React.createElement(RealButton, rest);
  };
}

const dsCode = fs.readFileSync(DS_PATH, 'utf8');
const sectionsCode = transpile(readSrc('sections.jsx'), 'sections.jsx');

function renderMarkup({ entryFile, rootName, dataVar, htmlPath }) {
  const sandbox = makeSandbox();
  runModuleInSandbox(sandbox, dsCode, 'ds_bundle.js');
  overrideButton(sandbox);
  if (dataVar) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const dataSrc = extractDataScript(html, dataVar);
    if (!dataSrc) throw new Error('missing window.' + dataVar + ' data script in ' + htmlPath);
    runInSandbox(sandbox, `window.${dataVar} = ${dataSrc};`, 'data.js');
  }
  runModuleInSandbox(sandbox, sectionsCode, 'sections.jsx');
  const entryCode = transpile(readSrc(entryFile), entryFile) + `\nwindow.__PAGE_ROOT__ = ${rootName};\n`;
  runModuleInSandbox(sandbox, entryCode, entryFile);
  const RootComp = sandbox.__PAGE_ROOT__;
  if (!RootComp) throw new Error('root component "' + rootName + '" not found after running ' + entryFile);
  return ReactDOMServer.renderToStaticMarkup(React.createElement(RootComp));
}

function assemble(file, markup) {
  const srcPath = path.join(SITE, file);
  let html = fs.readFileSync(srcPath, 'utf8');

  const stylesheetRe = /(<link rel="stylesheet" href="_ds\/[^"]*\/styles\.css">)/;
  if (!stylesheetRe.test(html)) throw new Error(file + ': stylesheet link not found');
  if (!/assets\/site\.css/.test(html)) {
    html = html.replace(stylesheetRe, '$1\n<link rel="stylesheet" href="assets/site.css">');
  }

  // Drop the now-unused window.PAGE / window.CITY data script — its content
  // is already baked into the static markup below.
  html = html.replace(/<script>window\.(PAGE|CITY)=\{[\s\S]*?\}<\/script>\n?/, '');

  const bodyRe = /<body>[\s\S]*<\/body>/;
  if (!bodyRe.test(html)) throw new Error(file + ': <body> block not found');
  const newBody = `<body>\n<div id="app">${markup}</div>\n<script defer src="assets/site.js"></script>\n</body>`;
  html = html.replace(bodyRe, newBody);

  fs.writeFileSync(srcPath, html, 'utf8');
}

const PAGES = [
  { file: 'index.html', entryFile: 'app.jsx', rootName: 'App', dataVar: null },
  { file: 'bridal-mehndi.html', entryFile: 'service.jsx', rootName: 'ServicePage', dataVar: 'PAGE' },
  { file: 'bridal-henna.html', entryFile: 'service.jsx', rootName: 'ServicePage', dataVar: 'PAGE' },
  { file: 'eid-mehndi.html', entryFile: 'service.jsx', rootName: 'ServicePage', dataVar: 'PAGE' },
  { file: 'event-mehndi.html', entryFile: 'service.jsx', rootName: 'ServicePage', dataVar: 'PAGE' },
  { file: 'henna-near-me.html', entryFile: 'service.jsx', rootName: 'ServicePage', dataVar: 'PAGE' },
  { file: 'mehndi-near-me.html', entryFile: 'service.jsx', rootName: 'ServicePage', dataVar: 'PAGE' },
  { file: 'henna-birmingham.html', entryFile: 'location.jsx', rootName: 'CityPage', dataVar: 'CITY' },
  { file: 'henna-coventry.html', entryFile: 'location.jsx', rootName: 'CityPage', dataVar: 'CITY' },
  { file: 'henna-wolverhampton.html', entryFile: 'location.jsx', rootName: 'CityPage', dataVar: 'CITY' },
  { file: 'henna-solihull.html', entryFile: 'location.jsx', rootName: 'CityPage', dataVar: 'CITY' },
  { file: 'henna-luton.html', entryFile: 'location.jsx', rootName: 'CityPage', dataVar: 'CITY' },
  { file: 'henna-northampton.html', entryFile: 'location.jsx', rootName: 'CityPage', dataVar: 'CITY' },
  { file: 'henna-london.html', entryFile: 'location.jsx', rootName: 'CityPage', dataVar: 'CITY' },
  { file: 'pricing.html', entryFile: 'pricing.jsx', rootName: 'PricingPage', dataVar: null },
  { file: 'journal.html', entryFile: 'blog.jsx', rootName: 'BlogPage', dataVar: null },
  { file: 'enquiry.html', entryFile: 'enquiry.jsx', rootName: 'EnquiryPage', dataVar: null },
];

let failed = false;
for (const p of PAGES) {
  const htmlPath = path.join(SITE, p.file);
  try {
    const markup = renderMarkup({ entryFile: p.entryFile, rootName: p.rootName, dataVar: p.dataVar, htmlPath });
    assemble(p.file, markup);
    console.log('OK  ', p.file, markup.length, 'bytes');
  } catch (err) {
    failed = true;
    console.error('FAIL', p.file, '\n', err.stack);
  }
}
if (failed) process.exit(1);
