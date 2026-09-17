/* @ds-bundle: {"format":4,"namespace":"HennaByMasuDesignSystem_0b7f2a","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Ornament","sourcePath":"components/core/Ornament.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Quote","sourcePath":"components/editorial/Quote.jsx"},{"name":"SectionHeading","sourcePath":"components/editorial/SectionHeading.jsx"},{"name":"StepMarker","sourcePath":"components/editorial/StepMarker.jsx"},{"name":"StyleCard","sourcePath":"components/editorial/StyleCard.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"GalleryTile","sourcePath":"components/media/GalleryTile.jsx"},{"name":"ImagePlate","sourcePath":"components/media/ImagePlate.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"}],"sourceHashes":{"components/core/Button.jsx":"f3cded4237bf","components/core/Eyebrow.jsx":"d662681316f8","components/core/Icon.jsx":"167365ac9873","components/core/Ornament.jsx":"710b1ed1af29","components/core/Wordmark.jsx":"34435b1dfaf4","components/editorial/Quote.jsx":"3caac30f9577","components/editorial/SectionHeading.jsx":"5f84b0861b8c","components/editorial/StepMarker.jsx":"fb5c49ffecb1","components/editorial/StyleCard.jsx":"f2b1dec0b823","components/forms/Field.jsx":"bc38865cba75","components/media/GalleryTile.jsx":"89bb87a5bd02","components/media/ImagePlate.jsx":"ed4aa5a73ecc","components/navigation/NavBar.jsx":"87da94ab75ab","components/navigation/SiteFooter.jsx":"22e1cd83026d","ui_kits/website/App.jsx":"a0e8ae6c1d8f","ui_kits/website/Hero.jsx":"f9cbae47cfe1","ui_kits/website/Sections.jsx":"56d4749960c8","ui_kits/website/Story.jsx":"ea507cb96e3c"},"inlinedExternals":[],"unexposedExports":[{"name":"iconNames","sourcePath":"components/core/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.HennaByMasuDesignSystem_0b7f2a = window.HennaByMasuDesignSystem_0b7f2a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  color = "var(--text-label)",
  align = "left",
  rule = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      color,
      justifyContent: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      ...style
    }
  }, rest), rule ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "36px",
      height: "1px",
      background: "currentColor",
      opacity: 0.5
    }
  }) : null, /*#__PURE__*/React.createElement("span", null, children), rule && align === "center" ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "36px",
      height: "1px",
      background: "currentColor",
      opacity: 0.5
    }
  }) : null);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Icon glyphs are Lucide (ISC licence, lucide.dev), inlined at 24px grid so the
   system has no runtime dependency. Stroke weight 1.25 to match the etched line motif. */
