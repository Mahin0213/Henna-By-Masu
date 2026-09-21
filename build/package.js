// Packages exactly what the website serves into one zip for Hostinger:
// upload it to public_html in the File Manager, then Extract. Everything lands
// in place in one step, so no page, stylesheet or image can be left behind —
// which is how the live site ended up with index.html but 404s everywhere else.
//
// Deliberately left out:
// - *.jsx and _ds_bundle.js: build-time sources only, no page loads them.
// - enquiry-config.php / enquiry-config.example.php: the mailbox password
//   lives only in the server's enquiry-config.php, so a deploy can never
//   overwrite it or ship it. send-enquiry.php itself holds no secrets and IS
//   included.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const SITE = path.join(__dirname, '..', 'site');
const OUT_DIR = path.join(__dirname, '..', 'deploy');
const OUT = path.join(OUT_DIR, 'hennabymasu-site.zip');

const include = (rel) => {
  const base = path.basename(rel);
  if (rel.endsWith('.jsx')) return false;
  if (base.startsWith('enquiry-config')) return false;
  if (rel.startsWith('_ds' + path.sep) && !rel.endsWith('.css')) return false;
  return true;
};

function walk(dir, rel = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const r = path.join(rel, e.name);
    return e.isDirectory() ? walk(path.join(dir, e.name), r) : [r];
  });
}

const files = walk(SITE).filter(include);
const stage = fs.mkdtempSync(path.join(os.tmpdir(), 'hbm-deploy-'));
for (const rel of files) {
  fs.mkdirSync(path.join(stage, path.dirname(rel)), { recursive: true });
  fs.copyFileSync(path.join(SITE, rel), path.join(stage, rel));
}

const required = ['index.html', 'enquiry.html', 'send-enquiry.php', '.htaccess', 'favicon.ico', 'sitemap.xml', 'robots.txt',
  path.join('assets', 'site.css'), path.join('assets', 'site.js')];
const php = fs.readFileSync(path.join(SITE, 'send-enquiry.php'), 'utf8');
if (/\$SMTP_PASS\s*=\s*'[^']+'/.test(php)) {
  console.error("refusing to package: send-enquiry.php contains a password. Move it to enquiry-config.php on the server — the GitHub repo is public.");
  process.exit(1);
}
const missing = required.filter((r) => !files.includes(r));
if (missing.length) { console.error('refusing to package, missing:', missing.join(', ')); process.exit(1); }

fs.mkdirSync(OUT_DIR, { recursive: true });
if (fs.existsSync(OUT)) fs.unlinkSync(OUT);
// Windows ships bsdtar, which writes real zip files with -a; list the top-level
// entries explicitly so the archive has no "./" prefix.
const tar = process.platform === 'win32' ? path.join(process.env.SystemRoot || 'C:\\Windows', 'System32', 'tar.exe') : 'zip';
const top = fs.readdirSync(stage);
if (process.platform === 'win32') execFileSync(tar, ['-a', '-c', '-f', OUT, '-C', stage, ...top]);
else execFileSync('zip', ['-r', '-q', OUT, ...top], { cwd: stage });
fs.rmSync(stage, { recursive: true, force: true });

const pages = files.filter((f) => f.endsWith('.html')).length;
console.log(`packaged ${files.length} files (${pages} pages) -> ${path.relative(path.join(__dirname, '..'), OUT)} (${(fs.statSync(OUT).size / 1024 / 1024).toFixed(2)} MB)`);