const PATHS = {
  menu: ["M4 6h16", "M4 12h16", "M4 18h16"],
  close: ["M18 6 6 18", "m6 6 12 12"],
  instagram: ["M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", "M17.5 6.51v.01"],
  mail: ["m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"],
  arrowRight: ["M5 12h14", "m12 5 7 7-7 7"],
  arrowUpRight: ["M7 7h10v10", "M7 17 17 7"],
  arrowLeft: ["M19 12H5", "m12 19-7-7 7-7"],
  chevronDown: ["m6 9 6 6 6-6"],
  chevronRight: ["m9 18 6-6-6-6"],
  phone: ["M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"],
  mapPin: ["M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"],
  calendar: ["M8 2v4", "M16 2v4", "M3 10h18"],
  plus: ["M5 12h14", "M12 5v14"],
  minus: ["M5 12h14"],
  check: ["M20 6 9 17l-5-5"]
};
const RECTS = {
  instagram: {
    x: 2,
    y: 2,
    width: 20,
    height: 20,
    rx: 5
  },
  mail: {
    x: 2,
    y: 4,
    width: 20,
    height: 16,
    rx: 2
  },
  calendar: {
    x: 3,
    y: 4,
    width: 18,
    height: 18,
    rx: 2
  }
};
const CIRCLES = {
  mapPin: {
    cx: 12,
    cy: 10,
    r: 3
  }
};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.25,
  color = "currentColor",
  style,
  ...rest
}) {
  const d = PATHS[name] || [];
  const rect = RECTS[name];
  const circle = CIRCLES[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: "block",
      flex: "none",
      ...style
    }
  }, rest), rect ? /*#__PURE__*/React.createElement("rect", rect) : null, circle ? /*#__PURE__*/React.createElement("circle", circle) : null, d.map((p, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: p
  })));
}
const iconNames = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, iconNames });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  font: "var(--type-label)",
  fontSize: "var(--fs-label)",
  letterSpacing: "var(--ls-label)",
  textTransform: "uppercase",
  textDecoration: "none",
  cursor: "pointer",
  borderRadius: "var(--radius-xs)",
  border: "1px solid transparent",
  transition: "background-color var(--dur-base) var(--ease-editorial),color var(--dur-base) var(--ease-editorial),border-color var(--dur-base) var(--ease-editorial),transform var(--dur-fast) var(--ease-editorial)"
};
const sizes = {
  sm: {
    padding: "12px 20px"
  },
  md: {
    padding: "17px 30px"
  },
  lg: {
    padding: "21px 40px",
    letterSpacing: "0.3em"
  }
};
const variants = {
  primary: {
    background: "var(--accent)",
    color: "var(--ivory-50)",
    borderColor: "var(--accent)"
  },
  gold: {
    background: "var(--accent-alt)",
    color: "var(--text-on-accent)",
    borderColor: "var(--accent-alt)"
  },
  outline: {
    background: "transparent",
    color: "var(--ivory-50)",
    borderColor: "var(--border-ivory)"
  },
  quiet: {
    background: "transparent",
    color: "var(--text-body)",
    borderColor: "var(--border-hairline)"
  },
  link: {
    background: "transparent",
    color: "var(--accent-alt)",
    padding: "0",
    borderColor: "transparent",
    borderBottom: "1px solid var(--border-accent)",
    borderRadius: 0
  }
};
const hovers = {
  primary: {
    background: "var(--accent-hover)",
    borderColor: "var(--accent-hover)"
  },
  gold: {
    background: "var(--accent-alt-hover)",
    borderColor: "var(--accent-alt-hover)"
  },
  outline: {
    background: "var(--ivory-50)",
    color: "var(--ink-900)",
    borderColor: "var(--ivory-50)"
  },
  quiet: {
    color: "var(--ivory-50)",
    borderColor: "var(--border-hairline-strong)"
  },
  link: {
    color: "var(--accent-alt-hover)",
    borderColor: "var(--accent-alt-hover)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  href,
  disabled = false,
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? "a" : "button";
  const composed = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(press && !disabled ? {
      transform: "translateY(1px)"
    } : null),
    ...(disabled ? {
      opacity: 0.38,
      cursor: "not-allowed"
    } : null),
    ...(fullWidth ? {
      display: "flex",
      width: "100%"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: !href && disabled ? true : undefined,
    style: composed,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), icon && iconPosition === "left" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap"
    }
  }, children), icon && iconPosition === "right" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Ornament.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Ornamental hairline rule with an etched lozenge at centre — the system's only
   decorative motif. Use once or twice per page, never as a list separator. */
function Ornament({
  width = "100%",
  color = "var(--border-accent)",
  markColor = "var(--accent-alt)",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      width,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1px",
      background: `linear-gradient(90deg,transparent,${color})`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "7px",
      height: "7px",
      transform: "rotate(45deg)",
      border: `1px solid ${markColor}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "3px",
      height: "3px",
      transform: "rotate(45deg)",
      background: markColor,
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "7px",
      height: "7px",
      transform: "rotate(45deg)",
      border: `1px solid ${markColor}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1px",
      background: `linear-gradient(270deg,transparent,${color})`
    }
  }));
}
Object.assign(__ds_scope, { Ornament });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Ornament.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* No logo file was supplied with the brief — the mark is set in type.
   Replace with the studio's artwork when it exists; keep the lockup proportions. */
function Wordmark({
  size = 22,
  color = "var(--ivory-50)",
  subtitle = "Mehendi Atelier",
  align = "center",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: `${Math.round(size * 0.36)}px`,
      alignItems: align === "center" ? "center" : "flex-start",
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: `${size}px`,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      lineHeight: 1,
      whiteSpace: "nowrap"
    }
  }, "Henna ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      letterSpacing: "0.06em",
      textTransform: "none"
    }
  }, "by"), " Masu"), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: `${Math.max(8, size * 0.36)}px`,
      letterSpacing: "0.42em",
      textTransform: "uppercase",
      opacity: 0.62,
      whiteSpace: "nowrap"
    }
  }, subtitle) : null);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  children,
  author,
  detail,
  size = "md",
  align = "left",
  style,
  ...rest
}) {
  const sizes = {
    md: "var(--fs-display-s)",
    lg: "var(--fs-display-m)"
  };
  const centered = align === "center";
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "28px",
      alignItems: centered ? "center" : "flex-start",
      textAlign: centered ? "center" : "left",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: sizes[size],
      lineHeight: 1.32,
      fontStyle: "italic",
      color: "var(--text-heading)",
      letterSpacing: "0.01em",
      maxWidth: "22ch"
    }
  }, children), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: centered ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--accent-alt)"
    }
  }, author), detail ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, detail) : null));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Quote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  level = "section",
  maxWidth = "var(--measure-narrow)",
  style,
  ...rest
}) {
  const fonts = {
    section: "var(--type-section)",
    heading: "var(--type-heading)",
    sub: "var(--type-subheading)"
  };
  const centered = align === "center";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      alignItems: centered ? "center" : "flex-start",
      textAlign: centered ? "center" : "left",
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    rule: true,
    align: align
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: fonts[level],
      color: "var(--text-heading)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      maxWidth,
      margin: 0
    }
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--text-body)",
      maxWidth: "var(--measure)"
    }
  }, lede) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/editorial/StepMarker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StepMarker({
  step,
  title,
  description,
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "46px",
      height: "46px",
      display: "grid",
      placeItems: "center",
      border: "1px solid var(--border-accent)",
      transform: "rotate(45deg)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: "rotate(-45deg)",
      fontFamily: "var(--font-display)",
      fontSize: "0.9375rem",
      color: "var(--accent-alt)",
      letterSpacing: "0.04em"
    }
  }, step)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1px",
      background: "var(--border-hairline)"
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.625rem",
      lineHeight: 1.2,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)",
      maxWidth: "34ch"
    }
  }, description), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, note) : null);
}
Object.assign(__ds_scope, { StepMarker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/StepMarker.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = {
  font: "var(--type-label)",
  fontSize: "var(--fs-label)",
  letterSpacing: "var(--ls-label)",
  textTransform: "uppercase",
  color: "var(--text-muted)"
};
const controlStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "14px 0",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--border-hairline)",
  borderRadius: 0,
  color: "var(--ivory-50)",
  fontFamily: "var(--font-body)",
  fontWeight: 300,
  fontSize: "var(--fs-body)",
  outline: "none",
  transition: "border-color var(--dur-base) var(--ease-editorial)"
};
function Field({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  options,
  rows = 3,
  required = false,
  hint,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = focus ? "var(--accent-alt)" : "var(--border-hairline)";
  const shared = {
    style: {
      ...controlStyle,
      borderBottomColor: borderColor
    },
    value,
    placeholder,
    required,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label, required ? " *" : ""), type === "select" ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, shared, {
    style: {
      ...shared.style,
      appearance: "none",
      paddingRight: "28px",
      cursor: "pointer"
    }
  }), (options || []).map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o,
    style: {
      background: "var(--surface-card)"
    }
  }, o))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 16,
    color: "var(--warm-gray-500)",
    style: {
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    }
  })) : type === "textarea" ? /*#__PURE__*/React.createElement("textarea", _extends({}, shared, {
    rows: rows,
    style: {
      ...shared.style,
      resize: "vertical",
      lineHeight: 1.6
    }
  })) : /*#__PURE__*/React.createElement("input", _extends({}, shared, {
    type: type
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...labelStyle,
      letterSpacing: "0.12em",
      color: "var(--warm-gray-600)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/media/ImagePlate.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The imagery primitive. Photography is the brand's main material; when a real
   photograph is missing this renders a dark textile plate with its intended subject
   named, so layouts stay honest instead of shipping fake art. */
function ImagePlate({
  src,
  alt = "",
  caption,
  label,
  ratio = "4 / 5",
  scrim = "none",
  frame = false,
  zoomOnHover = false,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const scrims = {
    none: null,
    tile: "var(--scrim-tile)",
    hero: "var(--scrim-hero)",
    flat: "var(--scrim-flat)"
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      background: "var(--surface-card)",
      backgroundImage: "var(--texture-linen)",
      border: frame ? "1px solid var(--border-hairline)" : "none",
      borderRadius: "var(--radius-xs)"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: zoomOnHover && hover ? "scale(var(--image-zoom))" : "scale(1)",
      transition: "transform var(--dur-cinematic) var(--ease-out-soft)"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      padding: "24px",
      textAlign: "center",
      border: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "9px",
      height: "9px",
      transform: "rotate(45deg)",
      border: "1px solid var(--border-accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label || "Photography")), scrims[scrim] ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: scrims[scrim],
      pointerEvents: "none"
    }
  }) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, children) : null), caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { ImagePlate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ImagePlate.jsx", error: String((e && e.message) || e) }); }

// components/editorial/StyleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StyleCard({
  index,
  title,
  description,
  detail,
  label,
  src,
  href = "#",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "28px",
      textDecoration: "none",
      paddingBottom: "32px",
      borderBottom: "1px solid var(--border-hairline)",
      transition: "border-color var(--dur-base) var(--ease-editorial)",
      borderBottomColor: hover ? "var(--border-accent)" : "var(--border-hairline)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ImagePlate, {
    src: src,
    label: label,
    ratio: "3 / 4",
    zoomOnHover: hover,
    scrim: "none"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "16px"
    }
  }, index ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      color: "var(--accent-alt)"
    }
  }, index) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display-s)",
      lineHeight: 1.2,
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      margin: 0
    }
  }, title)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      marginTop: "8px"
    }
  }, detail ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, detail) : null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrowRight",
    size: 18,
    color: hover ? "var(--accent-alt)" : "var(--warm-gray-500)"
  }))));
}
Object.assign(__ds_scope, { StyleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/StyleCard.jsx", error: String((e && e.message) || e) }); }

// components/media/GalleryTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GalleryTile({
  src,
  label,
  caption,
  meta,
  ratio = "4 / 5",
  span = 1,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      display: "block",
      padding: 0,
      border: "none",
      background: "none",
      cursor: onClick ? "pointer" : "default",
      textAlign: "left",
      gridColumn: `span ${span}`,
      width: "100%",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ImagePlate, {
    src: src,
    label: label,
    ratio: ratio,
    scrim: "tile",
    zoomOnHover: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "24px",
      right: "24px",
      bottom: "22px",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "16px",
      opacity: hover ? 1 : 0.82,
      transform: hover ? "translateY(0)" : "translateY(4px)",
      transition: "opacity var(--dur-base) var(--ease-editorial),transform var(--dur-base) var(--ease-editorial)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--accent-alt)"
    }
  }, meta) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.25rem",
      color: "var(--ivory-50)",
      letterSpacing: "0.01em"
    }
  }, caption)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrowUpRight",
    size: 18,
    color: "var(--ivory-50)",
    style: {
      opacity: hover ? 1 : 0,
      transition: "opacity var(--dur-base) var(--ease-editorial)"
    }
  })));
}
Object.assign(__ds_scope, { GalleryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/GalleryTile.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  onMenu,
  menuOpen = false,
  instagramHref = "#",
  enquiryHref = "#",
  solid = false,
  style,
  ...rest
}) {
  const iconBtn = {
    display: "grid",
    placeItems: "center",
    width: "38px",
    height: "38px",
    padding: 0,
    background: "transparent",
    border: "1px solid var(--border-hairline)",
    borderRadius: "var(--radius-xs)",
    color: "var(--ivory-50)",
    cursor: "pointer",
    transition: "border-color var(--dur-base) var(--ease-editorial),background-color var(--dur-base) var(--ease-editorial)"
  };
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      padding: "20px var(--gutter)",
      background: solid ? "var(--surface-page)" : "var(--overlay-nav)",
      backdropFilter: solid ? "none" : "var(--blur-nav)",
      WebkitBackdropFilter: solid ? "none" : "var(--blur-nav)",
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: onMenu,
    style: {
      justifySelf: "start",
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      background: "none",
      border: "none",
      padding: "6px 0",
      cursor: "pointer",
      color: "var(--ivory-50)",
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-nav)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: menuOpen ? "close" : "menu",
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, menuOpen ? "Close" : "Menu")), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 20,
    subtitle: "Mehendi Atelier"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: "end",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: instagramHref,
    "aria-label": "Instagram",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "instagram",
    size: 17
  })), /*#__PURE__*/React.createElement("a", {
    href: enquiryHref,
    "aria-label": "Enquiries",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 17
  }))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const colTitle = {
  font: "var(--type-label)",
  fontSize: "var(--fs-label)",
  letterSpacing: "var(--ls-label)",
  textTransform: "uppercase",
  color: "var(--accent-alt)",
  marginBottom: "20px"
};
const rowText = {
  font: "var(--type-body)",
  fontSize: "var(--fs-small)",
  color: "var(--text-body)"
};
function SiteFooter({
  email = "studio@hennabymasu.com",
  phone = "+91 98200 41127",
  locations = [],
  social = [],
  legal = "© 2026 Henna by Masu",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--surface-page-alt)",
      backgroundImage: "var(--texture-linen)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--space-9) var(--gutter) var(--space-6)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 28,
    subtitle: "Bespoke bridal mehendi"
  }), /*#__PURE__*/React.createElement(__ds_scope.Ornament, {
    width: "200px"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, "Enquiries"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    style: {
      ...rowText,
      display: "flex",
      gap: "10px",
      alignItems: "center",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 15,
    color: "var(--warm-gray-500)"
  }), email), /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone.replace(/\s/g, "")}`,
    style: {
      ...rowText,
      display: "flex",
      gap: "10px",
      alignItems: "center",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 15,
    color: "var(--warm-gray-500)"
  }), phone))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, "Travelling to"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, locations.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: rowText
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, "Elsewhere"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href,
    style: {
      ...rowText,
      color: "var(--text-body)"
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, "Studio"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...rowText,
      maxWidth: "24ch"
    }
  }, "By appointment only.", /*#__PURE__*/React.createElement("br", null), "Tuesday to Saturday, 11\u20137."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "16px",
      paddingTop: "var(--space-5)",
      borderTop: "1px solid var(--border-hairline)",
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, legal), /*#__PURE__*/React.createElement("span", null, "Est. 2026 \u2014 By appointment"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function BookingDrawer({
  open,
  onClose
}) {
  const {
    Field,
    Button,
    Eyebrow,
    Icon,
    Ornament
  } = window.HennaByMasuDesignSystem_0b7f2a;
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    date: "",
    occasion: "Bridal mehendi",
    city: "Leicester",
    notes: ""
  });
  const [sent, setSent] = React.useState(false);
  const set = k => v => setForm(f => ({
    ...f,
    [k]: v
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 70,
      display: "flex",
      justifyContent: "flex-end",
      background: "var(--surface-scrim)",
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      transition: "opacity var(--dur-base) var(--ease-editorial)"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("aside", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "min(520px,100%)",
      height: "100%",
      overflowY: "auto",
      boxSizing: "border-box",
      background: "var(--surface-page)",
      borderLeft: "1px solid var(--border-hairline)",
      padding: "32px clamp(24px,4vw,48px) 48px",
      transform: open ? "translateX(0)" : "translateX(24px)",
      transition: "transform var(--dur-slow) var(--ease-out-soft)",
      display: "flex",
      flexDirection: "column",
      gap: "28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Enquiry"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 18,
    color: "var(--warm-gray-400)"
  }))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      paddingTop: "24px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-heading)",
      textTransform: "uppercase",
      letterSpacing: "0.03em",
      margin: 0
    }
  }, "Thank you"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, "Your enquiry is with the studio. Masu replies to every note personally, usually within two days."), /*#__PURE__*/React.createElement(Ornament, {
    width: "140px"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    size: "sm",
    onClick: onClose,
    style: {
      alignSelf: "flex-start"
    }
  }, "Back to the site")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-heading)",
      textTransform: "uppercase",
      letterSpacing: "0.03em",
      margin: 0,
      maxWidth: "16ch"
    }
  }, "Book your consultation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "22px"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    value: form.name,
    onChange: set("name"),
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    type: "email",
    value: form.email,
    onChange: set("email"),
    required: true,
    hint: "We reply within two days"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Celebration date",
    type: "date",
    value: form.date,
    onChange: set("date")
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Occasion",
    type: "select",
    options: ["Bridal mehendi", "Minimal modern henna", "Festive & guest designs"],
    value: form.occasion,
    onChange: set("occasion")
  }), /*#__PURE__*/React.createElement(Field, {
    label: "City",
    type: "select",
    options: ["Leicester", "Birmingham", "Coventry", "London", "Elsewhere"],
    value: form.city,
    onChange: set("city")
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Tell us about the celebration",
    type: "textarea",
    rows: 4,
    value: form.notes,
    onChange: set("notes")
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Send enquiry"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "By appointment only \xB7 Studio, Leicester"))));
}
function App() {
  const {
    SiteFooter
  } = window.HennaByMasuDesignSystem_0b7f2a;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [booking, setBooking] = React.useState(false);
  const go = id => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop,
      behavior: "smooth"
    });
  };
  const navigate = label => {
    if (label === "Booking") {
      setMenuOpen(false);
      setBooking(true);
      return;
    }
    go({
      "Signature styles": "signature-styles",
      "Gallery": "gallery",
      "The experience": "the-experience",
      "The artist": "the-artist",
      "Testimonials": "testimonials"
    }[label]);
  };
  React.useEffect(() => {
    const els = [...document.querySelectorAll("[data-reveal]")];
    els.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(var(--reveal-shift))";
      el.style.transition = "opacity var(--dur-reveal) var(--ease-out-soft),transform var(--dur-reveal) var(--ease-out-soft)";
    });
    let pending = els;
    const check = () => {
      pending = pending.filter(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.92) {
          el.style.opacity = 1;
          el.style.transform = "none";
          return false;
        }
        return true;
      });
      if (!pending.length) window.removeEventListener("scroll", check);
    };
    check();
    const poll = setInterval(() => {
      check();
      if (!pending.length) clearInterval(poll);
    }, 250);
    window.addEventListener("scroll", check, {
      passive: true
    });
    window.addEventListener("resize", check);
    return () => {
      clearInterval(poll);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Hero, {
    onBook: () => setBooking(true),
    onGallery: () => go("gallery"),
    onMenu: () => setMenuOpen(true),
    menuOpen: menuOpen
  }), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true
  }, /*#__PURE__*/React.createElement(window.SignatureStyles, {
    onEnquire: () => setBooking(true)
  })), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true
  }, /*#__PURE__*/React.createElement(window.FeaturedGallery, null)), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true
  }, /*#__PURE__*/React.createElement(window.Experience, null)), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true
  }, /*#__PURE__*/React.createElement(window.ArtistStory, null)), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true
  }, /*#__PURE__*/React.createElement(window.Testimonials, null)), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true
  }, /*#__PURE__*/React.createElement(window.BookingCTA, {
    onBook: () => setBooking(true)
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    locations: ["Leicester — studio", "Birmingham & Coventry", "Northampton & Luton", "London"],
    social: [{
      label: "Instagram — @hennabymasu",
      href: "#"
    }, {
      label: "Pinterest",
      href: "#"
    }, {
      label: "WhatsApp",
      href: "#"
    }]
  }), /*#__PURE__*/React.createElement(window.MenuOverlay, {
    open: menuOpen,
    onClose: () => setMenuOpen(false),
    onNavigate: navigate
  }), /*#__PURE__*/React.createElement(BookingDrawer, {
    open: booking,
    onClose: () => setBooking(false)
  }));
}
Object.assign(window, {
  BookingDrawer,
  App
});
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  onBook,
  onGallery,
  onMenu,
  menuOpen
}) {
  const {
    Button,
    Eyebrow,
    NavBar,
    Icon
  } = window.HennaByMasuDesignSystem_0b7f2a;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--surface-page-alt)",
      backgroundImage: "var(--texture-linen)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "96px",
      right: "var(--gutter)",
      maxWidth: "26ch",
      opacity: 0.45
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--warm-gray-600)",
      textAlign: "right",
      lineHeight: 2,
      display: "block"
    }
  }, "Cinematic hero footage \u2014 bridal mehendi being applied, candlelight, jewellery, silk")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-hero)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    onMenu: onMenu,
    menuOpen: menuOpen
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      gap: "40px",
      padding: "0 var(--gutter) clamp(56px,9vh,110px)",
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      width: "100%",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Bridal artistry \u2014 Est. 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-hero)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      maxWidth: "17ch",
      margin: 0
    }
  }, "Henna, told as a love story"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--text-body)",
      maxWidth: "48ch"
    }
  }, "Bespoke bridal mehendi and contemporary henna artistry for celebrations worth remembering."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      marginTop: "8px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onBook
  }, "Book your bridal consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: onGallery
  }, "Explore the gallery")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      marginTop: "24px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 18,
    color: "var(--warm-gray-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Scroll \u2014 Leicester \xB7 Birmingham \xB7 London"))));
}
function MenuOverlay({
  open,
  onClose,
  onNavigate
}) {
  const {
    Wordmark,
    Icon,
    Ornament
  } = window.HennaByMasuDesignSystem_0b7f2a;
  const items = ["Signature styles", "Gallery", "The experience", "The artist", "Testimonials", "Booking"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      background: "var(--surface-scrim-strong)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      transition: "opacity var(--dur-slow) var(--ease-editorial)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px var(--gutter)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--ivory-50)",
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-nav)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 18
  }), "Close"), /*#__PURE__*/React.createElement(Wordmark, {
    size: 20,
    subtitle: "Mehendi Atelier"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "88px"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "10px",
      padding: "0 var(--gutter)"
    }
  }, items.map((label, i) => /*#__PURE__*/React.createElement("button", {
    key: label,
    onClick: () => onNavigate(label),
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "24px",
      background: "none",
      border: "none",
      padding: "10px 0",
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      color: "var(--accent-alt)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(2rem,4.4vw,3.5rem)",
      lineHeight: 1.1,
      textTransform: "uppercase",
      letterSpacing: "0.03em",
      color: "var(--ivory-50)"
    }
  }, label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--gutter) 48px",
      display: "flex",
      flexDirection: "column",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement(Ornament, {
    width: "180px"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "By appointment \u2014 studio@hennabymasu.com")));
}
Object.assign(window, {
  Hero,
  MenuOverlay
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sectionShell = {
  padding: "var(--section-y) var(--gutter)",
  maxWidth: "var(--content-max)",
  margin: "0 auto",
  boxSizing: "border-box"
};
function SignatureStyles({
  onEnquire
}) {
  const {
    SectionHeading,
    StyleCard
  } = window.HennaByMasuDesignSystem_0b7f2a;
  const styles = [{
    index: "01",
    title: "Bridal mehendi",
    description: "Full hands and feet, drawn freehand over an unhurried afternoon. Portraits, initials and motifs from your own story, worked into a design made only once.",
    detail: "From 5 hours · Bride + 2 guests",
    label: "Bridal hands, full coverage"
  }, {
    index: "02",
    title: "Minimal modern henna",
    description: "Fine single lines, negative space and one deliberate motif. For engagements, mehendi-adjacent events and brides who want restraint.",
    detail: "From 90 minutes · Hands or wrists",
    label: "Single-vine wrist, minimal"
  }, {
    index: "03",
    title: "Festive & guest designs",
    description: "Karwa Chauth, Eid, Diwali and the long table of guests at a wedding. Quick, generous, and never rushed in feeling.",
    detail: "Studio or on location · Per guest",
    label: "Guest palms, festive motifs"
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Signature Styles",
    id: "signature-styles",
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionShell
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Signature styles",
    title: "Three ways to wear henna",
    lede: "Every commission begins with the story you want your hands to tell."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "var(--space-7)",
      marginTop: "var(--space-8)"
    }
  }, styles.map(s => /*#__PURE__*/React.createElement(StyleCard, _extends({
    key: s.index
  }, s, {
    href: "#booking",
    onClick: onEnquire
  }))))));
}
function FeaturedGallery() {
  const {
    SectionHeading,
    GalleryTile,
    Button
  } = window.HennaByMasuDesignSystem_0b7f2a;
  const [cols, setCols] = React.useState(3);
  React.useEffect(() => {
    const fit = () => setCols(window.innerWidth < 720 ? 1 : window.innerWidth < 1080 ? 2 : 3);
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  const tiles = [{
    meta: "Bridal — 2026",
    caption: "Anaya, Leicester",
    label: "Full bridal hands",
    span: 2,
    ratio: "16 / 10"
  }, {
    meta: "Minimal",
    caption: "Ira, Birmingham",
    label: "Single-vine wrist",
    span: 1,
    ratio: "4 / 5"
  }, {
    meta: "Detail",
    caption: "Jaali panel",
    label: "Jaali lattice, palm",
    span: 1,
    ratio: "4 / 5"
  }, {
    meta: "Bridal",
    caption: "Meher, Coventry",
    label: "Feet, mirrored mandala",
    span: 1,
    ratio: "4 / 5"
  }, {
    meta: "Festive",
    caption: "Karwa Chauth",
    label: "Guest palms, festive",
    span: 2,
    ratio: "16 / 10"
  }, {
    meta: "Detail",
    caption: "Cone work",
    label: "Henna cone in hand",
    span: 1,
    ratio: "4 / 5"
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Featured Gallery",
    id: "gallery",
    style: {
      background: "var(--surface-page-alt)",
      backgroundImage: "var(--texture-linen)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionShell
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "32px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Featured gallery",
    title: "Recent work"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    icon: "arrowRight"
  }, "The full archive")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: cols === 1 ? "1fr" : `repeat(${cols},1fr)`,
      gap: "var(--grid-gap)",
      marginTop: "var(--space-8)"
    }
  }, tiles.map(t => /*#__PURE__*/React.createElement(GalleryTile, _extends({
    key: t.caption
  }, t, {
    span: Math.min(t.span, cols),
    ratio: cols === 1 ? "4 / 5" : t.ratio,
    onClick: () => {}
  }))))));
}
function Experience() {
  const {
    SectionHeading,
    StepMarker
  } = window.HennaByMasuDesignSystem_0b7f2a;
  const steps = [{
    step: "I",
    title: "Consultation",
    description: "We talk through the celebration, the outfit, the jewellery and the motifs that carry meaning for you.",
    note: "45 minutes · studio or video"
  }, {
    step: "II",
    title: "Custom design",
    description: "A drawn proposal for your hands and feet, revised once, held for the day and never repeated for another bride.",
    note: "Two weeks before the date"
  }, {
    step: "III",
    title: "Your celebration",
    description: "An unhurried session at your home or venue, with aftercare and a stain plan for the days that follow.",
    note: "Travel by arrangement"
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "The Experience",
    id: "the-experience",
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionShell
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The experience",
    title: "From first note to the last stain",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "var(--space-7)",
      marginTop: "var(--space-9)"
    }
  }, steps.map(s => /*#__PURE__*/React.createElement(StepMarker, _extends({
    key: s.step
  }, s))))));
}
Object.assign(window, {
  SignatureStyles,
  FeaturedGallery,
  Experience,
  sectionShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Story.jsx
try { (() => {
function ArtistStory() {
  const {
    Eyebrow,
    ImagePlate,
    Button,
    Ornament
  } = window.HennaByMasuDesignSystem_0b7f2a;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Artist Story",
    id: "the-artist",
    style: {
      background: "var(--surface-page-alt)",
      backgroundImage: "var(--texture-linen)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.sectionShell,
      display: "grid",
      gridTemplateColumns: "minmax(280px,0.85fr) minmax(300px,1fr)",
      gap: "clamp(40px,6vw,110px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(ImagePlate, {
    ratio: "4 / 5",
    label: "Masu, portrait in studio",
    caption: "Masuma \u2014 studio, Leicester",
    frame: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "28px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "The artist"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-section)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      maxWidth: "16ch",
      margin: 0
    }
  }, "Drawn by hand, for one day only"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--text-body)",
      maxWidth: "52ch"
    }
  }, "Masuma learned the traditional vocabulary of jaali, paisley and mor at home, and has spent years bending it towards something quieter and more personal from her studio in Leicester."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)",
      maxWidth: "52ch"
    }
  }, "She takes a small number of brides each season so every design can be drawn freehand on the day. No stencils, no repeated patterns, no two hands alike."), /*#__PURE__*/React.createElement(Ornament, {
    width: "160px"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "48px",
      flexWrap: "wrap"
    }
  }, [["8 years", "Practising"], ["120+", "Brides"], ["4 cities", "On call"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.75rem",
      color: "var(--accent-alt)"
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, l)))), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    size: "sm",
    style: {
      alignSelf: "flex-start"
    }
  }, "Read the full story"))));
}
function Testimonials() {
  const {
    Eyebrow,
    Quote
  } = window.HennaByMasuDesignSystem_0b7f2a;
  const quotes = [{
    author: "Anaya R.",
    detail: "Bridal — Leicester, March 2026",
    text: "She drew our whole story into my hands."
  }, {
    author: "Ira S.",
    detail: "Minimal — Birmingham, January 2026",
    text: "One line, and it was the most photographed thing I wore."
  }, {
    author: "Meher K.",
    detail: "Bridal — Northampton, December 2025",
    text: "Six hours that felt like the calmest part of the wedding."
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Testimonials",
    id: "testimonials",
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: window.sectionShell
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true,
    align: "center"
  }, "In their words"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
      gap: "var(--space-8)",
      marginTop: "var(--space-8)"
    }
  }, quotes.map(q => /*#__PURE__*/React.createElement(Quote, {
    key: q.author,
    author: q.author,
    detail: q.detail,
    align: "center"
  }, q.text)))));
}
function BookingCTA({
  onBook
}) {
  const {
    Eyebrow,
    Button,
    Ornament
  } = window.HennaByMasuDesignSystem_0b7f2a;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Booking CTA",
    id: "booking",
    style: {
      position: "relative",
      background: "var(--forest-800)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--texture-linen)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.sectionShell,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    align: "center",
    color: "var(--accent-quiet)"
  }, "By appointment \u2014 2026 dates open"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-section)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      maxWidth: "20ch",
      margin: 0
    }
  }, "Let's create something unforgettable."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--text-body)",
      maxWidth: "46ch"
    }
  }, "Tell us the date and the celebration. We reply within two days with availability and a proposal."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      justifyContent: "center",
      marginTop: "8px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onBook
  }, "Book your bridal consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    href: "mailto:studio@hennabymasu.com"
  }, "Email the studio")), /*#__PURE__*/React.createElement(Ornament, {
    width: "220px",
    style: {
      marginTop: "16px"
    }
  })));
}
Object.assign(window, {
  ArtistStory,
  Testimonials,
  BookingCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Story.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Ornament = __ds_scope.Ornament;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StepMarker = __ds_scope.StepMarker;

__ds_ns.StyleCard = __ds_scope.StyleCard;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.GalleryTile = __ds_scope.GalleryTile;

__ds_ns.ImagePlate = __ds_scope.ImagePlate;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

})();
