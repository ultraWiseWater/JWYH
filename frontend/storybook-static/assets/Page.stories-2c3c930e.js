import { i as gd } from "./index-3639c647.js";
import { a as Ed, c as Xi, g as _d } from "./_commonjsHelpers-042e6b4d.js";
import { d as Cy } from "./index-356e4a49.js";
import { j as D } from "./jsx-runtime-94f6e698.js";
import { R as Oy } from "./index-8db94870.js";
import { H as Sy } from "./Header-f13548e4.js";
import "./index-d475d2ea.js";
import "./Button-1703f682.js";
function $y(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const a in n)
        if (a !== "default" && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(n, a);
          o &&
            Object.defineProperty(
              e,
              a,
              o.get ? o : { enumerable: !0, get: () => n[a] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
var Ee = {},
  Qi = { exports: {} };
Qi.exports;
(function (e) {
  const r =
      (o = 0) =>
      (l) =>
        `\x1B[${38 + o};5;${l}m`,
    n =
      (o = 0) =>
      (l, u, i) =>
        `\x1B[${38 + o};2;${l};${u};${i}m`;
  function a() {
    const o = new Map(),
      l = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29],
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39],
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49],
        },
      };
    (l.color.gray = l.color.blackBright),
      (l.bgColor.bgGray = l.bgColor.bgBlackBright),
      (l.color.grey = l.color.blackBright),
      (l.bgColor.bgGrey = l.bgColor.bgBlackBright);
    for (const [u, i] of Object.entries(l)) {
      for (const [s, d] of Object.entries(i))
        (l[s] = { open: `\x1B[${d[0]}m`, close: `\x1B[${d[1]}m` }),
          (i[s] = l[s]),
          o.set(d[0], d[1]);
      Object.defineProperty(l, u, { value: i, enumerable: !1 });
    }
    return (
      Object.defineProperty(l, "codes", { value: o, enumerable: !1 }),
      (l.color.close = "\x1B[39m"),
      (l.bgColor.close = "\x1B[49m"),
      (l.color.ansi256 = r()),
      (l.color.ansi16m = n()),
      (l.bgColor.ansi256 = r(10)),
      (l.bgColor.ansi16m = n(10)),
      Object.defineProperties(l, {
        rgbToAnsi256: {
          value: (u, i, s) =>
            u === i && i === s
              ? u < 8
                ? 16
                : u > 248
                ? 231
                : Math.round(((u - 8) / 247) * 24) + 232
              : 16 +
                36 * Math.round((u / 255) * 5) +
                6 * Math.round((i / 255) * 5) +
                Math.round((s / 255) * 5),
          enumerable: !1,
        },
        hexToRgb: {
          value: (u) => {
            const i = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(
              u.toString(16)
            );
            if (!i) return [0, 0, 0];
            let { colorString: s } = i.groups;
            s.length === 3 &&
              (s = s
                .split("")
                .map((f) => f + f)
                .join(""));
            const d = Number.parseInt(s, 16);
            return [(d >> 16) & 255, (d >> 8) & 255, d & 255];
          },
          enumerable: !1,
        },
        hexToAnsi256: {
          value: (u) => l.rgbToAnsi256(...l.hexToRgb(u)),
          enumerable: !1,
        },
      }),
      l
    );
  }
  Object.defineProperty(e, "exports", { enumerable: !0, get: a });
})(Qi);
var Rd = Qi.exports,
  _e = {};
Object.defineProperty(_e, "__esModule", { value: !0 });
_e.printIteratorEntries = qy;
_e.printIteratorValues = Ay;
_e.printListItems = xy;
_e.printObjectProperties = My;
const Ty = (e, t) => {
  const r = Object.keys(e).sort(t);
  return (
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(e).forEach((n) => {
        Object.getOwnPropertyDescriptor(e, n).enumerable && r.push(n);
      }),
    r
  );
};
function qy(e, t, r, n, a, o, l = ": ") {
  let u = "",
    i = e.next();
  if (!i.done) {
    u += t.spacingOuter;
    const s = r + t.indent;
    for (; !i.done; ) {
      const d = o(i.value[0], t, s, n, a),
        f = o(i.value[1], t, s, n, a);
      (u += s + d + l + f),
        (i = e.next()),
        i.done ? t.min || (u += ",") : (u += "," + t.spacingInner);
    }
    u += t.spacingOuter + r;
  }
  return u;
}
function Ay(e, t, r, n, a, o) {
  let l = "",
    u = e.next();
  if (!u.done) {
    l += t.spacingOuter;
    const i = r + t.indent;
    for (; !u.done; )
      (l += i + o(u.value, t, i, n, a)),
        (u = e.next()),
        u.done ? t.min || (l += ",") : (l += "," + t.spacingInner);
    l += t.spacingOuter + r;
  }
  return l;
}
function xy(e, t, r, n, a, o) {
  let l = "";
  if (e.length) {
    l += t.spacingOuter;
    const u = r + t.indent;
    for (let i = 0; i < e.length; i++)
      (l += u),
        i in e && (l += o(e[i], t, u, n, a)),
        i < e.length - 1 ? (l += "," + t.spacingInner) : t.min || (l += ",");
    l += t.spacingOuter + r;
  }
  return l;
}
function My(e, t, r, n, a, o) {
  let l = "";
  const u = Ty(e, t.compareKeys);
  if (u.length) {
    l += t.spacingOuter;
    const i = r + t.indent;
    for (let s = 0; s < u.length; s++) {
      const d = u[s],
        f = o(d, t, i, n, a),
        p = o(e[d], t, i, n, a);
      (l += i + f + ": " + p),
        s < u.length - 1 ? (l += "," + t.spacingInner) : t.min || (l += ",");
    }
    l += t.spacingOuter + r;
  }
  return l;
}
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.test = Be.serialize = Be.default = void 0;
var ts = _e,
  Lr = (function () {
    return typeof globalThis < "u"
      ? globalThis
      : typeof Lr < "u"
      ? Lr
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : Function("return this")();
  })(),
  ml = Lr["jest-symbol-do-not-touch"] || Lr.Symbol;
const By =
    typeof ml == "function" && ml.for
      ? ml.for("jest.asymmetricMatcher")
      : 1267621,
  hr = " ",
  Pd = (e, t, r, n, a, o) => {
    const l = e.toString();
    return l === "ArrayContaining" || l === "ArrayNotContaining"
      ? ++n > t.maxDepth
        ? "[" + l + "]"
        : l + hr + "[" + (0, ts.printListItems)(e.sample, t, r, n, a, o) + "]"
      : l === "ObjectContaining" || l === "ObjectNotContaining"
      ? ++n > t.maxDepth
        ? "[" + l + "]"
        : l +
          hr +
          "{" +
          (0, ts.printObjectProperties)(e.sample, t, r, n, a, o) +
          "}"
      : l === "StringMatching" ||
        l === "StringNotMatching" ||
        l === "StringContaining" ||
        l === "StringNotContaining"
      ? l + hr + o(e.sample, t, r, n, a)
      : e.toAsymmetricMatcher();
  };
Be.serialize = Pd;
const wd = (e) => e && e.$$typeof === By;
Be.test = wd;
const Iy = { serialize: Pd, test: wd };
var jy = Iy;
Be.default = jy;
var Ie = {},
  Ny = ({ onlyFirst: e = !1 } = {}) => {
    const t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  };
Object.defineProperty(Ie, "__esModule", { value: !0 });
Ie.test = Ie.serialize = Ie.default = void 0;
var Cd = Od(Ny),
  x = Od(Rd);
function Od(e) {
  return e && e.__esModule ? e : { default: e };
}
const Dy = (e) =>
    e.replace((0, Cd.default)(), (t) => {
      switch (t) {
        case x.default.red.close:
        case x.default.green.close:
        case x.default.cyan.close:
        case x.default.gray.close:
        case x.default.white.close:
        case x.default.yellow.close:
        case x.default.bgRed.close:
        case x.default.bgGreen.close:
        case x.default.bgYellow.close:
        case x.default.inverse.close:
        case x.default.dim.close:
        case x.default.bold.close:
        case x.default.reset.open:
        case x.default.reset.close:
          return "</>";
        case x.default.red.open:
          return "<red>";
        case x.default.green.open:
          return "<green>";
        case x.default.cyan.open:
          return "<cyan>";
        case x.default.gray.open:
          return "<gray>";
        case x.default.white.open:
          return "<white>";
        case x.default.yellow.open:
          return "<yellow>";
        case x.default.bgRed.open:
          return "<bgRed>";
        case x.default.bgGreen.open:
          return "<bgGreen>";
        case x.default.bgYellow.open:
          return "<bgYellow>";
        case x.default.inverse.open:
          return "<inverse>";
        case x.default.dim.open:
          return "<dim>";
        case x.default.bold.open:
          return "<bold>";
        default:
          return "";
      }
    }),
  Sd = (e) => typeof e == "string" && !!e.match((0, Cd.default)());
Ie.test = Sd;
const $d = (e, t, r, n, a, o) => o(Dy(e), t, r, n, a);
Ie.serialize = $d;
const ky = { serialize: $d, test: Sd };
var Ly = ky;
Ie.default = Ly;
var je = {};
Object.defineProperty(je, "__esModule", { value: !0 });
je.test = je.serialize = je.default = void 0;
var rs = _e;
const Fy = " ",
  Td = ["DOMStringMap", "NamedNodeMap"],
  Uy = /^(HTML\w*Collection|NodeList)$/,
  Vy = (e) => Td.indexOf(e) !== -1 || Uy.test(e),
  qd = (e) =>
    e && e.constructor && !!e.constructor.name && Vy(e.constructor.name);
je.test = qd;
const Hy = (e) => e.constructor.name === "NamedNodeMap",
  Ad = (e, t, r, n, a, o) => {
    const l = e.constructor.name;
    return ++n > t.maxDepth
      ? "[" + l + "]"
      : (t.min ? "" : l + Fy) +
          (Td.indexOf(l) !== -1
            ? "{" +
              (0, rs.printObjectProperties)(
                Hy(e)
                  ? Array.from(e).reduce(
                      (u, i) => ((u[i.name] = i.value), u),
                      {}
                    )
                  : { ...e },
                t,
                r,
                n,
                a,
                o
              ) +
              "}"
            : "[" + (0, rs.printListItems)(Array.from(e), t, r, n, a, o) + "]");
  };
je.serialize = Ad;
const Wy = { serialize: Ad, test: qd };
var zy = Wy;
je.default = zy;
var Ne = {},
  V = {},
  Zi = {};
Object.defineProperty(Zi, "__esModule", { value: !0 });
Zi.default = Ky;
function Ky(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(V, "__esModule", { value: !0 });
V.printText =
  V.printProps =
  V.printElementAsLeaf =
  V.printElement =
  V.printComment =
  V.printChildren =
    void 0;
var xd = Gy(Zi);
function Gy(e) {
  return e && e.__esModule ? e : { default: e };
}
const Yy = (e, t, r, n, a, o, l) => {
  const u = n + r.indent,
    i = r.colors;
  return e
    .map((s) => {
      const d = t[s];
      let f = l(d, r, u, a, o);
      return (
        typeof d != "string" &&
          (f.indexOf(`
`) !== -1 && (f = r.spacingOuter + u + f + r.spacingOuter + n),
          (f = "{" + f + "}")),
        r.spacingInner +
          n +
          i.prop.open +
          s +
          i.prop.close +
          "=" +
          i.value.open +
          f +
          i.value.close
      );
    })
    .join("");
};
V.printProps = Yy;
const Jy = (e, t, r, n, a, o) =>
  e
    .map(
      (l) =>
        t.spacingOuter +
        r +
        (typeof l == "string" ? Md(l, t) : o(l, t, r, n, a))
    )
    .join("");
V.printChildren = Jy;
const Md = (e, t) => {
  const r = t.colors.content;
  return r.open + (0, xd.default)(e) + r.close;
};
V.printText = Md;
const Xy = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + (0, xd.default)(e) + "-->" + r.close;
};
V.printComment = Xy;
const Qy = (e, t, r, n, a) => {
  const o = n.colors.tag;
  return (
    o.open +
    "<" +
    e +
    (t && o.close + t + n.spacingOuter + a + o.open) +
    (r
      ? ">" + o.close + r + n.spacingOuter + a + o.open + "</" + e
      : (t && !n.min ? "" : " ") + "/") +
    ">" +
    o.close
  );
};
V.printElement = Qy;
const Zy = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
};
V.printElementAsLeaf = Zy;
Object.defineProperty(Ne, "__esModule", { value: !0 });
Ne.test = Ne.serialize = Ne.default = void 0;
var ut = V;
const em = 1,
  Bd = 3,
  Id = 8,
  jd = 11,
  tm = /^((HTML|SVG)\w*)?Element$/,
  rm = (e) => {
    try {
      return typeof e.hasAttribute == "function" && e.hasAttribute("is");
    } catch {
      return !1;
    }
  },
  nm = (e) => {
    const t = e.constructor.name,
      { nodeType: r, tagName: n } = e,
      a = (typeof n == "string" && n.includes("-")) || rm(e);
    return (
      (r === em && (tm.test(t) || a)) ||
      (r === Bd && t === "Text") ||
      (r === Id && t === "Comment") ||
      (r === jd && t === "DocumentFragment")
    );
  },
  Nd = (e) => {
    var t;
    return (
      (e == null || (t = e.constructor) === null || t === void 0
        ? void 0
        : t.name) && nm(e)
    );
  };
Ne.test = Nd;
function am(e) {
  return e.nodeType === Bd;
}
function om(e) {
  return e.nodeType === Id;
}
function bl(e) {
  return e.nodeType === jd;
}
const Dd = (e, t, r, n, a, o) => {
  if (am(e)) return (0, ut.printText)(e.data, t);
  if (om(e)) return (0, ut.printComment)(e.data, t);
  const l = bl(e) ? "DocumentFragment" : e.tagName.toLowerCase();
  return ++n > t.maxDepth
    ? (0, ut.printElementAsLeaf)(l, t)
    : (0, ut.printElement)(
        l,
        (0, ut.printProps)(
          bl(e)
            ? []
            : Array.from(e.attributes)
                .map((u) => u.name)
                .sort(),
          bl(e)
            ? {}
            : Array.from(e.attributes).reduce(
                (u, i) => ((u[i.name] = i.value), u),
                {}
              ),
          t,
          r + t.indent,
          n,
          a,
          o
        ),
        (0, ut.printChildren)(
          Array.prototype.slice.call(e.childNodes || e.children),
          t,
          r + t.indent,
          n,
          a,
          o
        ),
        t,
        r
      );
};
Ne.serialize = Dd;
const lm = { serialize: Dd, test: Nd };
var im = lm;
Ne.default = im;
var De = {};
Object.defineProperty(De, "__esModule", { value: !0 });
De.test = De.serialize = De.default = void 0;
var Vt = _e;
const um = "@@__IMMUTABLE_ITERABLE__@@",
  sm = "@@__IMMUTABLE_LIST__@@",
  cm = "@@__IMMUTABLE_KEYED__@@",
  dm = "@@__IMMUTABLE_MAP__@@",
  ns = "@@__IMMUTABLE_ORDERED__@@",
  fm = "@@__IMMUTABLE_RECORD__@@",
  pm = "@@__IMMUTABLE_SEQ__@@",
  vm = "@@__IMMUTABLE_SET__@@",
  ym = "@@__IMMUTABLE_STACK__@@",
  gt = (e) => "Immutable." + e,
  un = (e) => "[" + e + "]",
  Ht = " ",
  as = "…",
  mm = (e, t, r, n, a, o, l) =>
    ++n > t.maxDepth
      ? un(gt(l))
      : gt(l) +
        Ht +
        "{" +
        (0, Vt.printIteratorEntries)(e.entries(), t, r, n, a, o) +
        "}";
function bm(e) {
  let t = 0;
  return {
    next() {
      if (t < e._keys.length) {
        const r = e._keys[t++];
        return { done: !1, value: [r, e.get(r)] };
      }
      return { done: !0, value: void 0 };
    },
  };
}
const hm = (e, t, r, n, a, o) => {
    const l = gt(e._name || "Record");
    return ++n > t.maxDepth
      ? un(l)
      : l + Ht + "{" + (0, Vt.printIteratorEntries)(bm(e), t, r, n, a, o) + "}";
  },
  gm = (e, t, r, n, a, o) => {
    const l = gt("Seq");
    return ++n > t.maxDepth
      ? un(l)
      : e[cm]
      ? l +
        Ht +
        "{" +
        (e._iter || e._object
          ? (0, Vt.printIteratorEntries)(e.entries(), t, r, n, a, o)
          : as) +
        "}"
      : l +
        Ht +
        "[" +
        (e._iter || e._array || e._collection || e._iterable
          ? (0, Vt.printIteratorValues)(e.values(), t, r, n, a, o)
          : as) +
        "]";
  },
  hl = (e, t, r, n, a, o, l) =>
    ++n > t.maxDepth
      ? un(gt(l))
      : gt(l) +
        Ht +
        "[" +
        (0, Vt.printIteratorValues)(e.values(), t, r, n, a, o) +
        "]",
  kd = (e, t, r, n, a, o) =>
    e[dm]
      ? mm(e, t, r, n, a, o, e[ns] ? "OrderedMap" : "Map")
      : e[sm]
      ? hl(e, t, r, n, a, o, "List")
      : e[vm]
      ? hl(e, t, r, n, a, o, e[ns] ? "OrderedSet" : "Set")
      : e[ym]
      ? hl(e, t, r, n, a, o, "Stack")
      : e[pm]
      ? gm(e, t, r, n, a, o)
      : hm(e, t, r, n, a, o);
De.serialize = kd;
const Ld = (e) => e && (e[um] === !0 || e[fm] === !0);
De.test = Ld;
const Em = { serialize: kd, test: Ld };
var _m = Em;
De.default = _m;
var ke = {},
  Fd = { exports: {} },
  A = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sn = 60103,
  cn = 60106,
  Xt = 60107,
  Qt = 60108,
  Zt = 60114,
  er = 60109,
  tr = 60110,
  rr = 60112,
  nr = 60113,
  eu = 60120,
  ar = 60115,
  or = 60116,
  Ud = 60121,
  Vd = 60122,
  Hd = 60117,
  Wd = 60129,
  zd = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var F = Symbol.for;
  (sn = F("react.element")),
    (cn = F("react.portal")),
    (Xt = F("react.fragment")),
    (Qt = F("react.strict_mode")),
    (Zt = F("react.profiler")),
    (er = F("react.provider")),
    (tr = F("react.context")),
    (rr = F("react.forward_ref")),
    (nr = F("react.suspense")),
    (eu = F("react.suspense_list")),
    (ar = F("react.memo")),
    (or = F("react.lazy")),
    (Ud = F("react.block")),
    (Vd = F("react.server.block")),
    (Hd = F("react.fundamental")),
    (Wd = F("react.debug_trace_mode")),
    (zd = F("react.legacy_hidden"));
}
function ue(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case sn:
        switch (((e = e.type), e)) {
          case Xt:
          case Zt:
          case Qt:
          case nr:
          case eu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case tr:
              case rr:
              case or:
              case ar:
              case er:
                return e;
              default:
                return t;
            }
        }
      case cn:
        return t;
    }
  }
}
var Rm = er,
  Pm = sn,
  wm = rr,
  Cm = Xt,
  Om = or,
  Sm = ar,
  $m = cn,
  Tm = Zt,
  qm = Qt,
  Am = nr;
A.ContextConsumer = tr;
A.ContextProvider = Rm;
A.Element = Pm;
A.ForwardRef = wm;
A.Fragment = Cm;
A.Lazy = Om;
A.Memo = Sm;
A.Portal = $m;
A.Profiler = Tm;
A.StrictMode = qm;
A.Suspense = Am;
A.isAsyncMode = function () {
  return !1;
};
A.isConcurrentMode = function () {
  return !1;
};
A.isContextConsumer = function (e) {
  return ue(e) === tr;
};
A.isContextProvider = function (e) {
  return ue(e) === er;
};
A.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === sn;
};
A.isForwardRef = function (e) {
  return ue(e) === rr;
};
A.isFragment = function (e) {
  return ue(e) === Xt;
};
A.isLazy = function (e) {
  return ue(e) === or;
};
A.isMemo = function (e) {
  return ue(e) === ar;
};
A.isPortal = function (e) {
  return ue(e) === cn;
};
A.isProfiler = function (e) {
  return ue(e) === Zt;
};
A.isStrictMode = function (e) {
  return ue(e) === Qt;
};
A.isSuspense = function (e) {
  return ue(e) === nr;
};
A.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Xt ||
    e === Zt ||
    e === Wd ||
    e === Qt ||
    e === nr ||
    e === eu ||
    e === zd ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === or ||
        e.$$typeof === ar ||
        e.$$typeof === er ||
        e.$$typeof === tr ||
        e.$$typeof === rr ||
        e.$$typeof === Hd ||
        e.$$typeof === Ud ||
        e[0] === Vd))
  );
};
A.typeOf = ue;
Fd.exports = A;
var xm = Fd.exports;
Object.defineProperty(ke, "__esModule", { value: !0 });
ke.test = ke.serialize = ke.default = void 0;
var ze = Mm(xm),
  gr = V;
function Kd(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (Kd = function (n) {
    return n ? r : t;
  })(e);
}
function Mm(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var r = Kd(t);
  if (r && r.has(e)) return r.get(e);
  var n = {},
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(n, o, l) : (n[o] = e[o]);
    }
  return (n.default = e), r && r.set(e, n), n;
}
const Gd = (e, t = []) => (
    Array.isArray(e)
      ? e.forEach((r) => {
          Gd(r, t);
        })
      : e != null && e !== !1 && t.push(e),
    t
  ),
  os = (e) => {
    const t = e.type;
    if (typeof t == "string") return t;
    if (typeof t == "function") return t.displayName || t.name || "Unknown";
    if (ze.isFragment(e)) return "React.Fragment";
    if (ze.isSuspense(e)) return "React.Suspense";
    if (typeof t == "object" && t !== null) {
      if (ze.isContextProvider(e)) return "Context.Provider";
      if (ze.isContextConsumer(e)) return "Context.Consumer";
      if (ze.isForwardRef(e)) {
        if (t.displayName) return t.displayName;
        const r = t.render.displayName || t.render.name || "";
        return r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef";
      }
      if (ze.isMemo(e)) {
        const r = t.displayName || t.type.displayName || t.type.name || "";
        return r !== "" ? "Memo(" + r + ")" : "Memo";
      }
    }
    return "UNDEFINED";
  },
  Bm = (e) => {
    const { props: t } = e;
    return Object.keys(t)
      .filter((r) => r !== "children" && t[r] !== void 0)
      .sort();
  },
  Yd = (e, t, r, n, a, o) =>
    ++n > t.maxDepth
      ? (0, gr.printElementAsLeaf)(os(e), t)
      : (0, gr.printElement)(
          os(e),
          (0, gr.printProps)(Bm(e), e.props, t, r + t.indent, n, a, o),
          (0, gr.printChildren)(Gd(e.props.children), t, r + t.indent, n, a, o),
          t,
          r
        );
ke.serialize = Yd;
const Jd = (e) => e != null && ze.isElement(e);
ke.test = Jd;
const Im = { serialize: Yd, test: Jd };
var jm = Im;
ke.default = jm;
var Le = {};
Object.defineProperty(Le, "__esModule", { value: !0 });
Le.test = Le.serialize = Le.default = void 0;
var Er = V,
  Fr = (function () {
    return typeof globalThis < "u"
      ? globalThis
      : typeof Fr < "u"
      ? Fr
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : Function("return this")();
  })(),
  gl = Fr["jest-symbol-do-not-touch"] || Fr.Symbol;
const Nm =
    typeof gl == "function" && gl.for ? gl.for("react.test.json") : 245830487,
  Dm = (e) => {
    const { props: t } = e;
    return t
      ? Object.keys(t)
          .filter((r) => t[r] !== void 0)
          .sort()
      : [];
  },
  Xd = (e, t, r, n, a, o) =>
    ++n > t.maxDepth
      ? (0, Er.printElementAsLeaf)(e.type, t)
      : (0, Er.printElement)(
          e.type,
          e.props
            ? (0, Er.printProps)(Dm(e), e.props, t, r + t.indent, n, a, o)
            : "",
          e.children
            ? (0, Er.printChildren)(e.children, t, r + t.indent, n, a, o)
            : "",
          t,
          r
        );
Le.serialize = Xd;
const Qd = (e) => e && e.$$typeof === Nm;
Le.test = Qd;
const km = { serialize: Xd, test: Qd };
var Lm = km;
Le.default = Lm;
Object.defineProperty(Ee, "__esModule", { value: !0 });
var Zd = (Ee.default = sf = Ee.DEFAULT_OPTIONS = void 0),
  ef = (Ee.format = pf),
  tu = (Ee.plugins = void 0),
  Fm = Ue(Rd),
  Mt = _e,
  Um = Ue(Be),
  Vm = Ue(Ie),
  Hm = Ue(je),
  Wm = Ue(Ne),
  zm = Ue(De),
  Km = Ue(ke),
  Gm = Ue(Le);
function Ue(e) {
  return e && e.__esModule ? e : { default: e };
}
const tf = Object.prototype.toString,
  Ym = Date.prototype.toISOString,
  Jm = Error.prototype.toString,
  ls = RegExp.prototype.toString,
  El = (e) =>
    (typeof e.constructor == "function" && e.constructor.name) || "Object",
  Xm = (e) => typeof window < "u" && e === window,
  Qm = /^Symbol\((.*)\)(.*)$/,
  Zm = /\n/gi;
class rf extends Error {
  constructor(t, r) {
    super(t), (this.stack = r), (this.name = this.constructor.name);
  }
}
function eb(e) {
  return (
    e === "[object Array]" ||
    e === "[object ArrayBuffer]" ||
    e === "[object DataView]" ||
    e === "[object Float32Array]" ||
    e === "[object Float64Array]" ||
    e === "[object Int8Array]" ||
    e === "[object Int16Array]" ||
    e === "[object Int32Array]" ||
    e === "[object Uint8Array]" ||
    e === "[object Uint8ClampedArray]" ||
    e === "[object Uint16Array]" ||
    e === "[object Uint32Array]"
  );
}
function tb(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function rb(e) {
  return `${e}n`;
}
function is(e, t) {
  return t ? "[Function " + (e.name || "anonymous") + "]" : "[Function]";
}
function us(e) {
  return String(e).replace(Qm, "Symbol($1)");
}
function ss(e) {
  return "[" + Jm.call(e) + "]";
}
function nf(e, t, r, n) {
  if (e === !0 || e === !1) return "" + e;
  if (e === void 0) return "undefined";
  if (e === null) return "null";
  const a = typeof e;
  if (a === "number") return tb(e);
  if (a === "bigint") return rb(e);
  if (a === "string")
    return n ? '"' + e.replace(/"|\\/g, "\\$&") + '"' : '"' + e + '"';
  if (a === "function") return is(e, t);
  if (a === "symbol") return us(e);
  const o = tf.call(e);
  return o === "[object WeakMap]"
    ? "WeakMap {}"
    : o === "[object WeakSet]"
    ? "WeakSet {}"
    : o === "[object Function]" || o === "[object GeneratorFunction]"
    ? is(e, t)
    : o === "[object Symbol]"
    ? us(e)
    : o === "[object Date]"
    ? isNaN(+e)
      ? "Date { NaN }"
      : Ym.call(e)
    : o === "[object Error]"
    ? ss(e)
    : o === "[object RegExp]"
    ? r
      ? ls.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&")
      : ls.call(e)
    : e instanceof Error
    ? ss(e)
    : null;
}
function af(e, t, r, n, a, o) {
  if (a.indexOf(e) !== -1) return "[Circular]";
  (a = a.slice()), a.push(e);
  const l = ++n > t.maxDepth,
    u = t.min;
  if (t.callToJSON && !l && e.toJSON && typeof e.toJSON == "function" && !o)
    return $e(e.toJSON(), t, r, n, a, !0);
  const i = tf.call(e);
  return i === "[object Arguments]"
    ? l
      ? "[Arguments]"
      : (u ? "" : "Arguments ") +
        "[" +
        (0, Mt.printListItems)(e, t, r, n, a, $e) +
        "]"
    : eb(i)
    ? l
      ? "[" + e.constructor.name + "]"
      : (u || (!t.printBasicPrototype && e.constructor.name === "Array")
          ? ""
          : e.constructor.name + " ") +
        "[" +
        (0, Mt.printListItems)(e, t, r, n, a, $e) +
        "]"
    : i === "[object Map]"
    ? l
      ? "[Map]"
      : "Map {" +
        (0, Mt.printIteratorEntries)(e.entries(), t, r, n, a, $e, " => ") +
        "}"
    : i === "[object Set]"
    ? l
      ? "[Set]"
      : "Set {" + (0, Mt.printIteratorValues)(e.values(), t, r, n, a, $e) + "}"
    : l || Xm(e)
    ? "[" + El(e) + "]"
    : (u || (!t.printBasicPrototype && El(e) === "Object") ? "" : El(e) + " ") +
      "{" +
      (0, Mt.printObjectProperties)(e, t, r, n, a, $e) +
      "}";
}
function nb(e) {
  return e.serialize != null;
}
function of(e, t, r, n, a, o) {
  let l;
  try {
    l = nb(e)
      ? e.serialize(t, r, n, a, o, $e)
      : e.print(
          t,
          (u) => $e(u, r, n, a, o),
          (u) => {
            const i = n + r.indent;
            return (
              i +
              u.replace(
                Zm,
                `
` + i
              )
            );
          },
          { edgeSpacing: r.spacingOuter, min: r.min, spacing: r.spacingInner },
          r.colors
        );
  } catch (u) {
    throw new rf(u.message, u.stack);
  }
  if (typeof l != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof l}".`
    );
  return l;
}
function lf(e, t) {
  for (let r = 0; r < e.length; r++)
    try {
      if (e[r].test(t)) return e[r];
    } catch (n) {
      throw new rf(n.message, n.stack);
    }
  return null;
}
function $e(e, t, r, n, a, o) {
  const l = lf(t.plugins, e);
  if (l !== null) return of(l, e, t, r, n, a);
  const u = nf(e, t.printFunctionName, t.escapeRegex, t.escapeString);
  return u !== null ? u : af(e, t, r, n, a, o);
}
const ru = {
    comment: "gray",
    content: "reset",
    prop: "yellow",
    tag: "cyan",
    value: "green",
  },
  uf = Object.keys(ru),
  ae = {
    callToJSON: !0,
    compareKeys: void 0,
    escapeRegex: !1,
    escapeString: !0,
    highlight: !1,
    indent: 2,
    maxDepth: 1 / 0,
    min: !1,
    plugins: [],
    printBasicPrototype: !0,
    printFunctionName: !0,
    theme: ru,
  };
var sf = (Ee.DEFAULT_OPTIONS = ae);
function ab(e) {
  if (
    (Object.keys(e).forEach((t) => {
      if (!ae.hasOwnProperty(t))
        throw new Error(`pretty-format: Unknown option "${t}".`);
    }),
    e.min && e.indent !== void 0 && e.indent !== 0)
  )
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  if (e.theme !== void 0) {
    if (e.theme === null)
      throw new Error('pretty-format: Option "theme" must not be null.');
    if (typeof e.theme != "object")
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`
      );
  }
}
const ob = (e) =>
    uf.reduce((t, r) => {
      const n = e.theme && e.theme[r] !== void 0 ? e.theme[r] : ru[r],
        a = n && Fm.default[n];
      if (a && typeof a.close == "string" && typeof a.open == "string")
        t[r] = a;
      else
        throw new Error(
          `pretty-format: Option "theme" has a key "${r}" whose value "${n}" is undefined in ansi-styles.`
        );
      return t;
    }, Object.create(null)),
  lb = () =>
    uf.reduce(
      (e, t) => ((e[t] = { close: "", open: "" }), e),
      Object.create(null)
    ),
  cf = (e) =>
    e && e.printFunctionName !== void 0
      ? e.printFunctionName
      : ae.printFunctionName,
  df = (e) => (e && e.escapeRegex !== void 0 ? e.escapeRegex : ae.escapeRegex),
  ff = (e) =>
    e && e.escapeString !== void 0 ? e.escapeString : ae.escapeString,
  cs = (e) => {
    var t;
    return {
      callToJSON: e && e.callToJSON !== void 0 ? e.callToJSON : ae.callToJSON,
      colors: e && e.highlight ? ob(e) : lb(),
      compareKeys:
        e && typeof e.compareKeys == "function"
          ? e.compareKeys
          : ae.compareKeys,
      escapeRegex: df(e),
      escapeString: ff(e),
      indent:
        e && e.min ? "" : ib(e && e.indent !== void 0 ? e.indent : ae.indent),
      maxDepth: e && e.maxDepth !== void 0 ? e.maxDepth : ae.maxDepth,
      min: e && e.min !== void 0 ? e.min : ae.min,
      plugins: e && e.plugins !== void 0 ? e.plugins : ae.plugins,
      printBasicPrototype:
        (t = e == null ? void 0 : e.printBasicPrototype) !== null &&
        t !== void 0
          ? t
          : !0,
      printFunctionName: cf(e),
      spacingInner:
        e && e.min
          ? " "
          : `
`,
      spacingOuter:
        e && e.min
          ? ""
          : `
`,
    };
  };
function ib(e) {
  return new Array(e + 1).join(" ");
}
function pf(e, t) {
  if (t && (ab(t), t.plugins)) {
    const n = lf(t.plugins, e);
    if (n !== null) return of(n, e, cs(t), "", 0, []);
  }
  const r = nf(e, cf(t), df(t), ff(t));
  return r !== null ? r : af(e, cs(t), "", 0, []);
}
const ub = {
  AsymmetricMatcher: Um.default,
  ConvertAnsi: Vm.default,
  DOMCollection: Hm.default,
  DOMElement: Wm.default,
  Immutable: zm.default,
  ReactElement: Km.default,
  ReactTestComponent: Gm.default,
};
tu = Ee.plugins = ub;
var sb = pf;
Zd = Ee.default = sb;
const cb = $y(
  {
    __proto__: null,
    get DEFAULT_OPTIONS() {
      return sf;
    },
    get default() {
      return Zd;
    },
    format: ef,
    get plugins() {
      return tu;
    },
  },
  [Ee]
);
var db = Object.prototype.toString;
function ds(e) {
  return typeof e == "function" || db.call(e) === "[object Function]";
}
function fb(e) {
  var t = Number(e);
  return isNaN(t)
    ? 0
    : t === 0 || !isFinite(t)
    ? t
    : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var pb = Math.pow(2, 53) - 1;
function vb(e) {
  var t = fb(e);
  return Math.min(Math.max(t, 0), pb);
}
function oe(e, t) {
  var r = Array,
    n = Object(e);
  if (e == null)
    throw new TypeError(
      "Array.from requires an array-like object - not null or undefined"
    );
  if (typeof t < "u" && !ds(t))
    throw new TypeError(
      "Array.from: when provided, the second argument must be a function"
    );
  for (
    var a = vb(n.length), o = ds(r) ? Object(new r(a)) : new Array(a), l = 0, u;
    l < a;

  )
    (u = n[l]), t ? (o[l] = t(u, l)) : (o[l] = u), (l += 1);
  return (o.length = a), o;
}
function Wt(e) {
  "@babel/helpers - typeof";
  return (
    (Wt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Wt(e)
  );
}
function yb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fs(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, vf(n.key), n);
  }
}
function mb(e, t, r) {
  return (
    t && fs(e.prototype, t),
    r && fs(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function bb(e, t, r) {
  return (
    (t = vf(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function vf(e) {
  var t = hb(e, "string");
  return Wt(t) === "symbol" ? t : String(t);
}
function hb(e, t) {
  if (Wt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gb = (function () {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    yb(this, e), bb(this, "items", void 0), (this.items = t);
  }
  return (
    mb(e, [
      {
        key: "add",
        value: function (r) {
          return this.has(r) === !1 && this.items.push(r), this;
        },
      },
      {
        key: "clear",
        value: function () {
          this.items = [];
        },
      },
      {
        key: "delete",
        value: function (r) {
          var n = this.items.length;
          return (
            (this.items = this.items.filter(function (a) {
              return a !== r;
            })),
            n !== this.items.length
          );
        },
      },
      {
        key: "forEach",
        value: function (r) {
          var n = this;
          this.items.forEach(function (a) {
            r(a, a, n);
          });
        },
      },
      {
        key: "has",
        value: function (r) {
          return this.items.indexOf(r) !== -1;
        },
      },
      {
        key: "size",
        get: function () {
          return this.items.length;
        },
      },
    ]),
    e
  );
})();
const Eb = typeof Set > "u" ? Set : gb;
function H(e) {
  var t;
  return (t = e.localName) !== null && t !== void 0
    ? t
    : e.tagName.toLowerCase();
}
var _b = {
    article: "article",
    aside: "complementary",
    button: "button",
    datalist: "listbox",
    dd: "definition",
    details: "group",
    dialog: "dialog",
    dt: "term",
    fieldset: "group",
    figure: "figure",
    form: "form",
    footer: "contentinfo",
    h1: "heading",
    h2: "heading",
    h3: "heading",
    h4: "heading",
    h5: "heading",
    h6: "heading",
    header: "banner",
    hr: "separator",
    html: "document",
    legend: "legend",
    li: "listitem",
    math: "math",
    main: "main",
    menu: "list",
    nav: "navigation",
    ol: "list",
    optgroup: "group",
    option: "option",
    output: "status",
    progress: "progressbar",
    section: "region",
    summary: "button",
    table: "table",
    tbody: "rowgroup",
    textarea: "textbox",
    tfoot: "rowgroup",
    td: "cell",
    th: "columnheader",
    thead: "rowgroup",
    tr: "row",
    ul: "list",
  },
  Rb = {
    caption: new Set(["aria-label", "aria-labelledby"]),
    code: new Set(["aria-label", "aria-labelledby"]),
    deletion: new Set(["aria-label", "aria-labelledby"]),
    emphasis: new Set(["aria-label", "aria-labelledby"]),
    generic: new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
    insertion: new Set(["aria-label", "aria-labelledby"]),
    paragraph: new Set(["aria-label", "aria-labelledby"]),
    presentation: new Set(["aria-label", "aria-labelledby"]),
    strong: new Set(["aria-label", "aria-labelledby"]),
    subscript: new Set(["aria-label", "aria-labelledby"]),
    superscript: new Set(["aria-label", "aria-labelledby"]),
  };
function Pb(e, t) {
  return [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-dropeffect",
    "aria-flowto",
    "aria-grabbed",
    "aria-hidden",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription",
  ].some(function (r) {
    var n;
    return (
      e.hasAttribute(r) && !((n = Rb[t]) !== null && n !== void 0 && n.has(r))
    );
  });
}
function yf(e, t) {
  return Pb(e, t);
}
function wb(e) {
  var t = Ob(e);
  if (t === null || t === "presentation") {
    var r = Cb(e);
    if (t !== "presentation" || yf(e, r || "")) return r;
  }
  return t;
}
function Cb(e) {
  var t = _b[H(e)];
  if (t !== void 0) return t;
  switch (H(e)) {
    case "a":
    case "area":
    case "link":
      if (e.hasAttribute("href")) return "link";
      break;
    case "img":
      return e.getAttribute("alt") === "" && !yf(e, "img")
        ? "presentation"
        : "img";
    case "input": {
      var r = e,
        n = r.type;
      switch (n) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
        case "radio":
          return n;
        case "range":
          return "slider";
        case "email":
        case "tel":
        case "text":
        case "url":
          return e.hasAttribute("list") ? "combobox" : "textbox";
        case "search":
          return e.hasAttribute("list") ? "combobox" : "searchbox";
        case "number":
          return "spinbutton";
        default:
          return null;
      }
    }
    case "select":
      return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox";
  }
  return null;
}
function Ob(e) {
  var t = e.getAttribute("role");
  if (t !== null) {
    var r = t.trim().split(" ")[0];
    if (r.length > 0) return r;
  }
  return null;
}
function B(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function mf(e) {
  return B(e) && H(e) === "caption";
}
function qr(e) {
  return B(e) && H(e) === "input";
}
function Sb(e) {
  return B(e) && H(e) === "optgroup";
}
function $b(e) {
  return B(e) && H(e) === "select";
}
function Tb(e) {
  return B(e) && H(e) === "table";
}
function qb(e) {
  return B(e) && H(e) === "textarea";
}
function Ab(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument,
    r = t.defaultView;
  if (r === null) throw new TypeError("no window available");
  return r;
}
function xb(e) {
  return B(e) && H(e) === "fieldset";
}
function Mb(e) {
  return B(e) && H(e) === "legend";
}
function Bb(e) {
  return B(e) && H(e) === "slot";
}
function Ib(e) {
  return B(e) && e.ownerSVGElement !== void 0;
}
function jb(e) {
  return B(e) && H(e) === "svg";
}
function Nb(e) {
  return Ib(e) && H(e) === "title";
}
function Ur(e, t) {
  if (B(e) && e.hasAttribute(t)) {
    var r = e.getAttribute(t).split(" "),
      n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return r
      .map(function (a) {
        return n.getElementById(a);
      })
      .filter(function (a) {
        return a !== null;
      });
  }
  return [];
}
function he(e, t) {
  return B(e) ? t.indexOf(wb(e)) !== -1 : !1;
}
function Db(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function kb(e, t) {
  if (!B(e)) return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var r = t(e);
  return (
    r.getPropertyValue("display") === "none" ||
    r.getPropertyValue("visibility") === "hidden"
  );
}
function Lb(e) {
  return he(e, ["button", "combobox", "listbox", "textbox"]) || bf(e, "range");
}
function bf(e, t) {
  if (!B(e)) return !1;
  switch (t) {
    case "range":
      return he(e, [
        "meter",
        "progressbar",
        "scrollbar",
        "slider",
        "spinbutton",
      ]);
    default:
      throw new TypeError(
        "No knowledge about abstract role '".concat(
          t,
          "'. This is likely a bug :("
        )
      );
  }
}
function ps(e, t) {
  var r = oe(e.querySelectorAll(t));
  return (
    Ur(e, "aria-owns").forEach(function (n) {
      r.push.apply(r, oe(n.querySelectorAll(t)));
    }),
    r
  );
}
function Fb(e) {
  return $b(e)
    ? e.selectedOptions || ps(e, "[selected]")
    : ps(e, '[aria-selected="true"]');
}
function Ub(e) {
  return he(e, ["none", "presentation"]);
}
function Vb(e) {
  return mf(e);
}
function Hb(e) {
  return he(e, [
    "button",
    "cell",
    "checkbox",
    "columnheader",
    "gridcell",
    "heading",
    "label",
    "legend",
    "link",
    "menuitem",
    "menuitemcheckbox",
    "menuitemradio",
    "option",
    "radio",
    "row",
    "rowheader",
    "switch",
    "tab",
    "tooltip",
    "treeitem",
  ]);
}
function Wb(e) {
  return !1;
}
function zb(e) {
  return qr(e) || qb(e) ? e.value : e.textContent || "";
}
function vs(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function hf(e) {
  var t = H(e);
  return (
    t === "button" ||
    (t === "input" && e.getAttribute("type") !== "hidden") ||
    t === "meter" ||
    t === "output" ||
    t === "progress" ||
    t === "select" ||
    t === "textarea"
  );
}
function gf(e) {
  if (hf(e)) return e;
  var t = null;
  return (
    e.childNodes.forEach(function (r) {
      if (t === null && B(r)) {
        var n = gf(r);
        n !== null && (t = n);
      }
    }),
    t
  );
}
function Kb(e) {
  if (e.control !== void 0) return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : gf(e);
}
function Gb(e) {
  var t = e.labels;
  if (t === null) return t;
  if (t !== void 0) return oe(t);
  if (!hf(e)) return null;
  var r = e.ownerDocument;
  return oe(r.querySelectorAll("label")).filter(function (n) {
    return Kb(n) === e;
  });
}
function Yb(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? oe(e.childNodes) : t;
}
function Ef(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = new Eb(),
    n = Ab(e),
    a = t.compute,
    o = a === void 0 ? "name" : a,
    l = t.computedStyleSupportsPseudoElements,
    u = l === void 0 ? t.getComputedStyle !== void 0 : l,
    i = t.getComputedStyle,
    s = i === void 0 ? n.getComputedStyle.bind(n) : i,
    d = t.hidden,
    f = d === void 0 ? !1 : d;
  function p(v, b) {
    var P = "";
    if (B(v) && u) {
      var w = s(v, "::before"),
        O = vs(w);
      P = "".concat(O, " ").concat(P);
    }
    var y = Bb(v) ? Yb(v) : oe(v.childNodes).concat(Ur(v, "aria-owns"));
    if (
      (y.forEach(function (I) {
        var c = S(I, {
            isEmbeddedInLabel: b.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0,
          }),
          z = B(I) ? s(I).getPropertyValue("display") : "inline",
          se = z !== "inline" ? " " : "";
        P += "".concat(se).concat(c).concat(se);
      }),
      B(v) && u)
    ) {
      var h = s(v, "::after"),
        E = vs(h);
      P = "".concat(P, " ").concat(E);
    }
    return P.trim();
  }
  function m(v, b) {
    var P = v.getAttributeNode(b);
    return P !== null && !r.has(P) && P.value.trim() !== ""
      ? (r.add(P), P.value)
      : null;
  }
  function C(v) {
    return B(v) ? m(v, "title") : null;
  }
  function R(v) {
    if (!B(v)) return null;
    if (xb(v)) {
      r.add(v);
      for (var b = oe(v.childNodes), P = 0; P < b.length; P += 1) {
        var w = b[P];
        if (Mb(w))
          return S(w, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1,
          });
      }
    } else if (Tb(v)) {
      r.add(v);
      for (var O = oe(v.childNodes), y = 0; y < O.length; y += 1) {
        var h = O[y];
        if (mf(h))
          return S(h, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1,
          });
      }
    } else if (jb(v)) {
      r.add(v);
      for (var E = oe(v.childNodes), I = 0; I < E.length; I += 1) {
        var c = E[I];
        if (Nb(c)) return c.textContent;
      }
      return null;
    } else if (H(v) === "img" || H(v) === "area") {
      var z = m(v, "alt");
      if (z !== null) return z;
    } else if (Sb(v)) {
      var se = m(v, "label");
      if (se !== null) return se;
    }
    if (
      qr(v) &&
      (v.type === "button" || v.type === "submit" || v.type === "reset")
    ) {
      var K = m(v, "value");
      if (K !== null) return K;
      if (v.type === "submit") return "Submit";
      if (v.type === "reset") return "Reset";
    }
    var ce = Gb(v);
    if (ce !== null && ce.length !== 0)
      return (
        r.add(v),
        oe(ce)
          .map(function (yl) {
            return S(yl, {
              isEmbeddedInLabel: !0,
              isReferenced: !1,
              recursion: !0,
            });
          })
          .filter(function (yl) {
            return yl.length > 0;
          })
          .join(" ")
      );
    if (qr(v) && v.type === "image") {
      var it = m(v, "alt");
      if (it !== null) return it;
      var xt = m(v, "title");
      return xt !== null ? xt : "Submit Query";
    }
    if (he(v, ["button"])) {
      var es = p(v, { isEmbeddedInLabel: !1, isReferenced: !1 });
      if (es !== "") return es;
    }
    return null;
  }
  function S(v, b) {
    if (r.has(v)) return "";
    if (!f && kb(v, s) && !b.isReferenced) return r.add(v), "";
    var P = B(v) ? v.getAttributeNode("aria-labelledby") : null,
      w = P !== null && !r.has(P) ? Ur(v, "aria-labelledby") : [];
    if (o === "name" && !b.isReferenced && w.length > 0)
      return (
        r.add(P),
        w
          .map(function (z) {
            return S(z, {
              isEmbeddedInLabel: b.isEmbeddedInLabel,
              isReferenced: !0,
              recursion: !1,
            });
          })
          .join(" ")
      );
    var O = b.recursion && Lb(v) && o === "name";
    if (!O) {
      var y = ((B(v) && v.getAttribute("aria-label")) || "").trim();
      if (y !== "" && o === "name") return r.add(v), y;
      if (!Ub(v)) {
        var h = R(v);
        if (h !== null) return r.add(v), h;
      }
    }
    if (he(v, ["menu"])) return r.add(v), "";
    if (O || b.isEmbeddedInLabel || b.isReferenced) {
      if (he(v, ["combobox", "listbox"])) {
        r.add(v);
        var E = Fb(v);
        return E.length === 0
          ? qr(v)
            ? v.value
            : ""
          : oe(E)
              .map(function (z) {
                return S(z, {
                  isEmbeddedInLabel: b.isEmbeddedInLabel,
                  isReferenced: !1,
                  recursion: !0,
                });
              })
              .join(" ");
      }
      if (bf(v, "range"))
        return (
          r.add(v),
          v.hasAttribute("aria-valuetext")
            ? v.getAttribute("aria-valuetext")
            : v.hasAttribute("aria-valuenow")
            ? v.getAttribute("aria-valuenow")
            : v.getAttribute("value") || ""
        );
      if (he(v, ["textbox"])) return r.add(v), zb(v);
    }
    if (Hb(v) || (B(v) && b.isReferenced) || Vb(v) || Wb()) {
      var I = p(v, {
        isEmbeddedInLabel: b.isEmbeddedInLabel,
        isReferenced: !1,
      });
      if (I !== "") return r.add(v), I;
    }
    if (v.nodeType === v.TEXT_NODE) return r.add(v), v.textContent || "";
    if (b.recursion)
      return (
        r.add(v),
        p(v, { isEmbeddedInLabel: b.isEmbeddedInLabel, isReferenced: !1 })
      );
    var c = C(v);
    return c !== null ? (r.add(v), c) : (r.add(v), "");
  }
  return Db(
    S(e, {
      isEmbeddedInLabel: !1,
      isReferenced: o === "description",
      recursion: !1,
    })
  );
}
function zt(e) {
  "@babel/helpers - typeof";
  return (
    (zt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    zt(e)
  );
}
function ys(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ms(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ys(Object(r), !0).forEach(function (n) {
          Jb(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ys(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Jb(e, t, r) {
  return (
    (t = Xb(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Xb(e) {
  var t = Qb(e, "string");
  return zt(t) === "symbol" ? t : String(t);
}
function Qb(e, t) {
  if (zt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _f(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = Ur(e, "aria-describedby")
      .map(function (a) {
        return Ef(a, ms(ms({}, t), {}, { compute: "description" }));
      })
      .join(" ");
  if (r === "") {
    var n = e.getAttribute("title");
    r = n === null ? "" : n;
  }
  return r;
}
function Zb(e) {
  return he(e, [
    "caption",
    "code",
    "deletion",
    "emphasis",
    "generic",
    "insertion",
    "paragraph",
    "presentation",
    "strong",
    "subscript",
    "superscript",
  ]);
}
function nu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Zb(e) ? "" : Ef(e, t);
}
var le = {},
  dn = {},
  et = {},
  fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.default = void 0;
function eh() {
  var e = this,
    t = 0,
    r = {
      "@@iterator": function () {
        return r;
      },
      next: function () {
        if (t < e.length) {
          var a = e[t];
          return (t = t + 1), { done: !1, value: a };
        } else return { done: !0 };
      },
    };
  return r;
}
var th = eh;
fn.default = th;
Object.defineProperty(et, "__esModule", { value: !0 });
et.default = ah;
var rh = nh(fn);
function nh(e) {
  return e && e.__esModule ? e : { default: e };
}
function li(e) {
  "@babel/helpers - typeof";
  return (
    (li =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    li(e)
  );
}
function ah(e, t) {
  return (
    typeof Symbol == "function" &&
      li(Symbol.iterator) === "symbol" &&
      Object.defineProperty(e, Symbol.iterator, { value: rh.default.bind(t) }),
    e
  );
}
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.default = void 0;
var oh = lh(et);
function lh(e) {
  return e && e.__esModule ? e : { default: e };
}
function _l(e, t) {
  return sh(e) || uh(e, t) || Rf(e, t) || ih();
}
function ih() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uh(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n = [],
      a = !0,
      o = !1,
      l,
      u;
    try {
      for (
        r = r.call(e);
        !(a = (l = r.next()).done) && (n.push(l.value), !(t && n.length === t));
        a = !0
      );
    } catch (i) {
      (o = !0), (u = i);
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function sh(e) {
  if (Array.isArray(e)) return e;
}
function ch(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = Rf(e)) ||
      (t && e && typeof e.length == "number")
    ) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (s) {
          throw s;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0,
    l = !1,
    u;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var s = r.next();
      return (o = s.done), s;
    },
    e: function (s) {
      (l = !0), (u = s);
    },
    f: function () {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (l) throw u;
      }
    },
  };
}
function Rf(e, t) {
  if (e) {
    if (typeof e == "string") return bs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return bs(e, t);
  }
}
function bs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var st = [
    ["aria-activedescendant", { type: "id" }],
    ["aria-atomic", { type: "boolean" }],
    [
      "aria-autocomplete",
      { type: "token", values: ["inline", "list", "both", "none"] },
    ],
    ["aria-busy", { type: "boolean" }],
    ["aria-checked", { type: "tristate" }],
    ["aria-colcount", { type: "integer" }],
    ["aria-colindex", { type: "integer" }],
    ["aria-colspan", { type: "integer" }],
    ["aria-controls", { type: "idlist" }],
    [
      "aria-current",
      {
        type: "token",
        values: ["page", "step", "location", "date", "time", !0, !1],
      },
    ],
    ["aria-describedby", { type: "idlist" }],
    ["aria-details", { type: "id" }],
    ["aria-disabled", { type: "boolean" }],
    [
      "aria-dropeffect",
      {
        type: "tokenlist",
        values: ["copy", "execute", "link", "move", "none", "popup"],
      },
    ],
    ["aria-errormessage", { type: "id" }],
    ["aria-expanded", { type: "boolean", allowundefined: !0 }],
    ["aria-flowto", { type: "idlist" }],
    ["aria-grabbed", { type: "boolean", allowundefined: !0 }],
    [
      "aria-haspopup",
      {
        type: "token",
        values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"],
      },
    ],
    ["aria-hidden", { type: "boolean", allowundefined: !0 }],
    [
      "aria-invalid",
      { type: "token", values: ["grammar", !1, "spelling", !0] },
    ],
    ["aria-keyshortcuts", { type: "string" }],
    ["aria-label", { type: "string" }],
    ["aria-labelledby", { type: "idlist" }],
    ["aria-level", { type: "integer" }],
    ["aria-live", { type: "token", values: ["assertive", "off", "polite"] }],
    ["aria-modal", { type: "boolean" }],
    ["aria-multiline", { type: "boolean" }],
    ["aria-multiselectable", { type: "boolean" }],
    [
      "aria-orientation",
      { type: "token", values: ["vertical", "undefined", "horizontal"] },
    ],
    ["aria-owns", { type: "idlist" }],
    ["aria-placeholder", { type: "string" }],
    ["aria-posinset", { type: "integer" }],
    ["aria-pressed", { type: "tristate" }],
    ["aria-readonly", { type: "boolean" }],
    [
      "aria-relevant",
      { type: "tokenlist", values: ["additions", "all", "removals", "text"] },
    ],
    ["aria-required", { type: "boolean" }],
    ["aria-roledescription", { type: "string" }],
    ["aria-rowcount", { type: "integer" }],
    ["aria-rowindex", { type: "integer" }],
    ["aria-rowspan", { type: "integer" }],
    ["aria-selected", { type: "boolean", allowundefined: !0 }],
    ["aria-setsize", { type: "integer" }],
    [
      "aria-sort",
      { type: "token", values: ["ascending", "descending", "none", "other"] },
    ],
    ["aria-valuemax", { type: "number" }],
    ["aria-valuemin", { type: "number" }],
    ["aria-valuenow", { type: "number" }],
    ["aria-valuetext", { type: "string" }],
  ],
  ii = {
    entries: function () {
      return st;
    },
    forEach: function (t) {
      var r =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
        n = ch(st),
        a;
      try {
        for (n.s(); !(a = n.n()).done; ) {
          var o = _l(a.value, 2),
            l = o[0],
            u = o[1];
          t.call(r, u, l, st);
        }
      } catch (i) {
        n.e(i);
      } finally {
        n.f();
      }
    },
    get: function (t) {
      var r = st.find(function (n) {
        return n[0] === t;
      });
      return r && r[1];
    },
    has: function (t) {
      return !!ii.get(t);
    },
    keys: function () {
      return st.map(function (t) {
        var r = _l(t, 1),
          n = r[0];
        return n;
      });
    },
    values: function () {
      return st.map(function (t) {
        var r = _l(t, 2),
          n = r[1];
        return n;
      });
    },
  },
  dh = (0, oh.default)(ii, ii.entries());
dn.default = dh;
var pn = {};
Object.defineProperty(pn, "__esModule", { value: !0 });
pn.default = void 0;
var fh = ph(et);
function ph(e) {
  return e && e.__esModule ? e : { default: e };
}
function Rl(e, t) {
  return mh(e) || yh(e, t) || Pf(e, t) || vh();
}
function vh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yh(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n = [],
      a = !0,
      o = !1,
      l,
      u;
    try {
      for (
        r = r.call(e);
        !(a = (l = r.next()).done) && (n.push(l.value), !(t && n.length === t));
        a = !0
      );
    } catch (i) {
      (o = !0), (u = i);
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function mh(e) {
  if (Array.isArray(e)) return e;
}
function bh(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = Pf(e)) ||
      (t && e && typeof e.length == "number")
    ) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (s) {
          throw s;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0,
    l = !1,
    u;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var s = r.next();
      return (o = s.done), s;
    },
    e: function (s) {
      (l = !0), (u = s);
    },
    f: function () {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (l) throw u;
      }
    },
  };
}
function Pf(e, t) {
  if (e) {
    if (typeof e == "string") return hs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return hs(e, t);
  }
}
function hs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ct = [
    ["a", { reserved: !1 }],
    ["abbr", { reserved: !1 }],
    ["acronym", { reserved: !1 }],
    ["address", { reserved: !1 }],
    ["applet", { reserved: !1 }],
    ["area", { reserved: !1 }],
    ["article", { reserved: !1 }],
    ["aside", { reserved: !1 }],
    ["audio", { reserved: !1 }],
    ["b", { reserved: !1 }],
    ["base", { reserved: !0 }],
    ["bdi", { reserved: !1 }],
    ["bdo", { reserved: !1 }],
    ["big", { reserved: !1 }],
    ["blink", { reserved: !1 }],
    ["blockquote", { reserved: !1 }],
    ["body", { reserved: !1 }],
    ["br", { reserved: !1 }],
    ["button", { reserved: !1 }],
    ["canvas", { reserved: !1 }],
    ["caption", { reserved: !1 }],
    ["center", { reserved: !1 }],
    ["cite", { reserved: !1 }],
    ["code", { reserved: !1 }],
    ["col", { reserved: !0 }],
    ["colgroup", { reserved: !0 }],
    ["content", { reserved: !1 }],
    ["data", { reserved: !1 }],
    ["datalist", { reserved: !1 }],
    ["dd", { reserved: !1 }],
    ["del", { reserved: !1 }],
    ["details", { reserved: !1 }],
    ["dfn", { reserved: !1 }],
    ["dialog", { reserved: !1 }],
    ["dir", { reserved: !1 }],
    ["div", { reserved: !1 }],
    ["dl", { reserved: !1 }],
    ["dt", { reserved: !1 }],
    ["em", { reserved: !1 }],
    ["embed", { reserved: !1 }],
    ["fieldset", { reserved: !1 }],
    ["figcaption", { reserved: !1 }],
    ["figure", { reserved: !1 }],
    ["font", { reserved: !1 }],
    ["footer", { reserved: !1 }],
    ["form", { reserved: !1 }],
    ["frame", { reserved: !1 }],
    ["frameset", { reserved: !1 }],
    ["h1", { reserved: !1 }],
    ["h2", { reserved: !1 }],
    ["h3", { reserved: !1 }],
    ["h4", { reserved: !1 }],
    ["h5", { reserved: !1 }],
    ["h6", { reserved: !1 }],
    ["head", { reserved: !0 }],
    ["header", { reserved: !1 }],
    ["hgroup", { reserved: !1 }],
    ["hr", { reserved: !1 }],
    ["html", { reserved: !0 }],
    ["i", { reserved: !1 }],
    ["iframe", { reserved: !1 }],
    ["img", { reserved: !1 }],
    ["input", { reserved: !1 }],
    ["ins", { reserved: !1 }],
    ["kbd", { reserved: !1 }],
    ["keygen", { reserved: !1 }],
    ["label", { reserved: !1 }],
    ["legend", { reserved: !1 }],
    ["li", { reserved: !1 }],
    ["link", { reserved: !0 }],
    ["main", { reserved: !1 }],
    ["map", { reserved: !1 }],
    ["mark", { reserved: !1 }],
    ["marquee", { reserved: !1 }],
    ["menu", { reserved: !1 }],
    ["menuitem", { reserved: !1 }],
    ["meta", { reserved: !0 }],
    ["meter", { reserved: !1 }],
    ["nav", { reserved: !1 }],
    ["noembed", { reserved: !0 }],
    ["noscript", { reserved: !0 }],
    ["object", { reserved: !1 }],
    ["ol", { reserved: !1 }],
    ["optgroup", { reserved: !1 }],
    ["option", { reserved: !1 }],
    ["output", { reserved: !1 }],
    ["p", { reserved: !1 }],
    ["param", { reserved: !0 }],
    ["picture", { reserved: !0 }],
    ["pre", { reserved: !1 }],
    ["progress", { reserved: !1 }],
    ["q", { reserved: !1 }],
    ["rp", { reserved: !1 }],
    ["rt", { reserved: !1 }],
    ["rtc", { reserved: !1 }],
    ["ruby", { reserved: !1 }],
    ["s", { reserved: !1 }],
    ["samp", { reserved: !1 }],
    ["script", { reserved: !0 }],
    ["section", { reserved: !1 }],
    ["select", { reserved: !1 }],
    ["small", { reserved: !1 }],
    ["source", { reserved: !0 }],
    ["spacer", { reserved: !1 }],
    ["span", { reserved: !1 }],
    ["strike", { reserved: !1 }],
    ["strong", { reserved: !1 }],
    ["style", { reserved: !0 }],
    ["sub", { reserved: !1 }],
    ["summary", { reserved: !1 }],
    ["sup", { reserved: !1 }],
    ["table", { reserved: !1 }],
    ["tbody", { reserved: !1 }],
    ["td", { reserved: !1 }],
    ["textarea", { reserved: !1 }],
    ["tfoot", { reserved: !1 }],
    ["th", { reserved: !1 }],
    ["thead", { reserved: !1 }],
    ["time", { reserved: !1 }],
    ["title", { reserved: !0 }],
    ["tr", { reserved: !1 }],
    ["track", { reserved: !0 }],
    ["tt", { reserved: !1 }],
    ["u", { reserved: !1 }],
    ["ul", { reserved: !1 }],
    ["var", { reserved: !1 }],
    ["video", { reserved: !1 }],
    ["wbr", { reserved: !1 }],
    ["xmp", { reserved: !1 }],
  ],
  ui = {
    entries: function () {
      return ct;
    },
    forEach: function (t) {
      var r =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
        n = bh(ct),
        a;
      try {
        for (n.s(); !(a = n.n()).done; ) {
          var o = Rl(a.value, 2),
            l = o[0],
            u = o[1];
          t.call(r, u, l, ct);
        }
      } catch (i) {
        n.e(i);
      } finally {
        n.f();
      }
    },
    get: function (t) {
      var r = ct.find(function (n) {
        return n[0] === t;
      });
      return r && r[1];
    },
    has: function (t) {
      return !!ui.get(t);
    },
    keys: function () {
      return ct.map(function (t) {
        var r = Rl(t, 1),
          n = r[0];
        return n;
      });
    },
    values: function () {
      return ct.map(function (t) {
        var r = Rl(t, 2),
          n = r[1];
        return n;
      });
    },
  },
  hh = (0, fh.default)(ui, ui.entries());
pn.default = hh;
var Ot = {},
  vn = {},
  yn = {};
Object.defineProperty(yn, "__esModule", { value: !0 });
yn.default = void 0;
var gh = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: "menuitem" }, module: "HTML" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]],
  },
  Eh = gh;
yn.default = Eh;
var mn = {};
Object.defineProperty(mn, "__esModule", { value: !0 });
mn.default = void 0;
var _h = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-activedescendant": null, "aria-disabled": null },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]],
  },
  Rh = _h;
mn.default = Rh;
var bn = {};
Object.defineProperty(bn, "__esModule", { value: !0 });
bn.default = void 0;
var Ph = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-disabled": null },
    relatedConcepts: [{ concept: { name: "input" }, module: "XForms" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]],
  },
  wh = Ph;
bn.default = wh;
var hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.default = void 0;
var Ch = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  Oh = Ch;
hn.default = Oh;
var gn = {};
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.default = void 0;
var Sh = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuemax": null,
      "aria-valuemin": null,
      "aria-valuenow": null,
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]],
  },
  $h = Sh;
gn.default = $h;
var En = {};
Object.defineProperty(En, "__esModule", { value: !0 });
En.default = void 0;
var Th = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {
      "aria-atomic": null,
      "aria-busy": null,
      "aria-controls": null,
      "aria-current": null,
      "aria-describedby": null,
      "aria-details": null,
      "aria-dropeffect": null,
      "aria-flowto": null,
      "aria-grabbed": null,
      "aria-hidden": null,
      "aria-keyshortcuts": null,
      "aria-label": null,
      "aria-labelledby": null,
      "aria-live": null,
      "aria-owns": null,
      "aria-relevant": null,
      "aria-roledescription": null,
    },
    relatedConcepts: [
      { concept: { name: "rel" }, module: "HTML" },
      { concept: { name: "role" }, module: "XHTML" },
      { concept: { name: "type" }, module: "Dublin Core" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [],
  },
  qh = Th;
En.default = qh;
var _n = {};
Object.defineProperty(_n, "__esModule", { value: !0 });
_n.default = void 0;
var Ah = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: "frontmatter" }, module: "DTB" },
      { concept: { name: "level" }, module: "DTB" },
      { concept: { name: "level" }, module: "SMIL" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]],
  },
  xh = Ah;
_n.default = xh;
var Rn = {};
Object.defineProperty(Rn, "__esModule", { value: !0 });
Rn.default = void 0;
var Mh = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]],
  },
  Bh = Mh;
Rn.default = Bh;
var Pn = {};
Object.defineProperty(Pn, "__esModule", { value: !0 });
Pn.default = void 0;
var Ih = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-orientation": null },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ["roletype", "widget", "composite"],
      ["roletype", "structure", "section", "group"],
    ],
  },
  jh = Ih;
Pn.default = jh;
var wn = {};
Object.defineProperty(wn, "__esModule", { value: !0 });
wn.default = void 0;
var Nh = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]],
  },
  Dh = Nh;
wn.default = Dh;
var Cn = {};
Object.defineProperty(Cn, "__esModule", { value: !0 });
Cn.default = void 0;
var kh = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]],
  },
  Lh = kh;
Cn.default = Lh;
var On = {};
Object.defineProperty(On, "__esModule", { value: !0 });
On.default = void 0;
var Fh = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-modal": null },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]],
  },
  Uh = Fh;
On.default = Uh;
Object.defineProperty(vn, "__esModule", { value: !0 });
vn.default = void 0;
var Vh = re(yn),
  Hh = re(mn),
  Wh = re(bn),
  zh = re(hn),
  Kh = re(gn),
  Gh = re(En),
  Yh = re(_n),
  Jh = re(Rn),
  Xh = re(Pn),
  Qh = re(wn),
  Zh = re(Cn),
  eg = re(On);
function re(e) {
  return e && e.__esModule ? e : { default: e };
}
var tg = [
    ["command", Vh.default],
    ["composite", Hh.default],
    ["input", Wh.default],
    ["landmark", zh.default],
    ["range", Kh.default],
    ["roletype", Gh.default],
    ["section", Yh.default],
    ["sectionhead", Jh.default],
    ["select", Xh.default],
    ["structure", Qh.default],
    ["widget", Zh.default],
    ["window", eg.default],
  ],
  rg = tg;
vn.default = rg;
var Sn = {},
  $n = {};
Object.defineProperty($n, "__esModule", { value: !0 });
$n.default = void 0;
var ng = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-atomic": "true", "aria-live": "assertive" },
    relatedConcepts: [{ concept: { name: "alert" }, module: "XForms" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  ag = ng;
$n.default = ag;
var Tn = {};
Object.defineProperty(Tn, "__esModule", { value: !0 });
Tn.default = void 0;
var og = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: "alert" }, module: "XForms" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ["roletype", "structure", "section", "alert"],
      ["roletype", "window", "dialog"],
    ],
  },
  lg = og;
Tn.default = lg;
var qn = {};
Object.defineProperty(qn, "__esModule", { value: !0 });
qn.default = void 0;
var ig = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "Device Independence Delivery Unit" } },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]],
  },
  ug = ig;
qn.default = ug;
var An = {};
Object.defineProperty(An, "__esModule", { value: !0 });
An.default = void 0;
var sg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-posinset": null, "aria-setsize": null },
    relatedConcepts: [{ concept: { name: "article" }, module: "HTML" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "document"]],
  },
  cg = sg;
An.default = cg;
var xn = {};
Object.defineProperty(xn, "__esModule", { value: !0 });
xn.default = void 0;
var dg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          constraints: ["direct descendant of document"],
          name: "header",
        },
        module: "HTML",
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  fg = dg;
xn.default = fg;
var Mn = {};
Object.defineProperty(Mn, "__esModule", { value: !0 });
Mn.default = void 0;
var pg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  vg = pg;
Mn.default = vg;
var Bn = {};
Object.defineProperty(Bn, "__esModule", { value: !0 });
Bn.default = void 0;
var yg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-pressed": null,
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [
            { constraints: ["set"], name: "aria-pressed" },
            { name: "type", value: "checkbox" },
          ],
          name: "input",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [{ name: "aria-expanded", value: "false" }],
          name: "summary",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [{ name: "aria-expanded", value: "true" }],
          constraints: [
            "direct descendant of details element with the open attribute defined",
          ],
          name: "summary",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [{ name: "type", value: "button" }],
          name: "input",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [{ name: "type", value: "image" }],
          name: "input",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [{ name: "type", value: "reset" }],
          name: "input",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [{ name: "type", value: "submit" }],
          name: "input",
        },
        module: "HTML",
      },
      { concept: { name: "button" }, module: "HTML" },
      { concept: { name: "trigger" }, module: "XForms" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]],
  },
  mg = yg;
Bn.default = mg;
var In = {};
Object.defineProperty(In, "__esModule", { value: !0 });
In.default = void 0;
var bg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [],
    requireContextRole: ["figure", "grid", "table"],
    requiredContextRole: ["figure", "grid", "table"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  hg = bg;
In.default = hg;
var jn = {};
Object.defineProperty(jn, "__esModule", { value: !0 });
jn.default = void 0;
var gg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-colindex": null,
      "aria-colspan": null,
      "aria-rowindex": null,
      "aria-rowspan": null,
    },
    relatedConcepts: [
      {
        concept: { constraints: ["descendant of table"], name: "td" },
        module: "HTML",
      },
    ],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  Eg = gg;
jn.default = Eg;
var Nn = {};
Object.defineProperty(Nn, "__esModule", { value: !0 });
Nn.default = void 0;
var _g = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: "type", value: "checkbox" }],
          name: "input",
        },
        module: "HTML",
      },
      { concept: { name: "option" }, module: "ARIA" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { "aria-checked": null },
    superClass: [["roletype", "widget", "input"]],
  },
  Rg = _g;
Nn.default = Rg;
var Dn = {};
Object.defineProperty(Dn, "__esModule", { value: !0 });
Dn.default = void 0;
var Pg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  wg = Pg;
Dn.default = wg;
var kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.default = void 0;
var Cg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: { "aria-sort": null },
    relatedConcepts: [
      {
        attributes: [{ name: "scope", value: "col" }],
        concept: { name: "th" },
        module: "HTML",
      },
    ],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ["roletype", "structure", "section", "cell"],
      ["roletype", "structure", "section", "cell", "gridcell"],
      ["roletype", "widget", "gridcell"],
      ["roletype", "structure", "sectionhead"],
    ],
  },
  Og = Cg;
kn.default = Og;
var Ln = {};
Object.defineProperty(Ln, "__esModule", { value: !0 });
Ln.default = void 0;
var Sg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-autocomplete": null,
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-expanded": "false",
      "aria-haspopup": "listbox",
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [
            { constraints: ["set"], name: "list" },
            { name: "type", value: "email" },
          ],
          name: "input",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [
            { constraints: ["set"], name: "list" },
            { name: "type", value: "search" },
          ],
          name: "input",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [
            { constraints: ["set"], name: "list" },
            { name: "type", value: "tel" },
          ],
          name: "input",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [
            { constraints: ["set"], name: "list" },
            { name: "type", value: "text" },
          ],
          name: "input",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [
            { constraints: ["set"], name: "list" },
            { name: "type", value: "url" },
          ],
          name: "input",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [
            { constraints: ["set"], name: "list" },
            { name: "type", value: "url" },
          ],
          name: "input",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [
            { constraints: ["undefined"], name: "multiple" },
            { constraints: ["undefined"], name: "size" },
          ],
          name: "select",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [
            { constraints: ["undefined"], name: "multiple" },
            { name: "size", value: 1 },
          ],
          name: "select",
        },
        module: "HTML",
      },
      { concept: { name: "select" }, module: "XForms" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { "aria-controls": null, "aria-expanded": "false" },
    superClass: [["roletype", "widget", "input"]],
  },
  $g = Sg;
Ln.default = $g;
var Fn = {};
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.default = void 0;
var Tg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: "aside" }, module: "HTML" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  qg = Tg;
Fn.default = qg;
var Un = {};
Object.defineProperty(Un, "__esModule", { value: !0 });
Un.default = void 0;
var Ag = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          constraints: ["direct descendant of document"],
          name: "footer",
        },
        module: "HTML",
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  xg = Ag;
Un.default = xg;
var Vn = {};
Object.defineProperty(Vn, "__esModule", { value: !0 });
Vn.default = void 0;
var Mg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: "dd" }, module: "HTML" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  Bg = Mg;
Vn.default = Bg;
var Hn = {};
Object.defineProperty(Hn, "__esModule", { value: !0 });
Hn.default = void 0;
var Ig = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  jg = Ig;
Hn.default = jg;
var Wn = {};
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.default = void 0;
var Ng = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: "dialog" }, module: "HTML" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "window"]],
  },
  Dg = Ng;
Wn.default = Dg;
var zn = {};
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.default = void 0;
var kg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ module: "DAISY Guide" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "list"]],
  },
  Lg = kg;
zn.default = Lg;
var Kn = {};
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.default = void 0;
var Fg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: "Device Independence Delivery Unit" } },
      { concept: { name: "body" }, module: "HTML" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]],
  },
  Ug = Fg;
Kn.default = Ug;
var Gn = {};
Object.defineProperty(Gn, "__esModule", { value: !0 });
Gn.default = void 0;
var Vg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  Hg = Vg;
Gn.default = Hg;
var Yn = {};
Object.defineProperty(Yn, "__esModule", { value: !0 });
Yn.default = void 0;
var Wg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["article"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "list"]],
  },
  zg = Wg;
Yn.default = zg;
var Jn = {};
Object.defineProperty(Jn, "__esModule", { value: !0 });
Jn.default = void 0;
var Kg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: "figure" }, module: "HTML" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  Gg = Kg;
Jn.default = Gg;
var Xn = {};
Object.defineProperty(Xn, "__esModule", { value: !0 });
Xn.default = void 0;
var Yg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          attributes: [{ constraints: ["set"], name: "aria-label" }],
          name: "form",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [{ constraints: ["set"], name: "aria-labelledby" }],
          name: "form",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [{ constraints: ["set"], name: "name" }],
          name: "form",
        },
        module: "HTML",
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  Jg = Yg;
Xn.default = Jg;
var Qn = {};
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.default = void 0;
var Xg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [
      { concept: { name: "span" }, module: "HTML" },
      { concept: { name: "div" }, module: "HTML" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]],
  },
  Qg = Xg;
Qn.default = Qg;
var Zn = {};
Object.defineProperty(Zn, "__esModule", { value: !0 });
Zn.default = void 0;
var Zg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-multiselectable": null, "aria-readonly": null },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: "role", value: "grid" }],
          name: "table",
        },
        module: "HTML",
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [
      ["roletype", "widget", "composite"],
      ["roletype", "structure", "section", "table"],
    ],
  },
  eE = Zg;
Zn.default = eE;
var ea = {};
Object.defineProperty(ea, "__esModule", { value: !0 });
ea.default = void 0;
var tE = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-selected": null,
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: "role", value: "gridcell" }],
          name: "td",
        },
        module: "HTML",
      },
    ],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ["roletype", "structure", "section", "cell"],
      ["roletype", "widget"],
    ],
  },
  rE = tE;
ea.default = rE;
var ta = {};
Object.defineProperty(ta, "__esModule", { value: !0 });
ta.default = void 0;
var nE = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-activedescendant": null, "aria-disabled": null },
    relatedConcepts: [
      { concept: { name: "details" }, module: "HTML" },
      { concept: { name: "fieldset" }, module: "HTML" },
      { concept: { name: "optgroup" }, module: "HTML" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  aE = nE;
ta.default = aE;
var ra = {};
Object.defineProperty(ra, "__esModule", { value: !0 });
ra.default = void 0;
var oE = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: { "aria-level": "2" },
    relatedConcepts: [
      { concept: { name: "h1" }, module: "HTML" },
      { concept: { name: "h2" }, module: "HTML" },
      { concept: { name: "h3" }, module: "HTML" },
      { concept: { name: "h4" }, module: "HTML" },
      { concept: { name: "h5" }, module: "HTML" },
      { concept: { name: "h6" }, module: "HTML" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { "aria-level": "2" },
    superClass: [["roletype", "structure", "sectionhead"]],
  },
  lE = oE;
ra.default = lE;
var na = {};
Object.defineProperty(na, "__esModule", { value: !0 });
na.default = void 0;
var iE = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          attributes: [{ constraints: ["set"], name: "alt" }],
          name: "img",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [{ constraints: ["undefined"], name: "alt" }],
          name: "img",
        },
        module: "HTML",
      },
      { concept: { name: "imggroup" }, module: "DTB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  uE = iE;
na.default = uE;
var aa = {};
Object.defineProperty(aa, "__esModule", { value: !0 });
aa.default = void 0;
var sE = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  cE = sE;
aa.default = cE;
var oa = {};
Object.defineProperty(oa, "__esModule", { value: !0 });
oa.default = void 0;
var dE = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
    },
    relatedConcepts: [
      {
        concept: { attributes: [{ name: "href" }], name: "a" },
        module: "HTML",
      },
      {
        concept: { attributes: [{ name: "href" }], name: "area" },
        module: "HTML",
      },
      {
        concept: { attributes: [{ name: "href" }], name: "link" },
        module: "HTML",
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]],
  },
  fE = dE;
oa.default = fE;
var la = {};
Object.defineProperty(la, "__esModule", { value: !0 });
la.default = void 0;
var pE = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: "menu" }, module: "HTML" },
      { concept: { name: "ol" }, module: "HTML" },
      { concept: { name: "ul" }, module: "HTML" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["listitem"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  vE = pE;
la.default = vE;
var ia = {};
Object.defineProperty(ia, "__esModule", { value: !0 });
ia.default = void 0;
var yE = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-invalid": null,
      "aria-multiselectable": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-orientation": "vertical",
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [
            { constraints: [">1"], name: "size" },
            { name: "multiple" },
          ],
          name: "select",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [{ constraints: [">1"], name: "size" }],
          name: "select",
        },
        module: "HTML",
      },
      {
        concept: { attributes: [{ name: "multiple" }], name: "select" },
        module: "HTML",
      },
      { concept: { name: "datalist" }, module: "HTML" },
      { concept: { name: "list" }, module: "ARIA" },
      { concept: { name: "select" }, module: "XForms" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["option", "group"], ["option"]],
    requiredProps: {},
    superClass: [
      ["roletype", "widget", "composite", "select"],
      ["roletype", "structure", "section", "group", "select"],
    ],
  },
  mE = yE;
ia.default = mE;
var ua = {};
Object.defineProperty(ua, "__esModule", { value: !0 });
ua.default = void 0;
var bE = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-level": null, "aria-posinset": null, "aria-setsize": null },
    relatedConcepts: [
      {
        concept: {
          constraints: ["direct descendant of ol, ul or menu"],
          name: "li",
        },
        module: "HTML",
      },
      { concept: { name: "item" }, module: "XForms" },
    ],
    requireContextRole: ["directory", "list"],
    requiredContextRole: ["directory", "list"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  hE = bE;
ua.default = hE;
var sa = {};
Object.defineProperty(sa, "__esModule", { value: !0 });
sa.default = void 0;
var gE = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-live": "polite" },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  EE = gE;
sa.default = EE;
var ca = {};
Object.defineProperty(ca, "__esModule", { value: !0 });
ca.default = void 0;
var _E = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: "main" }, module: "HTML" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  RE = _E;
ca.default = RE;
var da = {};
Object.defineProperty(da, "__esModule", { value: !0 });
da.default = void 0;
var PE = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  wE = PE;
da.default = wE;
var fa = {};
Object.defineProperty(fa, "__esModule", { value: !0 });
fa.default = void 0;
var CE = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: "math" }, module: "HTML" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  OE = CE;
fa.default = OE;
var pa = {};
Object.defineProperty(pa, "__esModule", { value: !0 });
pa.default = void 0;
var SE = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-orientation": "vertical" },
    relatedConcepts: [
      { concept: { name: "MENU" }, module: "JAPI" },
      { concept: { name: "list" }, module: "ARIA" },
      { concept: { name: "select" }, module: "XForms" },
      { concept: { name: "sidebar" }, module: "DTB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
      ["menuitem", "group"],
      ["menuitemradio", "group"],
      ["menuitemcheckbox", "group"],
      ["menuitem"],
      ["menuitemcheckbox"],
      ["menuitemradio"],
    ],
    requiredProps: {},
    superClass: [
      ["roletype", "widget", "composite", "select"],
      ["roletype", "structure", "section", "group", "select"],
    ],
  },
  $E = SE;
pa.default = $E;
var va = {};
Object.defineProperty(va, "__esModule", { value: !0 });
va.default = void 0;
var TE = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-orientation": "horizontal" },
    relatedConcepts: [{ concept: { name: "toolbar" }, module: "ARIA" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
      ["menuitem", "group"],
      ["menuitemradio", "group"],
      ["menuitemcheckbox", "group"],
      ["menuitem"],
      ["menuitemcheckbox"],
      ["menuitemradio"],
    ],
    requiredProps: {},
    superClass: [
      ["roletype", "widget", "composite", "select", "menu"],
      ["roletype", "structure", "section", "group", "select", "menu"],
    ],
  },
  qE = TE;
va.default = qE;
var ya = {};
Object.defineProperty(ya, "__esModule", { value: !0 });
ya.default = void 0;
var AE = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-posinset": null,
      "aria-setsize": null,
    },
    relatedConcepts: [
      { concept: { name: "MENU_ITEM" }, module: "JAPI" },
      { concept: { name: "listitem" }, module: "ARIA" },
      { concept: { name: "menuitem" }, module: "HTML" },
      { concept: { name: "option" }, module: "ARIA" },
    ],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]],
  },
  xE = AE;
ya.default = xE;
var ma = {};
Object.defineProperty(ma, "__esModule", { value: !0 });
ma.default = void 0;
var ME = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: "menuitem" }, module: "ARIA" }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: { "aria-checked": null },
    superClass: [
      ["roletype", "widget", "input", "checkbox"],
      ["roletype", "widget", "command", "menuitem"],
    ],
  },
  BE = ME;
ma.default = BE;
var ba = {};
Object.defineProperty(ba, "__esModule", { value: !0 });
ba.default = void 0;
var IE = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: "menuitem" }, module: "ARIA" }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: { "aria-checked": null },
    superClass: [
      ["roletype", "widget", "input", "checkbox", "menuitemcheckbox"],
      ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"],
      ["roletype", "widget", "input", "radio"],
    ],
  },
  jE = IE;
ba.default = jE;
var ha = {};
Object.defineProperty(ha, "__esModule", { value: !0 });
ha.default = void 0;
var NE = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuetext": null,
      "aria-valuemax": "100",
      "aria-valuemin": "0",
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { "aria-valuenow": null },
    superClass: [["roletype", "structure", "range"]],
  },
  DE = NE;
ha.default = DE;
var ga = {};
Object.defineProperty(ga, "__esModule", { value: !0 });
ga.default = void 0;
var kE = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: "nav" }, module: "HTML" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  LE = kE;
ga.default = LE;
var Ea = {};
Object.defineProperty(Ea, "__esModule", { value: !0 });
Ea.default = void 0;
var FE = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [],
  },
  UE = FE;
Ea.default = UE;
var _a = {};
Object.defineProperty(_a, "__esModule", { value: !0 });
_a.default = void 0;
var VE = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  HE = VE;
_a.default = HE;
var Ra = {};
Object.defineProperty(Ra, "__esModule", { value: !0 });
Ra.default = void 0;
var WE = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-posinset": null,
      "aria-setsize": null,
      "aria-selected": "false",
    },
    relatedConcepts: [
      { concept: { name: "item" }, module: "XForms" },
      { concept: { name: "listitem" }, module: "ARIA" },
      { concept: { name: "option" }, module: "HTML" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { "aria-selected": "false" },
    superClass: [["roletype", "widget", "input"]],
  },
  zE = WE;
Ra.default = zE;
var Pa = {};
Object.defineProperty(Pa, "__esModule", { value: !0 });
Pa.default = void 0;
var KE = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  GE = KE;
Pa.default = GE;
var wa = {};
Object.defineProperty(wa, "__esModule", { value: !0 });
wa.default = void 0;
var YE = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]],
  },
  JE = YE;
wa.default = JE;
var Ca = {};
Object.defineProperty(Ca, "__esModule", { value: !0 });
Ca.default = void 0;
var XE = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-valuetext": null },
    relatedConcepts: [
      { concept: { name: "progress" }, module: "HTML" },
      { concept: { name: "status" }, module: "ARIA" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ["roletype", "structure", "range"],
      ["roletype", "widget"],
    ],
  },
  QE = XE;
Ca.default = QE;
var Oa = {};
Object.defineProperty(Oa, "__esModule", { value: !0 });
Oa.default = void 0;
var ZE = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-posinset": null,
      "aria-setsize": null,
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: "type", value: "radio" }],
          name: "input",
        },
        module: "HTML",
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { "aria-checked": null },
    superClass: [["roletype", "widget", "input"]],
  },
  e_ = ZE;
Oa.default = e_;
var Sa = {};
Object.defineProperty(Sa, "__esModule", { value: !0 });
Sa.default = void 0;
var t_ = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
    },
    relatedConcepts: [{ concept: { name: "list" }, module: "ARIA" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["radio"]],
    requiredProps: {},
    superClass: [
      ["roletype", "widget", "composite", "select"],
      ["roletype", "structure", "section", "group", "select"],
    ],
  },
  r_ = t_;
Sa.default = r_;
var $a = {};
Object.defineProperty($a, "__esModule", { value: !0 });
$a.default = void 0;
var n_ = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          attributes: [{ constraints: ["set"], name: "aria-label" }],
          name: "section",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [{ constraints: ["set"], name: "aria-labelledby" }],
          name: "section",
        },
        module: "HTML",
      },
      { concept: { name: "Device Independence Glossart perceivable unit" } },
      { concept: { name: "frame" }, module: "HTML" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  a_ = n_;
$a.default = a_;
var Ta = {};
Object.defineProperty(Ta, "__esModule", { value: !0 });
Ta.default = void 0;
var o_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-colindex": null,
      "aria-expanded": null,
      "aria-level": null,
      "aria-posinset": null,
      "aria-rowindex": null,
      "aria-selected": null,
      "aria-setsize": null,
    },
    relatedConcepts: [{ concept: { name: "tr" }, module: "HTML" }],
    requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
    requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
    requiredOwnedElements: [
      ["cell"],
      ["columnheader"],
      ["gridcell"],
      ["rowheader"],
    ],
    requiredProps: {},
    superClass: [
      ["roletype", "structure", "section", "group"],
      ["roletype", "widget"],
    ],
  },
  l_ = o_;
Ta.default = l_;
var qa = {};
Object.defineProperty(qa, "__esModule", { value: !0 });
qa.default = void 0;
var i_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: "tbody" }, module: "HTML" },
      { concept: { name: "tfoot" }, module: "HTML" },
      { concept: { name: "thead" }, module: "HTML" },
    ],
    requireContextRole: ["grid", "table", "treegrid"],
    requiredContextRole: ["grid", "table", "treegrid"],
    requiredOwnedElements: [["row"]],
    requiredProps: {},
    superClass: [["roletype", "structure"]],
  },
  u_ = i_;
qa.default = u_;
var Aa = {};
Object.defineProperty(Aa, "__esModule", { value: !0 });
Aa.default = void 0;
var s_ = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: { "aria-sort": null },
    relatedConcepts: [
      {
        concept: { attributes: [{ name: "scope", value: "row" }], name: "th" },
        module: "HTML",
      },
      {
        concept: {
          attributes: [{ name: "scope", value: "rowgroup" }],
          name: "th",
        },
        module: "HTML",
      },
    ],
    requireContextRole: ["row", "rowgroup"],
    requiredContextRole: ["row", "rowgroup"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ["roletype", "structure", "section", "cell"],
      ["roletype", "structure", "section", "cell", "gridcell"],
      ["roletype", "widget", "gridcell"],
      ["roletype", "structure", "sectionhead"],
    ],
  },
  c_ = s_;
Aa.default = c_;
var xa = {};
Object.defineProperty(xa, "__esModule", { value: !0 });
xa.default = void 0;
var d_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-valuetext": null,
      "aria-orientation": "vertical",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { "aria-controls": null, "aria-valuenow": null },
    superClass: [
      ["roletype", "structure", "range"],
      ["roletype", "widget"],
    ],
  },
  f_ = d_;
xa.default = f_;
var Ma = {};
Object.defineProperty(Ma, "__esModule", { value: !0 });
Ma.default = void 0;
var p_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  v_ = p_;
Ma.default = v_;
var Ba = {};
Object.defineProperty(Ba, "__esModule", { value: !0 });
Ba.default = void 0;
var y_ = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          attributes: [
            { constraints: ["undefined"], name: "list" },
            { name: "type", value: "search" },
          ],
          name: "input",
        },
        module: "HTML",
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "input", "textbox"]],
  },
  m_ = y_;
Ba.default = m_;
var Ia = {};
Object.defineProperty(Ia, "__esModule", { value: !0 });
Ia.default = void 0;
var b_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-orientation": "horizontal",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": null,
      "aria-valuetext": null,
    },
    relatedConcepts: [{ concept: { name: "hr" }, module: "HTML" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]],
  },
  h_ = b_;
Ia.default = h_;
var ja = {};
Object.defineProperty(ja, "__esModule", { value: !0 });
ja.default = void 0;
var g_ = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-valuetext": null,
      "aria-orientation": "horizontal",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: "type", value: "range" }],
          name: "input",
        },
        module: "HTML",
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { "aria-valuenow": null },
    superClass: [
      ["roletype", "widget", "input"],
      ["roletype", "structure", "range"],
    ],
  },
  E_ = g_;
ja.default = E_;
var Na = {};
Object.defineProperty(Na, "__esModule", { value: !0 });
Na.default = void 0;
var __ = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-valuetext": null,
      "aria-valuenow": "0",
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: "type", value: "number" }],
          name: "input",
        },
        module: "HTML",
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ["roletype", "widget", "composite"],
      ["roletype", "widget", "input"],
      ["roletype", "structure", "range"],
    ],
  },
  R_ = __;
Na.default = R_;
var Da = {};
Object.defineProperty(Da, "__esModule", { value: !0 });
Da.default = void 0;
var P_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-atomic": "true", "aria-live": "polite" },
    relatedConcepts: [{ concept: { name: "output" }, module: "HTML" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  w_ = P_;
Da.default = w_;
var ka = {};
Object.defineProperty(ka, "__esModule", { value: !0 });
ka.default = void 0;
var C_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  O_ = C_;
ka.default = O_;
var La = {};
Object.defineProperty(La, "__esModule", { value: !0 });
La.default = void 0;
var S_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  $_ = S_;
La.default = $_;
var Fa = {};
Object.defineProperty(Fa, "__esModule", { value: !0 });
Fa.default = void 0;
var T_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  q_ = T_;
Fa.default = q_;
var Ua = {};
Object.defineProperty(Ua, "__esModule", { value: !0 });
Ua.default = void 0;
var A_ = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: "button" }, module: "ARIA" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { "aria-checked": null },
    superClass: [["roletype", "widget", "input", "checkbox"]],
  },
  x_ = A_;
Ua.default = x_;
var Va = {};
Object.defineProperty(Va, "__esModule", { value: !0 });
Va.default = void 0;
var M_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-posinset": null,
      "aria-setsize": null,
      "aria-selected": "false",
    },
    relatedConcepts: [],
    requireContextRole: ["tablist"],
    requiredContextRole: ["tablist"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ["roletype", "structure", "sectionhead"],
      ["roletype", "widget"],
    ],
  },
  B_ = M_;
Va.default = B_;
var Ha = {};
Object.defineProperty(Ha, "__esModule", { value: !0 });
Ha.default = void 0;
var I_ = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-colcount": null, "aria-rowcount": null },
    relatedConcepts: [{ concept: { name: "table" }, module: "HTML" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  j_ = I_;
Ha.default = j_;
var Wa = {};
Object.defineProperty(Wa, "__esModule", { value: !0 });
Wa.default = void 0;
var N_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-level": null,
      "aria-multiselectable": null,
      "aria-orientation": "horizontal",
    },
    relatedConcepts: [{ module: "DAISY", concept: { name: "guide" } }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["tab"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"]],
  },
  D_ = N_;
Wa.default = D_;
var za = {};
Object.defineProperty(za, "__esModule", { value: !0 });
za.default = void 0;
var k_ = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  L_ = k_;
za.default = L_;
var Ka = {};
Object.defineProperty(Ka, "__esModule", { value: !0 });
Ka.default = void 0;
var F_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: "dfn" }, module: "HTML" },
      { concept: { name: "dt" }, module: "HTML" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  U_ = F_;
Ka.default = U_;
var Ga = {};
Object.defineProperty(Ga, "__esModule", { value: !0 });
Ga.default = void 0;
var V_ = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-autocomplete": null,
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-multiline": null,
      "aria-placeholder": null,
      "aria-readonly": null,
      "aria-required": null,
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [
            { constraints: ["undefined"], name: "type" },
            { constraints: ["undefined"], name: "list" },
          ],
          name: "input",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [
            { constraints: ["undefined"], name: "list" },
            { name: "type", value: "email" },
          ],
          name: "input",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [
            { constraints: ["undefined"], name: "list" },
            { name: "type", value: "tel" },
          ],
          name: "input",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [
            { constraints: ["undefined"], name: "list" },
            { name: "type", value: "text" },
          ],
          name: "input",
        },
        module: "HTML",
      },
      {
        concept: {
          attributes: [
            { constraints: ["undefined"], name: "list" },
            { name: "type", value: "url" },
          ],
          name: "input",
        },
        module: "HTML",
      },
      { concept: { name: "input" }, module: "XForms" },
      { concept: { name: "textarea" }, module: "HTML" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "input"]],
  },
  H_ = V_;
Ga.default = H_;
var Ya = {};
Object.defineProperty(Ya, "__esModule", { value: !0 });
Ya.default = void 0;
var W_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  z_ = W_;
Ya.default = z_;
var Ja = {};
Object.defineProperty(Ja, "__esModule", { value: !0 });
Ja.default = void 0;
var K_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "status"]],
  },
  G_ = K_;
Ja.default = G_;
var Xa = {};
Object.defineProperty(Xa, "__esModule", { value: !0 });
Xa.default = void 0;
var Y_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: { "aria-orientation": "horizontal" },
    relatedConcepts: [{ concept: { name: "menubar" }, module: "ARIA" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"]],
  },
  J_ = Y_;
Xa.default = J_;
var Qa = {};
Object.defineProperty(Qa, "__esModule", { value: !0 });
Qa.default = void 0;
var X_ = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  Q_ = X_;
Qa.default = Q_;
var Za = {};
Object.defineProperty(Za, "__esModule", { value: !0 });
Za.default = void 0;
var Z_ = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-multiselectable": null,
      "aria-required": null,
      "aria-orientation": "vertical",
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
    requiredProps: {},
    superClass: [
      ["roletype", "widget", "composite", "select"],
      ["roletype", "structure", "section", "group", "select"],
    ],
  },
  eR = Z_;
Za.default = eR;
var eo = {};
Object.defineProperty(eo, "__esModule", { value: !0 });
eo.default = void 0;
var tR = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [
      ["roletype", "widget", "composite", "grid"],
      ["roletype", "structure", "section", "table", "grid"],
      ["roletype", "widget", "composite", "select", "tree"],
      ["roletype", "structure", "section", "group", "select", "tree"],
    ],
  },
  rR = tR;
eo.default = rR;
var to = {};
Object.defineProperty(to, "__esModule", { value: !0 });
to.default = void 0;
var nR = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: { "aria-expanded": null, "aria-haspopup": null },
    relatedConcepts: [],
    requireContextRole: ["group", "tree"],
    requiredContextRole: ["group", "tree"],
    requiredOwnedElements: [],
    requiredProps: { "aria-selected": null },
    superClass: [
      ["roletype", "structure", "section", "listitem"],
      ["roletype", "widget", "input", "option"],
    ],
  },
  aR = nR;
to.default = aR;
Object.defineProperty(Sn, "__esModule", { value: !0 });
Sn.default = void 0;
var oR = g($n),
  lR = g(Tn),
  iR = g(qn),
  uR = g(An),
  sR = g(xn),
  cR = g(Mn),
  dR = g(Bn),
  fR = g(In),
  pR = g(jn),
  vR = g(Nn),
  yR = g(Dn),
  mR = g(kn),
  bR = g(Ln),
  hR = g(Fn),
  gR = g(Un),
  ER = g(Vn),
  _R = g(Hn),
  RR = g(Wn),
  PR = g(zn),
  wR = g(Kn),
  CR = g(Gn),
  OR = g(Yn),
  SR = g(Jn),
  $R = g(Xn),
  TR = g(Qn),
  qR = g(Zn),
  AR = g(ea),
  xR = g(ta),
  MR = g(ra),
  BR = g(na),
  IR = g(aa),
  jR = g(oa),
  NR = g(la),
  DR = g(ia),
  kR = g(ua),
  LR = g(sa),
  FR = g(ca),
  UR = g(da),
  VR = g(fa),
  HR = g(pa),
  WR = g(va),
  zR = g(ya),
  KR = g(ma),
  GR = g(ba),
  YR = g(ha),
  JR = g(ga),
  XR = g(Ea),
  QR = g(_a),
  ZR = g(Ra),
  eP = g(Pa),
  tP = g(wa),
  rP = g(Ca),
  nP = g(Oa),
  aP = g(Sa),
  oP = g($a),
  lP = g(Ta),
  iP = g(qa),
  uP = g(Aa),
  sP = g(xa),
  cP = g(Ma),
  dP = g(Ba),
  fP = g(Ia),
  pP = g(ja),
  vP = g(Na),
  yP = g(Da),
  mP = g(ka),
  bP = g(La),
  hP = g(Fa),
  gP = g(Ua),
  EP = g(Va),
  _P = g(Ha),
  RP = g(Wa),
  PP = g(za),
  wP = g(Ka),
  CP = g(Ga),
  OP = g(Ya),
  SP = g(Ja),
  $P = g(Xa),
  TP = g(Qa),
  qP = g(Za),
  AP = g(eo),
  xP = g(to);
function g(e) {
  return e && e.__esModule ? e : { default: e };
}
var MP = [
    ["alert", oR.default],
    ["alertdialog", lR.default],
    ["application", iR.default],
    ["article", uR.default],
    ["banner", sR.default],
    ["blockquote", cR.default],
    ["button", dR.default],
    ["caption", fR.default],
    ["cell", pR.default],
    ["checkbox", vR.default],
    ["code", yR.default],
    ["columnheader", mR.default],
    ["combobox", bR.default],
    ["complementary", hR.default],
    ["contentinfo", gR.default],
    ["definition", ER.default],
    ["deletion", _R.default],
    ["dialog", RR.default],
    ["directory", PR.default],
    ["document", wR.default],
    ["emphasis", CR.default],
    ["feed", OR.default],
    ["figure", SR.default],
    ["form", $R.default],
    ["generic", TR.default],
    ["grid", qR.default],
    ["gridcell", AR.default],
    ["group", xR.default],
    ["heading", MR.default],
    ["img", BR.default],
    ["insertion", IR.default],
    ["link", jR.default],
    ["list", NR.default],
    ["listbox", DR.default],
    ["listitem", kR.default],
    ["log", LR.default],
    ["main", FR.default],
    ["marquee", UR.default],
    ["math", VR.default],
    ["menu", HR.default],
    ["menubar", WR.default],
    ["menuitem", zR.default],
    ["menuitemcheckbox", KR.default],
    ["menuitemradio", GR.default],
    ["meter", YR.default],
    ["navigation", JR.default],
    ["none", XR.default],
    ["note", QR.default],
    ["option", ZR.default],
    ["paragraph", eP.default],
    ["presentation", tP.default],
    ["progressbar", rP.default],
    ["radio", nP.default],
    ["radiogroup", aP.default],
    ["region", oP.default],
    ["row", lP.default],
    ["rowgroup", iP.default],
    ["rowheader", uP.default],
    ["scrollbar", sP.default],
    ["search", cP.default],
    ["searchbox", dP.default],
    ["separator", fP.default],
    ["slider", pP.default],
    ["spinbutton", vP.default],
    ["status", yP.default],
    ["strong", mP.default],
    ["subscript", bP.default],
    ["superscript", hP.default],
    ["switch", gP.default],
    ["tab", EP.default],
    ["table", _P.default],
    ["tablist", RP.default],
    ["tabpanel", PP.default],
    ["term", wP.default],
    ["textbox", CP.default],
    ["time", OP.default],
    ["timer", SP.default],
    ["toolbar", $P.default],
    ["tooltip", TP.default],
    ["tree", qP.default],
    ["treegrid", AP.default],
    ["treeitem", xP.default],
  ],
  BP = MP;
Sn.default = BP;
var ro = {},
  no = {};
Object.defineProperty(no, "__esModule", { value: !0 });
no.default = void 0;
var IP = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "abstract [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  jP = IP;
no.default = jP;
var ao = {};
Object.defineProperty(ao, "__esModule", { value: !0 });
ao.default = void 0;
var NP = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "acknowledgments [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  DP = NP;
ao.default = DP;
var oo = {};
Object.defineProperty(oo, "__esModule", { value: !0 });
oo.default = void 0;
var kP = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "afterword [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  LP = kP;
oo.default = LP;
var lo = {};
Object.defineProperty(lo, "__esModule", { value: !0 });
lo.default = void 0;
var FP = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "appendix [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  UP = FP;
lo.default = UP;
var io = {};
Object.defineProperty(io, "__esModule", { value: !0 });
io.default = void 0;
var VP = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "content"],
    prohibitedProps: [],
    props: { "aria-errormessage": null, "aria-invalid": null },
    relatedConcepts: [
      { concept: { name: "referrer [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]],
  },
  HP = VP;
io.default = HP;
var uo = {};
Object.defineProperty(uo, "__esModule", { value: !0 });
uo.default = void 0;
var WP = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "EPUB biblioentry [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: ["doc-bibliography"],
    requiredContextRole: ["doc-bibliography"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "listitem"]],
  },
  zP = WP;
uo.default = zP;
var so = {};
Object.defineProperty(so, "__esModule", { value: !0 });
so.default = void 0;
var KP = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "bibliography [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["doc-biblioentry"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  GP = KP;
so.default = GP;
var co = {};
Object.defineProperty(co, "__esModule", { value: !0 });
co.default = void 0;
var YP = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: { "aria-errormessage": null, "aria-invalid": null },
    relatedConcepts: [
      { concept: { name: "biblioref [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]],
  },
  JP = YP;
co.default = JP;
var fo = {};
Object.defineProperty(fo, "__esModule", { value: !0 });
fo.default = void 0;
var XP = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "chapter [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  QP = XP;
fo.default = QP;
var po = {};
Object.defineProperty(po, "__esModule", { value: !0 });
po.default = void 0;
var ZP = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "colophon [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  ew = ZP;
po.default = ew;
var vo = {};
Object.defineProperty(vo, "__esModule", { value: !0 });
vo.default = void 0;
var tw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "conclusion [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  rw = tw;
vo.default = rw;
var yo = {};
Object.defineProperty(yo, "__esModule", { value: !0 });
yo.default = void 0;
var nw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "cover [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "img"]],
  },
  aw = nw;
yo.default = aw;
var mo = {};
Object.defineProperty(mo, "__esModule", { value: !0 });
mo.default = void 0;
var ow = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "credit [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  lw = ow;
mo.default = lw;
var bo = {};
Object.defineProperty(bo, "__esModule", { value: !0 });
bo.default = void 0;
var iw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "credits [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  uw = iw;
bo.default = uw;
var ho = {};
Object.defineProperty(ho, "__esModule", { value: !0 });
ho.default = void 0;
var sw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "dedication [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  cw = sw;
ho.default = cw;
var go = {};
Object.defineProperty(go, "__esModule", { value: !0 });
go.default = void 0;
var dw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "rearnote [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: ["doc-endnotes"],
    requiredContextRole: ["doc-endnotes"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "listitem"]],
  },
  fw = dw;
go.default = fw;
var Eo = {};
Object.defineProperty(Eo, "__esModule", { value: !0 });
Eo.default = void 0;
var pw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "rearnotes [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["doc-endnote"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  vw = pw;
Eo.default = vw;
var _o = {};
Object.defineProperty(_o, "__esModule", { value: !0 });
_o.default = void 0;
var yw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "epigraph [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  mw = yw;
_o.default = mw;
var Ro = {};
Object.defineProperty(Ro, "__esModule", { value: !0 });
Ro.default = void 0;
var bw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "epilogue [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  hw = bw;
Ro.default = hw;
var Po = {};
Object.defineProperty(Po, "__esModule", { value: !0 });
Po.default = void 0;
var gw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "errata [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  Ew = gw;
Po.default = Ew;
var wo = {};
Object.defineProperty(wo, "__esModule", { value: !0 });
wo.default = void 0;
var _w = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  Rw = _w;
wo.default = Rw;
var Co = {};
Object.defineProperty(Co, "__esModule", { value: !0 });
Co.default = void 0;
var Pw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "footnote [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  ww = Pw;
Co.default = ww;
var Oo = {};
Object.defineProperty(Oo, "__esModule", { value: !0 });
Oo.default = void 0;
var Cw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "foreword [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  Ow = Cw;
Oo.default = Ow;
var So = {};
Object.defineProperty(So, "__esModule", { value: !0 });
So.default = void 0;
var Sw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "glossary [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["definition"], ["term"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  $w = Sw;
So.default = $w;
var $o = {};
Object.defineProperty($o, "__esModule", { value: !0 });
$o.default = void 0;
var Tw = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: { "aria-errormessage": null, "aria-invalid": null },
    relatedConcepts: [
      { concept: { name: "glossref [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]],
  },
  qw = Tw;
$o.default = qw;
var To = {};
Object.defineProperty(To, "__esModule", { value: !0 });
To.default = void 0;
var Aw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "index [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ["roletype", "structure", "section", "landmark", "navigation"],
    ],
  },
  xw = Aw;
To.default = xw;
var qo = {};
Object.defineProperty(qo, "__esModule", { value: !0 });
qo.default = void 0;
var Mw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "introduction [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  Bw = Mw;
qo.default = Bw;
var Ao = {};
Object.defineProperty(Ao, "__esModule", { value: !0 });
Ao.default = void 0;
var Iw = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: { "aria-errormessage": null, "aria-invalid": null },
    relatedConcepts: [
      { concept: { name: "noteref [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]],
  },
  jw = Iw;
Ao.default = jw;
var xo = {};
Object.defineProperty(xo, "__esModule", { value: !0 });
xo.default = void 0;
var Nw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "notice [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "note"]],
  },
  Dw = Nw;
xo.default = Dw;
var Mo = {};
Object.defineProperty(Mo, "__esModule", { value: !0 });
Mo.default = void 0;
var kw = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "pagebreak [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "separator"]],
  },
  Lw = kw;
Mo.default = Lw;
var Bo = {};
Object.defineProperty(Bo, "__esModule", { value: !0 });
Bo.default = void 0;
var Fw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "page-list [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ["roletype", "structure", "section", "landmark", "navigation"],
    ],
  },
  Uw = Fw;
Bo.default = Uw;
var Io = {};
Object.defineProperty(Io, "__esModule", { value: !0 });
Io.default = void 0;
var Vw = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [{ concept: { name: "part [EPUB-SSV]" }, module: "EPUB" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  Hw = Vw;
Io.default = Hw;
var jo = {};
Object.defineProperty(jo, "__esModule", { value: !0 });
jo.default = void 0;
var Ww = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "preface [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  zw = Ww;
jo.default = zw;
var No = {};
Object.defineProperty(No, "__esModule", { value: !0 });
No.default = void 0;
var Kw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "prologue [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]],
  },
  Gw = Kw;
No.default = Gw;
var Do = {};
Object.defineProperty(Do, "__esModule", { value: !0 });
Do.default = void 0;
var Yw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: "pullquote [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["none"]],
  },
  Jw = Yw;
Do.default = Jw;
var ko = {};
Object.defineProperty(ko, "__esModule", { value: !0 });
ko.default = void 0;
var Xw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [{ concept: { name: "qna [EPUB-SSV]" }, module: "EPUB" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]],
  },
  Qw = Xw;
ko.default = Qw;
var Lo = {};
Object.defineProperty(Lo, "__esModule", { value: !0 });
Lo.default = void 0;
var Zw = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { concept: { name: "subtitle [EPUB-SSV]" }, module: "EPUB" },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "sectionhead"]],
  },
  eC = Zw;
Lo.default = eC;
var Fo = {};
Object.defineProperty(Fo, "__esModule", { value: !0 });
Fo.default = void 0;
var tC = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [{ concept: { name: "help [EPUB-SSV]" }, module: "EPUB" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "note"]],
  },
  rC = tC;
Fo.default = rC;
var Uo = {};
Object.defineProperty(Uo, "__esModule", { value: !0 });
Uo.default = void 0;
var nC = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [{ concept: { name: "toc [EPUB-SSV]" }, module: "EPUB" }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ["roletype", "structure", "section", "landmark", "navigation"],
    ],
  },
  aC = nC;
Uo.default = aC;
Object.defineProperty(ro, "__esModule", { value: !0 });
ro.default = void 0;
var oC = $(no),
  lC = $(ao),
  iC = $(oo),
  uC = $(lo),
  sC = $(io),
  cC = $(uo),
  dC = $(so),
  fC = $(co),
  pC = $(fo),
  vC = $(po),
  yC = $(vo),
  mC = $(yo),
  bC = $(mo),
  hC = $(bo),
  gC = $(ho),
  EC = $(go),
  _C = $(Eo),
  RC = $(_o),
  PC = $(Ro),
  wC = $(Po),
  CC = $(wo),
  OC = $(Co),
  SC = $(Oo),
  $C = $(So),
  TC = $($o),
  qC = $(To),
  AC = $(qo),
  xC = $(Ao),
  MC = $(xo),
  BC = $(Mo),
  IC = $(Bo),
  jC = $(Io),
  NC = $(jo),
  DC = $(No),
  kC = $(Do),
  LC = $(ko),
  FC = $(Lo),
  UC = $(Fo),
  VC = $(Uo);
function $(e) {
  return e && e.__esModule ? e : { default: e };
}
var HC = [
    ["doc-abstract", oC.default],
    ["doc-acknowledgments", lC.default],
    ["doc-afterword", iC.default],
    ["doc-appendix", uC.default],
    ["doc-backlink", sC.default],
    ["doc-biblioentry", cC.default],
    ["doc-bibliography", dC.default],
    ["doc-biblioref", fC.default],
    ["doc-chapter", pC.default],
    ["doc-colophon", vC.default],
    ["doc-conclusion", yC.default],
    ["doc-cover", mC.default],
    ["doc-credit", bC.default],
    ["doc-credits", hC.default],
    ["doc-dedication", gC.default],
    ["doc-endnote", EC.default],
    ["doc-endnotes", _C.default],
    ["doc-epigraph", RC.default],
    ["doc-epilogue", PC.default],
    ["doc-errata", wC.default],
    ["doc-example", CC.default],
    ["doc-footnote", OC.default],
    ["doc-foreword", SC.default],
    ["doc-glossary", $C.default],
    ["doc-glossref", TC.default],
    ["doc-index", qC.default],
    ["doc-introduction", AC.default],
    ["doc-noteref", xC.default],
    ["doc-notice", MC.default],
    ["doc-pagebreak", BC.default],
    ["doc-pagelist", IC.default],
    ["doc-part", jC.default],
    ["doc-preface", NC.default],
    ["doc-prologue", DC.default],
    ["doc-pullquote", kC.default],
    ["doc-qna", LC.default],
    ["doc-subtitle", FC.default],
    ["doc-tip", UC.default],
    ["doc-toc", VC.default],
  ],
  WC = HC;
ro.default = WC;
var Vo = {},
  Ho = {};
Object.defineProperty(Ho, "__esModule", { value: !0 });
Ho.default = void 0;
var zC = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { module: "GRAPHICS", concept: { name: "graphics-object" } },
      { module: "ARIA", concept: { name: "img" } },
      { module: "ARIA", concept: { name: "article" } },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "document"]],
  },
  KC = zC;
Ho.default = KC;
var Wo = {};
Object.defineProperty(Wo, "__esModule", { value: !0 });
Wo.default = void 0;
var GC = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [
      { module: "GRAPHICS", concept: { name: "graphics-document" } },
      { module: "ARIA", concept: { name: "group" } },
      { module: "ARIA", concept: { name: "img" } },
      { module: "GRAPHICS", concept: { name: "graphics-symbol" } },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"]],
  },
  YC = GC;
Wo.default = YC;
var zo = {};
Object.defineProperty(zo, "__esModule", { value: !0 });
zo.default = void 0;
var JC = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "img"]],
  },
  XC = JC;
zo.default = XC;
Object.defineProperty(Vo, "__esModule", { value: !0 });
Vo.default = void 0;
var QC = au(Ho),
  ZC = au(Wo),
  eO = au(zo);
function au(e) {
  return e && e.__esModule ? e : { default: e };
}
var tO = [
    ["graphics-document", QC.default],
    ["graphics-object", ZC.default],
    ["graphics-symbol", eO.default],
  ],
  rO = tO;
Vo.default = rO;
Object.defineProperty(Ot, "__esModule", { value: !0 });
Ot.default = void 0;
var nO = lr(vn),
  aO = lr(Sn),
  oO = lr(ro),
  lO = lr(Vo),
  iO = lr(et);
function lr(e) {
  return e && e.__esModule ? e : { default: e };
}
function uO(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function si(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = wf(e)) ||
      (t && e && typeof e.length == "number")
    ) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (s) {
          throw s;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0,
    l = !1,
    u;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var s = r.next();
      return (o = s.done), s;
    },
    e: function (s) {
      (l = !0), (u = s);
    },
    f: function () {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (l) throw u;
      }
    },
  };
}
function kt(e, t) {
  return dO(e) || cO(e, t) || wf(e, t) || sO();
}
function sO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wf(e, t) {
  if (e) {
    if (typeof e == "string") return gs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return gs(e, t);
  }
}
function gs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function cO(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n = [],
      a = !0,
      o = !1,
      l,
      u;
    try {
      for (
        r = r.call(e);
        !(a = (l = r.next()).done) && (n.push(l.value), !(t && n.length === t));
        a = !0
      );
    } catch (i) {
      (o = !0), (u = i);
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function dO(e) {
  if (Array.isArray(e)) return e;
}
var Te = [].concat(nO.default, aO.default, oO.default, lO.default);
Te.forEach(function (e) {
  var t = kt(e, 2),
    r = t[1],
    n = si(r.superClass),
    a;
  try {
    for (n.s(); !(a = n.n()).done; ) {
      var o = a.value,
        l = si(o),
        u;
      try {
        var i = function () {
          var d = u.value,
            f = Te.find(function (S) {
              var v = kt(S, 1),
                b = v[0];
              return b === d;
            });
          if (f)
            for (
              var p = f[1], m = 0, C = Object.keys(p.props);
              m < C.length;
              m++
            ) {
              var R = C[m];
              Object.prototype.hasOwnProperty.call(r.props, R) ||
                Object.assign(r.props, uO({}, R, p.props[R]));
            }
        };
        for (l.s(); !(u = l.n()).done; ) i();
      } catch (s) {
        l.e(s);
      } finally {
        l.f();
      }
    }
  } catch (s) {
    n.e(s);
  } finally {
    n.f();
  }
});
var ci = {
    entries: function () {
      return Te;
    },
    forEach: function (t) {
      var r =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
        n = si(Te),
        a;
      try {
        for (n.s(); !(a = n.n()).done; ) {
          var o = kt(a.value, 2),
            l = o[0],
            u = o[1];
          t.call(r, u, l, Te);
        }
      } catch (i) {
        n.e(i);
      } finally {
        n.f();
      }
    },
    get: function (t) {
      var r = Te.find(function (n) {
        return n[0] === t;
      });
      return r && r[1];
    },
    has: function (t) {
      return !!ci.get(t);
    },
    keys: function () {
      return Te.map(function (t) {
        var r = kt(t, 1),
          n = r[0];
        return n;
      });
    },
    values: function () {
      return Te.map(function (t) {
        var r = kt(t, 2),
          n = r[1];
        return n;
      });
    },
  },
  fO = (0, iO.default)(ci, ci.entries());
Ot.default = fO;
var Ko = {},
  Es = Object.prototype.toString,
  Cf = function (t) {
    var r = Es.call(t),
      n = r === "[object Arguments]";
    return (
      n ||
        (n =
          r !== "[object Array]" &&
          t !== null &&
          typeof t == "object" &&
          typeof t.length == "number" &&
          t.length >= 0 &&
          Es.call(t.callee) === "[object Function]"),
      n
    );
  },
  Pl,
  _s;
function pO() {
  if (_s) return Pl;
  _s = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty,
      r = Object.prototype.toString,
      n = Cf,
      a = Object.prototype.propertyIsEnumerable,
      o = !a.call({ toString: null }, "toString"),
      l = a.call(function () {}, "prototype"),
      u = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor",
      ],
      i = function (p) {
        var m = p.constructor;
        return m && m.prototype === p;
      },
      s = {
        $applicationCache: !0,
        $console: !0,
        $external: !0,
        $frame: !0,
        $frameElement: !0,
        $frames: !0,
        $innerHeight: !0,
        $innerWidth: !0,
        $onmozfullscreenchange: !0,
        $onmozfullscreenerror: !0,
        $outerHeight: !0,
        $outerWidth: !0,
        $pageXOffset: !0,
        $pageYOffset: !0,
        $parent: !0,
        $scrollLeft: !0,
        $scrollTop: !0,
        $scrollX: !0,
        $scrollY: !0,
        $self: !0,
        $webkitIndexedDB: !0,
        $webkitStorageInfo: !0,
        $window: !0,
      },
      d = (function () {
        if (typeof window > "u") return !1;
        for (var p in window)
          try {
            if (
              !s["$" + p] &&
              t.call(window, p) &&
              window[p] !== null &&
              typeof window[p] == "object"
            )
              try {
                i(window[p]);
              } catch {
                return !0;
              }
          } catch {
            return !0;
          }
        return !1;
      })(),
      f = function (p) {
        if (typeof window > "u" || !d) return i(p);
        try {
          return i(p);
        } catch {
          return !1;
        }
      };
    e = function (m) {
      var C = m !== null && typeof m == "object",
        R = r.call(m) === "[object Function]",
        S = n(m),
        v = C && r.call(m) === "[object String]",
        b = [];
      if (!C && !R && !S)
        throw new TypeError("Object.keys called on a non-object");
      var P = l && R;
      if (v && m.length > 0 && !t.call(m, 0))
        for (var w = 0; w < m.length; ++w) b.push(String(w));
      if (S && m.length > 0)
        for (var O = 0; O < m.length; ++O) b.push(String(O));
      else
        for (var y in m)
          !(P && y === "prototype") && t.call(m, y) && b.push(String(y));
      if (o)
        for (var h = f(m), E = 0; E < u.length; ++E)
          !(h && u[E] === "constructor") && t.call(m, u[E]) && b.push(u[E]);
      return b;
    };
  }
  return (Pl = e), Pl;
}
var vO = Array.prototype.slice,
  yO = Cf,
  Rs = Object.keys,
  Ar = Rs
    ? function (t) {
        return Rs(t);
      }
    : pO(),
  Ps = Object.keys;
Ar.shim = function () {
  if (Object.keys) {
    var t = (function () {
      var r = Object.keys(arguments);
      return r && r.length === arguments.length;
    })(1, 2);
    t ||
      (Object.keys = function (n) {
        return yO(n) ? Ps(vO.call(n)) : Ps(n);
      });
  } else Object.keys = Ar;
  return Object.keys || Ar;
};
var ou = Ar,
  Go = function () {
    if (
      typeof Symbol != "function" ||
      typeof Object.getOwnPropertySymbols != "function"
    )
      return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var t = {},
      r = Symbol("test"),
      n = Object(r);
    if (
      typeof r == "string" ||
      Object.prototype.toString.call(r) !== "[object Symbol]" ||
      Object.prototype.toString.call(n) !== "[object Symbol]"
    )
      return !1;
    var a = 42;
    t[r] = a;
    for (r in t) return !1;
    if (
      (typeof Object.keys == "function" && Object.keys(t).length !== 0) ||
      (typeof Object.getOwnPropertyNames == "function" &&
        Object.getOwnPropertyNames(t).length !== 0)
    )
      return !1;
    var o = Object.getOwnPropertySymbols(t);
    if (
      o.length !== 1 ||
      o[0] !== r ||
      !Object.prototype.propertyIsEnumerable.call(t, r)
    )
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var l = Object.getOwnPropertyDescriptor(t, r);
      if (l.value !== a || l.enumerable !== !0) return !1;
    }
    return !0;
  },
  ws = typeof Symbol < "u" && Symbol,
  mO = Go,
  lu = function () {
    return typeof ws != "function" ||
      typeof Symbol != "function" ||
      typeof ws("foo") != "symbol" ||
      typeof Symbol("bar") != "symbol"
      ? !1
      : mO();
  },
  Cs = { foo: {} },
  bO = Object,
  hO = function () {
    return (
      { __proto__: Cs }.foo === Cs.foo && !({ __proto__: null } instanceof bO)
    );
  },
  gO = "Function.prototype.bind called on incompatible ",
  wl = Array.prototype.slice,
  EO = Object.prototype.toString,
  _O = "[object Function]",
  RO = function (t) {
    var r = this;
    if (typeof r != "function" || EO.call(r) !== _O)
      throw new TypeError(gO + r);
    for (
      var n = wl.call(arguments, 1),
        a,
        o = function () {
          if (this instanceof a) {
            var d = r.apply(this, n.concat(wl.call(arguments)));
            return Object(d) === d ? d : this;
          } else return r.apply(t, n.concat(wl.call(arguments)));
        },
        l = Math.max(0, r.length - n.length),
        u = [],
        i = 0;
      i < l;
      i++
    )
      u.push("$" + i);
    if (
      ((a = Function(
        "binder",
        "return function (" +
          u.join(",") +
          "){ return binder.apply(this,arguments); }"
      )(o)),
      r.prototype)
    ) {
      var s = function () {};
      (s.prototype = r.prototype),
        (a.prototype = new s()),
        (s.prototype = null);
    }
    return a;
  },
  PO = RO,
  iu = Function.prototype.bind || PO,
  wO = iu,
  Of = wO.call(Function.call, Object.prototype.hasOwnProperty),
  T,
  Et = SyntaxError,
  Sf = Function,
  mt = TypeError,
  Cl = function (e) {
    try {
      return Sf('"use strict"; return (' + e + ").constructor;")();
    } catch {}
  },
  Ge = Object.getOwnPropertyDescriptor;
if (Ge)
  try {
    Ge({}, "");
  } catch {
    Ge = null;
  }
var Ol = function () {
    throw new mt();
  },
  CO = Ge
    ? (function () {
        try {
          return arguments.callee, Ol;
        } catch {
          try {
            return Ge(arguments, "callee").get;
          } catch {
            return Ol;
          }
        }
      })()
    : Ol,
  dt = lu(),
  OO = hO(),
  k =
    Object.getPrototypeOf ||
    (OO
      ? function (e) {
          return e.__proto__;
        }
      : null),
  pt = {},
  SO = typeof Uint8Array > "u" || !k ? T : k(Uint8Array),
  Ye = {
    "%AggregateError%": typeof AggregateError > "u" ? T : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? T : ArrayBuffer,
    "%ArrayIteratorPrototype%": dt && k ? k([][Symbol.iterator]()) : T,
    "%AsyncFromSyncIteratorPrototype%": T,
    "%AsyncFunction%": pt,
    "%AsyncGenerator%": pt,
    "%AsyncGeneratorFunction%": pt,
    "%AsyncIteratorPrototype%": pt,
    "%Atomics%": typeof Atomics > "u" ? T : Atomics,
    "%BigInt%": typeof BigInt > "u" ? T : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? T : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? T : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? T : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? T : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? T : Float64Array,
    "%FinalizationRegistry%":
      typeof FinalizationRegistry > "u" ? T : FinalizationRegistry,
    "%Function%": Sf,
    "%GeneratorFunction%": pt,
    "%Int8Array%": typeof Int8Array > "u" ? T : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? T : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? T : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": dt && k ? k(k([][Symbol.iterator]())) : T,
    "%JSON%": typeof JSON == "object" ? JSON : T,
    "%Map%": typeof Map > "u" ? T : Map,
    "%MapIteratorPrototype%":
      typeof Map > "u" || !dt || !k ? T : k(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? T : Promise,
    "%Proxy%": typeof Proxy > "u" ? T : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? T : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? T : Set,
    "%SetIteratorPrototype%":
      typeof Set > "u" || !dt || !k ? T : k(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%":
      typeof SharedArrayBuffer > "u" ? T : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": dt && k ? k(""[Symbol.iterator]()) : T,
    "%Symbol%": dt ? Symbol : T,
    "%SyntaxError%": Et,
    "%ThrowTypeError%": CO,
    "%TypedArray%": SO,
    "%TypeError%": mt,
    "%Uint8Array%": typeof Uint8Array > "u" ? T : Uint8Array,
    "%Uint8ClampedArray%":
      typeof Uint8ClampedArray > "u" ? T : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? T : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? T : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? T : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? T : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? T : WeakSet,
  };
if (k)
  try {
    null.error;
  } catch (e) {
    var $O = k(k(e));
    Ye["%Error.prototype%"] = $O;
  }
var TO = function e(t) {
    var r;
    if (t === "%AsyncFunction%") r = Cl("async function () {}");
    else if (t === "%GeneratorFunction%") r = Cl("function* () {}");
    else if (t === "%AsyncGeneratorFunction%") r = Cl("async function* () {}");
    else if (t === "%AsyncGenerator%") {
      var n = e("%AsyncGeneratorFunction%");
      n && (r = n.prototype);
    } else if (t === "%AsyncIteratorPrototype%") {
      var a = e("%AsyncGenerator%");
      a && k && (r = k(a.prototype));
    }
    return (Ye[t] = r), r;
  },
  Os = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": [
      "AsyncGeneratorFunction",
      "prototype",
      "prototype",
    ],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"],
  },
  ir = iu,
  Vr = Of,
  qO = ir.call(Function.call, Array.prototype.concat),
  AO = ir.call(Function.apply, Array.prototype.splice),
  Ss = ir.call(Function.call, String.prototype.replace),
  Hr = ir.call(Function.call, String.prototype.slice),
  xO = ir.call(Function.call, RegExp.prototype.exec),
  MO =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  BO = /\\(\\)?/g,
  IO = function (t) {
    var r = Hr(t, 0, 1),
      n = Hr(t, -1);
    if (r === "%" && n !== "%")
      throw new Et("invalid intrinsic syntax, expected closing `%`");
    if (n === "%" && r !== "%")
      throw new Et("invalid intrinsic syntax, expected opening `%`");
    var a = [];
    return (
      Ss(t, MO, function (o, l, u, i) {
        a[a.length] = u ? Ss(i, BO, "$1") : l || o;
      }),
      a
    );
  },
  jO = function (t, r) {
    var n = t,
      a;
    if ((Vr(Os, n) && ((a = Os[n]), (n = "%" + a[0] + "%")), Vr(Ye, n))) {
      var o = Ye[n];
      if ((o === pt && (o = TO(n)), typeof o > "u" && !r))
        throw new mt(
          "intrinsic " +
            t +
            " exists, but is not available. Please file an issue!"
        );
      return { alias: a, name: n, value: o };
    }
    throw new Et("intrinsic " + t + " does not exist!");
  },
  ve = function (t, r) {
    if (typeof t != "string" || t.length === 0)
      throw new mt("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r != "boolean")
      throw new mt('"allowMissing" argument must be a boolean');
    if (xO(/^%?[^%]*%?$/, t) === null)
      throw new Et(
        "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
      );
    var n = IO(t),
      a = n.length > 0 ? n[0] : "",
      o = jO("%" + a + "%", r),
      l = o.name,
      u = o.value,
      i = !1,
      s = o.alias;
    s && ((a = s[0]), AO(n, qO([0, 1], s)));
    for (var d = 1, f = !0; d < n.length; d += 1) {
      var p = n[d],
        m = Hr(p, 0, 1),
        C = Hr(p, -1);
      if (
        (m === '"' ||
          m === "'" ||
          m === "`" ||
          C === '"' ||
          C === "'" ||
          C === "`") &&
        m !== C
      )
        throw new Et("property names with quotes must have matching quotes");
      if (
        ((p === "constructor" || !f) && (i = !0),
        (a += "." + p),
        (l = "%" + a + "%"),
        Vr(Ye, l))
      )
        u = Ye[l];
      else if (u != null) {
        if (!(p in u)) {
          if (!r)
            throw new mt(
              "base intrinsic for " +
                t +
                " exists, but the property is not available."
            );
          return;
        }
        if (Ge && d + 1 >= n.length) {
          var R = Ge(u, p);
          (f = !!R),
            f && "get" in R && !("originalValue" in R.get)
              ? (u = R.get)
              : (u = u[p]);
        } else (f = Vr(u, p)), (u = u[p]);
        f && !i && (Ye[l] = u);
      }
    }
    return u;
  },
  NO = ve,
  di = NO("%Object.defineProperty%", !0),
  fi = function () {
    if (di)
      try {
        return di({}, "a", { value: 1 }), !0;
      } catch {
        return !1;
      }
    return !1;
  };
fi.hasArrayLengthDefineBug = function () {
  if (!fi()) return null;
  try {
    return di([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var DO = fi,
  kO = ou,
  LO = typeof Symbol == "function" && typeof Symbol("foo") == "symbol",
  FO = Object.prototype.toString,
  UO = Array.prototype.concat,
  $f = Object.defineProperty,
  VO = function (e) {
    return typeof e == "function" && FO.call(e) === "[object Function]";
  },
  HO = DO(),
  Tf = $f && HO,
  WO = function (e, t, r, n) {
    if (t in e) {
      if (n === !0) {
        if (e[t] === r) return;
      } else if (!VO(n) || !n()) return;
    }
    Tf
      ? $f(e, t, { configurable: !0, enumerable: !1, value: r, writable: !0 })
      : (e[t] = r);
  },
  qf = function (e, t) {
    var r = arguments.length > 2 ? arguments[2] : {},
      n = kO(t);
    LO && (n = UO.call(n, Object.getOwnPropertySymbols(t)));
    for (var a = 0; a < n.length; a += 1) WO(e, n[a], t[n[a]], r[n[a]]);
  };
qf.supportsDescriptors = !!Tf;
var tt = qf,
  Af = { exports: {} };
(function (e) {
  var t = iu,
    r = ve,
    n = r("%Function.prototype.apply%"),
    a = r("%Function.prototype.call%"),
    o = r("%Reflect.apply%", !0) || t.call(a, n),
    l = r("%Object.getOwnPropertyDescriptor%", !0),
    u = r("%Object.defineProperty%", !0),
    i = r("%Math.max%");
  if (u)
    try {
      u({}, "a", { value: 1 });
    } catch {
      u = null;
    }
  e.exports = function (f) {
    var p = o(t, a, arguments);
    if (l && u) {
      var m = l(p, "length");
      m.configurable &&
        u(p, "length", { value: 1 + i(0, f.length - (arguments.length - 1)) });
    }
    return p;
  };
  var s = function () {
    return o(t, n, arguments);
  };
  u ? u(e.exports, "apply", { value: s }) : (e.exports.apply = s);
})(Af);
var ur = Af.exports,
  xf = ve,
  Mf = ur,
  zO = Mf(xf("String.prototype.indexOf")),
  Z = function (t, r) {
    var n = xf(t, !!r);
    return typeof n == "function" && zO(t, ".prototype.") > -1 ? Mf(n) : n;
  },
  KO = ou,
  Bf = Go(),
  If = Z,
  $s = Object,
  GO = If("Array.prototype.push"),
  Ts = If("Object.prototype.propertyIsEnumerable"),
  YO = Bf ? Object.getOwnPropertySymbols : null,
  jf = function (t, r) {
    if (t == null) throw new TypeError("target must be an object");
    var n = $s(t);
    if (arguments.length === 1) return n;
    for (var a = 1; a < arguments.length; ++a) {
      var o = $s(arguments[a]),
        l = KO(o),
        u = Bf && (Object.getOwnPropertySymbols || YO);
      if (u)
        for (var i = u(o), s = 0; s < i.length; ++s) {
          var d = i[s];
          Ts(o, d) && GO(l, d);
        }
      for (var f = 0; f < l.length; ++f) {
        var p = l[f];
        if (Ts(o, p)) {
          var m = o[p];
          n[p] = m;
        }
      }
    }
    return n;
  },
  Sl = jf,
  JO = function () {
    if (!Object.assign) return !1;
    for (
      var e = "abcdefghijklmnopqrst", t = e.split(""), r = {}, n = 0;
      n < t.length;
      ++n
    )
      r[t[n]] = t[n];
    var a = Object.assign({}, r),
      o = "";
    for (var l in a) o += l;
    return e !== o;
  },
  XO = function () {
    if (!Object.assign || !Object.preventExtensions) return !1;
    var e = Object.preventExtensions({ 1: 2 });
    try {
      Object.assign(e, "xy");
    } catch {
      return e[1] === "y";
    }
    return !1;
  },
  Nf = function () {
    return !Object.assign || JO() || XO() ? Sl : Object.assign;
  },
  QO = tt,
  ZO = Nf,
  e0 = function () {
    var t = ZO();
    return (
      QO(
        Object,
        { assign: t },
        {
          assign: function () {
            return Object.assign !== t;
          },
        }
      ),
      t
    );
  },
  t0 = tt,
  r0 = ur,
  n0 = jf,
  Df = Nf,
  a0 = e0,
  o0 = r0.apply(Df()),
  kf = function (t, r) {
    return o0(Object, arguments);
  };
t0(kf, { getPolyfill: Df, implementation: n0, shim: a0 });
var l0 = kf,
  Lf = { exports: {} },
  Kt = function () {
    return typeof function () {}.name == "string";
  },
  Lt = Object.getOwnPropertyDescriptor;
if (Lt)
  try {
    Lt([], "length");
  } catch {
    Lt = null;
  }
Kt.functionsHaveConfigurableNames = function () {
  if (!Kt() || !Lt) return !1;
  var t = Lt(function () {}, "name");
  return !!t && !!t.configurable;
};
var i0 = Function.prototype.bind;
Kt.boundFunctionsHaveNames = function () {
  return Kt() && typeof i0 == "function" && function () {}.bind().name !== "";
};
var u0 = Kt;
(function (e) {
  var t = u0.functionsHaveConfigurableNames(),
    r = Object,
    n = TypeError;
  (e.exports = function () {
    if (this != null && this !== r(this))
      throw new n("RegExp.prototype.flags getter called on non-object");
    var o = "";
    return (
      this.hasIndices && (o += "d"),
      this.global && (o += "g"),
      this.ignoreCase && (o += "i"),
      this.multiline && (o += "m"),
      this.dotAll && (o += "s"),
      this.unicode && (o += "u"),
      this.unicodeSets && (o += "v"),
      this.sticky && (o += "y"),
      o
    );
  }),
    t &&
      Object.defineProperty &&
      Object.defineProperty(e.exports, "name", { value: "get flags" });
})(Lf);
var Ff = Lf.exports,
  s0 = Ff,
  c0 = tt.supportsDescriptors,
  d0 = Object.getOwnPropertyDescriptor,
  Uf = function () {
    if (c0 && /a/gim.flags === "gim") {
      var t = d0(RegExp.prototype, "flags");
      if (
        t &&
        typeof t.get == "function" &&
        typeof RegExp.prototype.dotAll == "boolean" &&
        typeof RegExp.prototype.hasIndices == "boolean"
      ) {
        var r = "",
          n = {};
        if (
          (Object.defineProperty(n, "hasIndices", {
            get: function () {
              r += "d";
            },
          }),
          Object.defineProperty(n, "sticky", {
            get: function () {
              r += "y";
            },
          }),
          r === "dy")
        )
          return t.get;
      }
    }
    return s0;
  },
  f0 = tt.supportsDescriptors,
  p0 = Uf,
  v0 = Object.getOwnPropertyDescriptor,
  y0 = Object.defineProperty,
  m0 = TypeError,
  qs = Object.getPrototypeOf,
  b0 = /a/,
  h0 = function () {
    if (!f0 || !qs)
      throw new m0(
        "RegExp.prototype.flags requires a true ES5 environment that supports property descriptors"
      );
    var t = p0(),
      r = qs(b0),
      n = v0(r, "flags");
    return (
      (!n || n.get !== t) &&
        y0(r, "flags", { configurable: !0, enumerable: !1, get: t }),
      t
    );
  },
  g0 = tt,
  E0 = ur,
  _0 = Ff,
  Vf = Uf,
  R0 = h0,
  Hf = E0(Vf());
g0(Hf, { getPolyfill: Vf, implementation: _0, shim: R0 });
var P0 = Hf,
  xr = { exports: {} },
  w0 = Go,
  Ve = function () {
    return w0() && !!Symbol.toStringTag;
  },
  C0 = Ve(),
  O0 = Z,
  pi = O0("Object.prototype.toString"),
  Yo = function (t) {
    return C0 && t && typeof t == "object" && Symbol.toStringTag in t
      ? !1
      : pi(t) === "[object Arguments]";
  },
  Wf = function (t) {
    return Yo(t)
      ? !0
      : t !== null &&
          typeof t == "object" &&
          typeof t.length == "number" &&
          t.length >= 0 &&
          pi(t) !== "[object Array]" &&
          pi(t.callee) === "[object Function]";
  },
  S0 = (function () {
    return Yo(arguments);
  })();
Yo.isLegacyArguments = Wf;
var zf = S0 ? Yo : Wf;
const $0 = {},
  T0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  q0 = Ed(T0);
var uu = typeof Map == "function" && Map.prototype,
  $l =
    Object.getOwnPropertyDescriptor && uu
      ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
      : null,
  Wr = uu && $l && typeof $l.get == "function" ? $l.get : null,
  As = uu && Map.prototype.forEach,
  su = typeof Set == "function" && Set.prototype,
  Tl =
    Object.getOwnPropertyDescriptor && su
      ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
      : null,
  zr = su && Tl && typeof Tl.get == "function" ? Tl.get : null,
  xs = su && Set.prototype.forEach,
  A0 = typeof WeakMap == "function" && WeakMap.prototype,
  Ft = A0 ? WeakMap.prototype.has : null,
  x0 = typeof WeakSet == "function" && WeakSet.prototype,
  Ut = x0 ? WeakSet.prototype.has : null,
  M0 = typeof WeakRef == "function" && WeakRef.prototype,
  Ms = M0 ? WeakRef.prototype.deref : null,
  B0 = Boolean.prototype.valueOf,
  I0 = Object.prototype.toString,
  j0 = Function.prototype.toString,
  N0 = String.prototype.match,
  cu = String.prototype.slice,
  Me = String.prototype.replace,
  D0 = String.prototype.toUpperCase,
  Bs = String.prototype.toLowerCase,
  Kf = RegExp.prototype.test,
  Is = Array.prototype.concat,
  fe = Array.prototype.join,
  k0 = Array.prototype.slice,
  js = Math.floor,
  vi = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
  ql = Object.getOwnPropertySymbols,
  yi =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? Symbol.prototype.toString
      : null,
  _t = typeof Symbol == "function" && typeof Symbol.iterator == "object",
  W =
    typeof Symbol == "function" &&
    Symbol.toStringTag &&
    (typeof Symbol.toStringTag === _t || "symbol")
      ? Symbol.toStringTag
      : null,
  Gf = Object.prototype.propertyIsEnumerable,
  Ns =
    (typeof Reflect == "function"
      ? Reflect.getPrototypeOf
      : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (e) {
          return e.__proto__;
        }
      : null);
function Ds(e, t) {
  if (
    e === 1 / 0 ||
    e === -1 / 0 ||
    e !== e ||
    (e && e > -1e3 && e < 1e3) ||
    Kf.call(/e/, t)
  )
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -js(-e) : js(e);
    if (n !== e) {
      var a = String(n),
        o = cu.call(t, a.length + 1);
      return (
        Me.call(a, r, "$&_") +
        "." +
        Me.call(Me.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
      );
    }
  }
  return Me.call(t, r, "$&_");
}
var mi = q0,
  ks = mi.custom,
  Ls = Jf(ks) ? ks : null,
  L0 = function e(t, r, n, a) {
    var o = r || {};
    if (
      qe(o, "quoteStyle") &&
      o.quoteStyle !== "single" &&
      o.quoteStyle !== "double"
    )
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      qe(o, "maxStringLength") &&
      (typeof o.maxStringLength == "number"
        ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
        : o.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      );
    var l = qe(o, "customInspect") ? o.customInspect : !0;
    if (typeof l != "boolean" && l !== "symbol")
      throw new TypeError(
        "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
      );
    if (
      qe(o, "indent") &&
      o.indent !== null &&
      o.indent !== "	" &&
      !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
    )
      throw new TypeError(
        'option "indent" must be "\\t", an integer > 0, or `null`'
      );
    if (qe(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
      throw new TypeError(
        'option "numericSeparator", if provided, must be `true` or `false`'
      );
    var u = o.numericSeparator;
    if (typeof t > "u") return "undefined";
    if (t === null) return "null";
    if (typeof t == "boolean") return t ? "true" : "false";
    if (typeof t == "string") return Qf(t, o);
    if (typeof t == "number") {
      if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
      var i = String(t);
      return u ? Ds(t, i) : i;
    }
    if (typeof t == "bigint") {
      var s = String(t) + "n";
      return u ? Ds(t, s) : s;
    }
    var d = typeof o.depth > "u" ? 5 : o.depth;
    if ((typeof n > "u" && (n = 0), n >= d && d > 0 && typeof t == "object"))
      return bi(t) ? "[Array]" : "[Object]";
    var f = aS(o, n);
    if (typeof a > "u") a = [];
    else if (Xf(a, t) >= 0) return "[Circular]";
    function p(K, ce, it) {
      if ((ce && ((a = k0.call(a)), a.push(ce)), it)) {
        var xt = { depth: o.depth };
        return (
          qe(o, "quoteStyle") && (xt.quoteStyle = o.quoteStyle),
          e(K, xt, n + 1, a)
        );
      }
      return e(K, o, n + 1, a);
    }
    if (typeof t == "function" && !Fs(t)) {
      var m = Y0(t),
        C = _r(t, p);
      return (
        "[Function" +
        (m ? ": " + m : " (anonymous)") +
        "]" +
        (C.length > 0 ? " { " + fe.call(C, ", ") + " }" : "")
      );
    }
    if (Jf(t)) {
      var R = _t
        ? Me.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
        : yi.call(t);
      return typeof t == "object" && !_t ? Bt(R) : R;
    }
    if (tS(t)) {
      for (
        var S = "<" + Bs.call(String(t.nodeName)),
          v = t.attributes || [],
          b = 0;
        b < v.length;
        b++
      )
        S += " " + v[b].name + "=" + Yf(F0(v[b].value), "double", o);
      return (
        (S += ">"),
        t.childNodes && t.childNodes.length && (S += "..."),
        (S += "</" + Bs.call(String(t.nodeName)) + ">"),
        S
      );
    }
    if (bi(t)) {
      if (t.length === 0) return "[]";
      var P = _r(t, p);
      return f && !nS(P)
        ? "[" + hi(P, f) + "]"
        : "[ " + fe.call(P, ", ") + " ]";
    }
    if (V0(t)) {
      var w = _r(t, p);
      return !("cause" in Error.prototype) &&
        "cause" in t &&
        !Gf.call(t, "cause")
        ? "{ [" +
            String(t) +
            "] " +
            fe.call(Is.call("[cause]: " + p(t.cause), w), ", ") +
            " }"
        : w.length === 0
        ? "[" + String(t) + "]"
        : "{ [" + String(t) + "] " + fe.call(w, ", ") + " }";
    }
    if (typeof t == "object" && l) {
      if (Ls && typeof t[Ls] == "function" && mi)
        return mi(t, { depth: d - n });
      if (l !== "symbol" && typeof t.inspect == "function") return t.inspect();
    }
    if (J0(t)) {
      var O = [];
      return (
        As &&
          As.call(t, function (K, ce) {
            O.push(p(ce, t, !0) + " => " + p(K, t));
          }),
        Us("Map", Wr.call(t), O, f)
      );
    }
    if (Z0(t)) {
      var y = [];
      return (
        xs &&
          xs.call(t, function (K) {
            y.push(p(K, t));
          }),
        Us("Set", zr.call(t), y, f)
      );
    }
    if (X0(t)) return Al("WeakMap");
    if (eS(t)) return Al("WeakSet");
    if (Q0(t)) return Al("WeakRef");
    if (W0(t)) return Bt(p(Number(t)));
    if (K0(t)) return Bt(p(vi.call(t)));
    if (z0(t)) return Bt(B0.call(t));
    if (H0(t)) return Bt(p(String(t)));
    if (!U0(t) && !Fs(t)) {
      var h = _r(t, p),
        E = Ns
          ? Ns(t) === Object.prototype
          : t instanceof Object || t.constructor === Object,
        I = t instanceof Object ? "" : "null prototype",
        c =
          !E && W && Object(t) === t && W in t
            ? cu.call(He(t), 8, -1)
            : I
            ? "Object"
            : "",
        z =
          E || typeof t.constructor != "function"
            ? ""
            : t.constructor.name
            ? t.constructor.name + " "
            : "",
        se =
          z +
          (c || I
            ? "[" + fe.call(Is.call([], c || [], I || []), ": ") + "] "
            : "");
      return h.length === 0
        ? se + "{}"
        : f
        ? se + "{" + hi(h, f) + "}"
        : se + "{ " + fe.call(h, ", ") + " }";
    }
    return String(t);
  };
function Yf(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function F0(e) {
  return Me.call(String(e), /"/g, "&quot;");
}
function bi(e) {
  return (
    He(e) === "[object Array]" && (!W || !(typeof e == "object" && W in e))
  );
}
function U0(e) {
  return He(e) === "[object Date]" && (!W || !(typeof e == "object" && W in e));
}
function Fs(e) {
  return (
    He(e) === "[object RegExp]" && (!W || !(typeof e == "object" && W in e))
  );
}
function V0(e) {
  return (
    He(e) === "[object Error]" && (!W || !(typeof e == "object" && W in e))
  );
}
function H0(e) {
  return (
    He(e) === "[object String]" && (!W || !(typeof e == "object" && W in e))
  );
}
function W0(e) {
  return (
    He(e) === "[object Number]" && (!W || !(typeof e == "object" && W in e))
  );
}
function z0(e) {
  return (
    He(e) === "[object Boolean]" && (!W || !(typeof e == "object" && W in e))
  );
}
function Jf(e) {
  if (_t) return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol") return !0;
  if (!e || typeof e != "object" || !yi) return !1;
  try {
    return yi.call(e), !0;
  } catch {}
  return !1;
}
function K0(e) {
  if (!e || typeof e != "object" || !vi) return !1;
  try {
    return vi.call(e), !0;
  } catch {}
  return !1;
}
var G0 =
  Object.prototype.hasOwnProperty ||
  function (e) {
    return e in this;
  };
function qe(e, t) {
  return G0.call(e, t);
}
function He(e) {
  return I0.call(e);
}
function Y0(e) {
  if (e.name) return e.name;
  var t = N0.call(j0.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Xf(e, t) {
  if (e.indexOf) return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
  return -1;
}
function J0(e) {
  if (!Wr || !e || typeof e != "object") return !1;
  try {
    Wr.call(e);
    try {
      zr.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {}
  return !1;
}
function X0(e) {
  if (!Ft || !e || typeof e != "object") return !1;
  try {
    Ft.call(e, Ft);
    try {
      Ut.call(e, Ut);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {}
  return !1;
}
function Q0(e) {
  if (!Ms || !e || typeof e != "object") return !1;
  try {
    return Ms.call(e), !0;
  } catch {}
  return !1;
}
function Z0(e) {
  if (!zr || !e || typeof e != "object") return !1;
  try {
    zr.call(e);
    try {
      Wr.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {}
  return !1;
}
function eS(e) {
  if (!Ut || !e || typeof e != "object") return !1;
  try {
    Ut.call(e, Ut);
    try {
      Ft.call(e, Ft);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {}
  return !1;
}
function tS(e) {
  return !e || typeof e != "object"
    ? !1
    : typeof HTMLElement < "u" && e instanceof HTMLElement
    ? !0
    : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Qf(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength,
      n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Qf(cu.call(e, 0, t.maxStringLength), t) + n;
  }
  var a = Me.call(Me.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, rS);
  return Yf(a, "single", t);
}
function rS(e) {
  var t = e.charCodeAt(0),
    r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + D0.call(t.toString(16));
}
function Bt(e) {
  return "Object(" + e + ")";
}
function Al(e) {
  return e + " { ? }";
}
function Us(e, t, r, n) {
  var a = n ? hi(r, n) : fe.call(r, ", ");
  return e + " (" + t + ") {" + a + "}";
}
function nS(e) {
  for (var t = 0; t < e.length; t++)
    if (
      Xf(
        e[t],
        `
`
      ) >= 0
    )
      return !1;
  return !0;
}
function aS(e, t) {
  var r;
  if (e.indent === "	") r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = fe.call(Array(e.indent + 1), " ");
  else return null;
  return { base: r, prev: fe.call(Array(t + 1), r) };
}
function hi(e, t) {
  if (e.length === 0) return "";
  var r =
    `
` +
    t.prev +
    t.base;
  return (
    r +
    fe.call(e, "," + r) +
    `
` +
    t.prev
  );
}
function _r(e, t) {
  var r = bi(e),
    n = [];
  if (r) {
    n.length = e.length;
    for (var a = 0; a < e.length; a++) n[a] = qe(e, a) ? t(e[a], e) : "";
  }
  var o = typeof ql == "function" ? ql(e) : [],
    l;
  if (_t) {
    l = {};
    for (var u = 0; u < o.length; u++) l["$" + o[u]] = o[u];
  }
  for (var i in e)
    qe(e, i) &&
      ((r && String(Number(i)) === i && i < e.length) ||
        (_t && l["$" + i] instanceof Symbol) ||
        (Kf.call(/[^\w$]/, i)
          ? n.push(t(i, e) + ": " + t(e[i], e))
          : n.push(i + ": " + t(e[i], e))));
  if (typeof ql == "function")
    for (var s = 0; s < o.length; s++)
      Gf.call(e, o[s]) && n.push("[" + t(o[s]) + "]: " + t(e[o[s]], e));
  return n;
}
var du = ve,
  St = Z,
  oS = L0,
  lS = du("%TypeError%"),
  Rr = du("%WeakMap%", !0),
  Pr = du("%Map%", !0),
  iS = St("WeakMap.prototype.get", !0),
  uS = St("WeakMap.prototype.set", !0),
  sS = St("WeakMap.prototype.has", !0),
  cS = St("Map.prototype.get", !0),
  dS = St("Map.prototype.set", !0),
  fS = St("Map.prototype.has", !0),
  fu = function (e, t) {
    for (var r = e, n; (n = r.next) !== null; r = n)
      if (n.key === t)
        return (r.next = n.next), (n.next = e.next), (e.next = n), n;
  },
  pS = function (e, t) {
    var r = fu(e, t);
    return r && r.value;
  },
  vS = function (e, t, r) {
    var n = fu(e, t);
    n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r });
  },
  yS = function (e, t) {
    return !!fu(e, t);
  },
  Zf = function () {
    var t,
      r,
      n,
      a = {
        assert: function (o) {
          if (!a.has(o)) throw new lS("Side channel does not contain " + oS(o));
        },
        get: function (o) {
          if (Rr && o && (typeof o == "object" || typeof o == "function")) {
            if (t) return iS(t, o);
          } else if (Pr) {
            if (r) return cS(r, o);
          } else if (n) return pS(n, o);
        },
        has: function (o) {
          if (Rr && o && (typeof o == "object" || typeof o == "function")) {
            if (t) return sS(t, o);
          } else if (Pr) {
            if (r) return fS(r, o);
          } else if (n) return yS(n, o);
          return !1;
        },
        set: function (o, l) {
          Rr && o && (typeof o == "object" || typeof o == "function")
            ? (t || (t = new Rr()), uS(t, o, l))
            : Pr
            ? (r || (r = new Pr()), dS(r, o, l))
            : (n || (n = { key: {}, next: null }), vS(n, o, l));
        },
      };
    return a;
  },
  mS = ve,
  bS = Of,
  It = Zf(),
  me = mS("%TypeError%"),
  pu = {
    assert: function (e, t) {
      if (!e || (typeof e != "object" && typeof e != "function"))
        throw new me("`O` is not an object");
      if (typeof t != "string") throw new me("`slot` must be a string");
      if ((It.assert(e), !pu.has(e, t)))
        throw new me("`" + t + "` is not present on `O`");
    },
    get: function (e, t) {
      if (!e || (typeof e != "object" && typeof e != "function"))
        throw new me("`O` is not an object");
      if (typeof t != "string") throw new me("`slot` must be a string");
      var r = It.get(e);
      return r && r["$" + t];
    },
    has: function (e, t) {
      if (!e || (typeof e != "object" && typeof e != "function"))
        throw new me("`O` is not an object");
      if (typeof t != "string") throw new me("`slot` must be a string");
      var r = It.get(e);
      return !!r && bS(r, "$" + t);
    },
    set: function (e, t, r) {
      if (!e || (typeof e != "object" && typeof e != "function"))
        throw new me("`O` is not an object");
      if (typeof t != "string") throw new me("`slot` must be a string");
      var n = It.get(e);
      n || ((n = {}), It.set(e, n)), (n["$" + t] = r);
    },
  };
Object.freeze && Object.freeze(pu);
var hS = pu,
  jt = hS,
  gS = SyntaxError,
  Vs = typeof StopIteration == "object" ? StopIteration : null,
  ES = function (t) {
    if (!Vs) throw new gS("this environment lacks StopIteration");
    jt.set(t, "[[Done]]", !1);
    var r = {
      next: function () {
        var a = jt.get(this, "[[Iterator]]"),
          o = jt.get(a, "[[Done]]");
        try {
          return { done: o, value: o ? void 0 : a.next() };
        } catch (l) {
          if ((jt.set(a, "[[Done]]", !0), l !== Vs)) throw l;
          return { done: !0, value: void 0 };
        }
      },
    };
    return jt.set(r, "[[Iterator]]", t), r;
  },
  _S = {}.toString,
  ep =
    Array.isArray ||
    function (e) {
      return _S.call(e) == "[object Array]";
    },
  RS = String.prototype.valueOf,
  PS = function (t) {
    try {
      return RS.call(t), !0;
    } catch {
      return !1;
    }
  },
  wS = Object.prototype.toString,
  CS = "[object String]",
  OS = Ve(),
  tp = function (t) {
    return typeof t == "string"
      ? !0
      : typeof t != "object"
      ? !1
      : OS
      ? PS(t)
      : wS.call(t) === CS;
  },
  vu = typeof Map == "function" && Map.prototype ? Map : null,
  SS = typeof Set == "function" && Set.prototype ? Set : null,
  Kr;
vu ||
  (Kr = function (t) {
    return !1;
  });
var rp = vu ? Map.prototype.has : null,
  Hs = SS ? Set.prototype.has : null;
!Kr &&
  !rp &&
  (Kr = function (t) {
    return !1;
  });
var np =
    Kr ||
    function (t) {
      if (!t || typeof t != "object") return !1;
      try {
        if ((rp.call(t), Hs))
          try {
            Hs.call(t);
          } catch {
            return !0;
          }
        return t instanceof vu;
      } catch {}
      return !1;
    },
  $S = typeof Map == "function" && Map.prototype ? Map : null,
  yu = typeof Set == "function" && Set.prototype ? Set : null,
  Gr;
yu ||
  (Gr = function (t) {
    return !1;
  });
var Ws = $S ? Map.prototype.has : null,
  ap = yu ? Set.prototype.has : null;
!Gr &&
  !ap &&
  (Gr = function (t) {
    return !1;
  });
var op =
    Gr ||
    function (t) {
      if (!t || typeof t != "object") return !1;
      try {
        if ((ap.call(t), Ws))
          try {
            Ws.call(t);
          } catch {
            return !0;
          }
        return t instanceof yu;
      } catch {}
      return !1;
    },
  zs = zf,
  Ks = ES;
if (lu() || Go()) {
  var xl = Symbol.iterator;
  xr.exports = function (t) {
    if (t != null && typeof t[xl] < "u") return t[xl]();
    if (zs(t)) return Array.prototype[xl].call(t);
  };
} else {
  var TS = ep,
    qS = tp,
    Gs = ve,
    AS = Gs("%Map%", !0),
    xS = Gs("%Set%", !0),
    ne = Z,
    Ys = ne("Array.prototype.push"),
    Js = ne("String.prototype.charCodeAt"),
    MS = ne("String.prototype.slice"),
    BS = function (t, r) {
      var n = t.length;
      if (r + 1 >= n) return r + 1;
      var a = Js(t, r);
      if (a < 55296 || a > 56319) return r + 1;
      var o = Js(t, r + 1);
      return o < 56320 || o > 57343 ? r + 1 : r + 2;
    },
    Ml = function (t) {
      var r = 0;
      return {
        next: function () {
          var a = r >= t.length,
            o;
          return a || ((o = t[r]), (r += 1)), { done: a, value: o };
        },
      };
    },
    Xs = function (t, r) {
      if (TS(t) || zs(t)) return Ml(t);
      if (qS(t)) {
        var n = 0;
        return {
          next: function () {
            var o = BS(t, n),
              l = MS(t, n, o);
            return (n = o), { done: o > t.length, value: l };
          },
        };
      }
      if (r && typeof t["_es6-shim iterator_"] < "u")
        return t["_es6-shim iterator_"]();
    };
  if (!AS && !xS)
    xr.exports = function (t) {
      if (t != null) return Xs(t, !0);
    };
  else {
    var IS = np,
      jS = op,
      Qs = ne("Map.prototype.forEach", !0),
      Zs = ne("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var ec = ne("Map.prototype.iterator", !0),
        tc = ne("Set.prototype.iterator", !0);
    var rc =
        ne("Map.prototype.@@iterator", !0) ||
        ne("Map.prototype._es6-shim iterator_", !0),
      nc =
        ne("Set.prototype.@@iterator", !0) ||
        ne("Set.prototype._es6-shim iterator_", !0),
      NS = function (t) {
        if (IS(t)) {
          if (ec) return Ks(ec(t));
          if (rc) return rc(t);
          if (Qs) {
            var r = [];
            return (
              Qs(t, function (a, o) {
                Ys(r, [o, a]);
              }),
              Ml(r)
            );
          }
        }
        if (jS(t)) {
          if (tc) return Ks(tc(t));
          if (nc) return nc(t);
          if (Zs) {
            var n = [];
            return (
              Zs(t, function (a) {
                Ys(n, a);
              }),
              Ml(n)
            );
          }
        }
      };
    xr.exports = function (t) {
      return NS(t) || Xs(t);
    };
  }
}
var DS = xr.exports,
  ac = function (e) {
    return e !== e;
  },
  lp = function (t, r) {
    return t === 0 && r === 0
      ? 1 / t === 1 / r
      : !!(t === r || (ac(t) && ac(r)));
  },
  kS = lp,
  ip = function () {
    return typeof Object.is == "function" ? Object.is : kS;
  },
  LS = ip,
  FS = tt,
  US = function () {
    var t = LS();
    return (
      FS(
        Object,
        { is: t },
        {
          is: function () {
            return Object.is !== t;
          },
        }
      ),
      t
    );
  },
  VS = tt,
  HS = ur,
  WS = lp,
  up = ip,
  zS = US,
  sp = HS(up(), Object);
VS(sp, { getPolyfill: up, implementation: WS, shim: zS });
var KS = sp,
  cp = Function.prototype.toString,
  yt = typeof Reflect == "object" && Reflect !== null && Reflect.apply,
  gi,
  Mr;
if (typeof yt == "function" && typeof Object.defineProperty == "function")
  try {
    (gi = Object.defineProperty({}, "length", {
      get: function () {
        throw Mr;
      },
    })),
      (Mr = {}),
      yt(
        function () {
          throw 42;
        },
        null,
        gi
      );
  } catch (e) {
    e !== Mr && (yt = null);
  }
else yt = null;
var GS = /^\s*class\b/,
  Ei = function (t) {
    try {
      var r = cp.call(t);
      return GS.test(r);
    } catch {
      return !1;
    }
  },
  Bl = function (t) {
    try {
      return Ei(t) ? !1 : (cp.call(t), !0);
    } catch {
      return !1;
    }
  },
  Br = Object.prototype.toString,
  YS = "[object Object]",
  JS = "[object Function]",
  XS = "[object GeneratorFunction]",
  QS = "[object HTMLAllCollection]",
  ZS = "[object HTML document.all class]",
  e$ = "[object HTMLCollection]",
  t$ = typeof Symbol == "function" && !!Symbol.toStringTag,
  r$ = !(0 in [,]),
  _i = function () {
    return !1;
  };
if (typeof document == "object") {
  var n$ = document.all;
  Br.call(n$) === Br.call(document.all) &&
    (_i = function (t) {
      if ((r$ || !t) && (typeof t > "u" || typeof t == "object"))
        try {
          var r = Br.call(t);
          return (
            (r === QS || r === ZS || r === e$ || r === YS) && t("") == null
          );
        } catch {}
      return !1;
    });
}
var a$ = yt
    ? function (t) {
        if (_i(t)) return !0;
        if (!t || (typeof t != "function" && typeof t != "object")) return !1;
        try {
          yt(t, null, gi);
        } catch (r) {
          if (r !== Mr) return !1;
        }
        return !Ei(t) && Bl(t);
      }
    : function (t) {
        if (_i(t)) return !0;
        if (!t || (typeof t != "function" && typeof t != "object")) return !1;
        if (t$) return Bl(t);
        if (Ei(t)) return !1;
        var r = Br.call(t);
        return r !== JS && r !== XS && !/^\[object HTML/.test(r) ? !1 : Bl(t);
      },
  o$ = a$,
  l$ = Object.prototype.toString,
  dp = Object.prototype.hasOwnProperty,
  i$ = function (t, r, n) {
    for (var a = 0, o = t.length; a < o; a++)
      dp.call(t, a) && (n == null ? r(t[a], a, t) : r.call(n, t[a], a, t));
  },
  u$ = function (t, r, n) {
    for (var a = 0, o = t.length; a < o; a++)
      n == null ? r(t.charAt(a), a, t) : r.call(n, t.charAt(a), a, t);
  },
  s$ = function (t, r, n) {
    for (var a in t)
      dp.call(t, a) && (n == null ? r(t[a], a, t) : r.call(n, t[a], a, t));
  },
  c$ = function (t, r, n) {
    if (!o$(r)) throw new TypeError("iterator must be a function");
    var a;
    arguments.length >= 3 && (a = n),
      l$.call(t) === "[object Array]"
        ? i$(t, r, a)
        : typeof t == "string"
        ? u$(t, r, a)
        : s$(t, r, a);
  },
  fp = c$,
  Il = [
    "BigInt64Array",
    "BigUint64Array",
    "Float32Array",
    "Float64Array",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "Uint16Array",
    "Uint32Array",
    "Uint8Array",
    "Uint8ClampedArray",
  ],
  d$ = typeof globalThis > "u" ? Xi : globalThis,
  pp = function () {
    for (var t = [], r = 0; r < Il.length; r++)
      typeof d$[Il[r]] == "function" && (t[t.length] = Il[r]);
    return t;
  },
  f$ = ve,
  Ir = f$("%Object.getOwnPropertyDescriptor%", !0);
if (Ir)
  try {
    Ir([], "length");
  } catch {
    Ir = null;
  }
var vp = Ir,
  yp = fp,
  p$ = pp,
  mu = Z,
  v$ = mu("Object.prototype.toString"),
  mp = Ve(),
  jr = vp,
  y$ = typeof globalThis > "u" ? Xi : globalThis,
  bp = p$(),
  m$ =
    mu("Array.prototype.indexOf", !0) ||
    function (t, r) {
      for (var n = 0; n < t.length; n += 1) if (t[n] === r) return n;
      return -1;
    },
  b$ = mu("String.prototype.slice"),
  hp = {},
  jl = Object.getPrototypeOf;
mp &&
  jr &&
  jl &&
  yp(bp, function (e) {
    var t = new y$[e]();
    if (Symbol.toStringTag in t) {
      var r = jl(t),
        n = jr(r, Symbol.toStringTag);
      if (!n) {
        var a = jl(r);
        n = jr(a, Symbol.toStringTag);
      }
      hp[e] = n.get;
    }
  });
var h$ = function (t) {
    var r = !1;
    return (
      yp(hp, function (n, a) {
        if (!r)
          try {
            r = n.call(t) === a;
          } catch {}
      }),
      r
    );
  },
  gp = function (t) {
    if (!t || typeof t != "object") return !1;
    if (!mp || !(Symbol.toStringTag in t)) {
      var r = b$(v$(t), 8, -1);
      return m$(bp, r) > -1;
    }
    return jr ? h$(t) : !1;
  },
  g$ = ur,
  E$ = Z,
  Ep = ve,
  _$ = gp,
  oc = Ep("ArrayBuffer", !0),
  lc = Ep("Float32Array", !0),
  Nr = E$("ArrayBuffer.prototype.byteLength", !0),
  ic = oc && !Nr && new oc().slice,
  uc = ic && g$(ic),
  _p =
    Nr || uc
      ? function (t) {
          if (!t || typeof t != "object") return !1;
          try {
            return Nr ? Nr(t) : uc(t, 0), !0;
          } catch {
            return !1;
          }
        }
      : lc
      ? function (t) {
          try {
            return new lc(t).buffer === t && !_$(t);
          } catch (r) {
            return typeof t == "object" && r.name === "RangeError";
          }
        }
      : function (t) {
          return !1;
        },
  R$ = Date.prototype.getDay,
  P$ = function (t) {
    try {
      return R$.call(t), !0;
    } catch {
      return !1;
    }
  },
  w$ = Object.prototype.toString,
  C$ = "[object Date]",
  O$ = Ve(),
  S$ = function (t) {
    return typeof t != "object" || t === null
      ? !1
      : O$
      ? P$(t)
      : w$.call(t) === C$;
  },
  Ri = Z,
  Rp = Ve(),
  Pp,
  wp,
  Pi,
  wi;
if (Rp) {
  (Pp = Ri("Object.prototype.hasOwnProperty")),
    (wp = Ri("RegExp.prototype.exec")),
    (Pi = {});
  var Nl = function () {
    throw Pi;
  };
  (wi = { toString: Nl, valueOf: Nl }),
    typeof Symbol.toPrimitive == "symbol" && (wi[Symbol.toPrimitive] = Nl);
}
var $$ = Ri("Object.prototype.toString"),
  T$ = Object.getOwnPropertyDescriptor,
  q$ = "[object RegExp]",
  A$ = Rp
    ? function (t) {
        if (!t || typeof t != "object") return !1;
        var r = T$(t, "lastIndex"),
          n = r && Pp(r, "value");
        if (!n) return !1;
        try {
          wp(t, wi);
        } catch (a) {
          return a === Pi;
        }
      }
    : function (t) {
        return !t || (typeof t != "object" && typeof t != "function")
          ? !1
          : $$(t) === q$;
      },
  x$ = Z,
  sc = x$("SharedArrayBuffer.prototype.byteLength", !0),
  M$ = sc
    ? function (t) {
        if (!t || typeof t != "object") return !1;
        try {
          return sc(t), !0;
        } catch {
          return !1;
        }
      }
    : function (t) {
        return !1;
      },
  B$ = Number.prototype.toString,
  I$ = function (t) {
    try {
      return B$.call(t), !0;
    } catch {
      return !1;
    }
  },
  j$ = Object.prototype.toString,
  N$ = "[object Number]",
  D$ = Ve(),
  k$ = function (t) {
    return typeof t == "number"
      ? !0
      : typeof t != "object"
      ? !1
      : D$
      ? I$(t)
      : j$.call(t) === N$;
  },
  Cp = Z,
  L$ = Cp("Boolean.prototype.toString"),
  F$ = Cp("Object.prototype.toString"),
  U$ = function (t) {
    try {
      return L$(t), !0;
    } catch {
      return !1;
    }
  },
  V$ = "[object Boolean]",
  H$ = Ve(),
  W$ = function (t) {
    return typeof t == "boolean"
      ? !0
      : t === null || typeof t != "object"
      ? !1
      : H$ && Symbol.toStringTag in t
      ? U$(t)
      : F$(t) === V$;
  },
  Ci = { exports: {} },
  z$ = Object.prototype.toString,
  K$ = lu();
if (K$) {
  var G$ = Symbol.prototype.toString,
    Y$ = /^Symbol\(.*\)$/,
    J$ = function (t) {
      return typeof t.valueOf() != "symbol" ? !1 : Y$.test(G$.call(t));
    };
  Ci.exports = function (t) {
    if (typeof t == "symbol") return !0;
    if (z$.call(t) !== "[object Symbol]") return !1;
    try {
      return J$(t);
    } catch {
      return !1;
    }
  };
} else
  Ci.exports = function (t) {
    return !1;
  };
var X$ = Ci.exports,
  Oi = { exports: {} },
  cc = typeof BigInt < "u" && BigInt,
  Q$ = function () {
    return (
      typeof cc == "function" &&
      typeof BigInt == "function" &&
      typeof cc(42) == "bigint" &&
      typeof BigInt(42) == "bigint"
    );
  },
  Z$ = Q$();
if (Z$) {
  var eT = BigInt.prototype.valueOf,
    tT = function (t) {
      try {
        return eT.call(t), !0;
      } catch {}
      return !1;
    };
  Oi.exports = function (t) {
    return t === null ||
      typeof t > "u" ||
      typeof t == "boolean" ||
      typeof t == "string" ||
      typeof t == "number" ||
      typeof t == "symbol" ||
      typeof t == "function"
      ? !1
      : typeof t == "bigint"
      ? !0
      : tT(t);
  };
} else
  Oi.exports = function (t) {
    return !1;
  };
var rT = Oi.exports,
  nT = tp,
  aT = k$,
  oT = W$,
  lT = X$,
  iT = rT,
  uT = function (t) {
    if (t == null || (typeof t != "object" && typeof t != "function"))
      return null;
    if (nT(t)) return "String";
    if (aT(t)) return "Number";
    if (oT(t)) return "Boolean";
    if (lT(t)) return "Symbol";
    if (iT(t)) return "BigInt";
  },
  Yr = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null,
  dc = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null,
  Jr;
Yr ||
  (Jr = function (t) {
    return !1;
  });
var Si = Yr ? Yr.prototype.has : null,
  Dl = dc ? dc.prototype.has : null;
!Jr &&
  !Si &&
  (Jr = function (t) {
    return !1;
  });
var sT =
    Jr ||
    function (t) {
      if (!t || typeof t != "object") return !1;
      try {
        if ((Si.call(t, Si), Dl))
          try {
            Dl.call(t, Dl);
          } catch {
            return !0;
          }
        return t instanceof Yr;
      } catch {}
      return !1;
    },
  $i = { exports: {} },
  cT = ve,
  Op = Z,
  dT = cT("%WeakSet%", !0),
  kl = Op("WeakSet.prototype.has", !0);
if (kl) {
  var Ll = Op("WeakMap.prototype.has", !0);
  $i.exports = function (t) {
    if (!t || typeof t != "object") return !1;
    try {
      if ((kl(t, kl), Ll))
        try {
          Ll(t, Ll);
        } catch {
          return !0;
        }
      return t instanceof dT;
    } catch {}
    return !1;
  };
} else
  $i.exports = function (t) {
    return !1;
  };
var fT = $i.exports,
  pT = np,
  vT = op,
  yT = sT,
  mT = fT,
  bT = function (t) {
    if (t && typeof t == "object") {
      if (pT(t)) return "Map";
      if (vT(t)) return "Set";
      if (yT(t)) return "WeakMap";
      if (mT(t)) return "WeakSet";
    }
    return !1;
  },
  Sp = fp,
  hT = pp,
  $p = Z,
  Fl = vp,
  gT = $p("Object.prototype.toString"),
  Tp = Ve(),
  fc = typeof globalThis > "u" ? Xi : globalThis,
  ET = hT(),
  _T = $p("String.prototype.slice"),
  qp = {},
  Ul = Object.getPrototypeOf;
Tp &&
  Fl &&
  Ul &&
  Sp(ET, function (e) {
    if (typeof fc[e] == "function") {
      var t = new fc[e]();
      if (Symbol.toStringTag in t) {
        var r = Ul(t),
          n = Fl(r, Symbol.toStringTag);
        if (!n) {
          var a = Ul(r);
          n = Fl(a, Symbol.toStringTag);
        }
        qp[e] = n.get;
      }
    }
  });
var RT = function (t) {
    var r = !1;
    return (
      Sp(qp, function (n, a) {
        if (!r)
          try {
            var o = n.call(t);
            o === a && (r = o);
          } catch {}
      }),
      r
    );
  },
  PT = gp,
  wT = function (t) {
    return PT(t)
      ? !Tp || !(Symbol.toStringTag in t)
        ? _T(gT(t), 8, -1)
        : RT(t)
      : !1;
  },
  CT = Z,
  pc = CT("ArrayBuffer.prototype.byteLength", !0),
  OT = _p,
  ST = function (t) {
    return OT(t) ? (pc ? pc(t) : t.byteLength) : NaN;
  },
  Ap = l0,
  ye = Z,
  vc = P0,
  $T = ve,
  Rt = DS,
  TT = Zf,
  yc = KS,
  mc = zf,
  bc = ep,
  hc = _p,
  gc = S$,
  Ec = A$,
  _c = M$,
  Rc = ou,
  Pc = uT,
  wc = bT,
  Cc = wT,
  Oc = ST,
  Sc = ye("SharedArrayBuffer.prototype.byteLength", !0),
  $c = ye("Date.prototype.getTime"),
  Vl = Object.getPrototypeOf,
  Tc = ye("Object.prototype.toString"),
  Xr = $T("%Set%", !0),
  Ti = ye("Map.prototype.has", !0),
  Qr = ye("Map.prototype.get", !0),
  qc = ye("Map.prototype.size", !0),
  Zr = ye("Set.prototype.add", !0),
  xp = ye("Set.prototype.delete", !0),
  en = ye("Set.prototype.has", !0),
  Dr = ye("Set.prototype.size", !0);
function Ac(e, t, r, n) {
  for (var a = Rt(e), o; (o = a.next()) && !o.done; )
    if (ie(t, o.value, r, n)) return xp(e, o.value), !0;
  return !1;
}
function Mp(e) {
  if (typeof e > "u") return null;
  if (typeof e != "object")
    return typeof e == "symbol"
      ? !1
      : typeof e == "string" || typeof e == "number"
      ? +e == +e
      : !0;
}
function qT(e, t, r, n, a, o) {
  var l = Mp(r);
  if (l != null) return l;
  var u = Qr(t, l),
    i = Ap({}, a, { strict: !1 });
  return (typeof u > "u" && !Ti(t, l)) || !ie(n, u, i, o)
    ? !1
    : !Ti(e, l) && ie(n, u, i, o);
}
function AT(e, t, r) {
  var n = Mp(r);
  return n ?? (en(t, n) && !en(e, n));
}
function xc(e, t, r, n, a, o) {
  for (var l = Rt(e), u, i; (u = l.next()) && !u.done; )
    if (((i = u.value), ie(r, i, a, o) && ie(n, Qr(t, i), a, o)))
      return xp(e, i), !0;
  return !1;
}
function ie(e, t, r, n) {
  var a = r || {};
  if (a.strict ? yc(e, t) : e === t) return !0;
  var o = Pc(e),
    l = Pc(t);
  if (o !== l) return !1;
  if (!e || !t || (typeof e != "object" && typeof t != "object"))
    return a.strict ? yc(e, t) : e == t;
  var u = n.has(e),
    i = n.has(t),
    s;
  if (u && i) {
    if (n.get(e) === n.get(t)) return !0;
  } else s = {};
  return u || n.set(e, s), i || n.set(t, s), BT(e, t, a, n);
}
function Mc(e) {
  return !e ||
    typeof e != "object" ||
    typeof e.length != "number" ||
    typeof e.copy != "function" ||
    typeof e.slice != "function" ||
    (e.length > 0 && typeof e[0] != "number")
    ? !1
    : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function xT(e, t, r, n) {
  if (Dr(e) !== Dr(t)) return !1;
  for (var a = Rt(e), o = Rt(t), l, u, i; (l = a.next()) && !l.done; )
    if (l.value && typeof l.value == "object")
      i || (i = new Xr()), Zr(i, l.value);
    else if (!en(t, l.value)) {
      if (r.strict || !AT(e, t, l.value)) return !1;
      i || (i = new Xr()), Zr(i, l.value);
    }
  if (i) {
    for (; (u = o.next()) && !u.done; )
      if (u.value && typeof u.value == "object") {
        if (!Ac(i, u.value, r.strict, n)) return !1;
      } else if (!r.strict && !en(e, u.value) && !Ac(i, u.value, r.strict, n))
        return !1;
    return Dr(i) === 0;
  }
  return !0;
}
function MT(e, t, r, n) {
  if (qc(e) !== qc(t)) return !1;
  for (var a = Rt(e), o = Rt(t), l, u, i, s, d, f; (l = a.next()) && !l.done; )
    if (((s = l.value[0]), (d = l.value[1]), s && typeof s == "object"))
      i || (i = new Xr()), Zr(i, s);
    else if (
      ((f = Qr(t, s)), (typeof f > "u" && !Ti(t, s)) || !ie(d, f, r, n))
    ) {
      if (r.strict || !qT(e, t, s, d, r, n)) return !1;
      i || (i = new Xr()), Zr(i, s);
    }
  if (i) {
    for (; (u = o.next()) && !u.done; )
      if (((s = u.value[0]), (f = u.value[1]), s && typeof s == "object")) {
        if (!xc(i, e, s, f, r, n)) return !1;
      } else if (
        !r.strict &&
        (!e.has(s) || !ie(Qr(e, s), f, r, n)) &&
        !xc(i, e, s, f, Ap({}, r, { strict: !1 }), n)
      )
        return !1;
    return Dr(i) === 0;
  }
  return !0;
}
function BT(e, t, r, n) {
  var a, o;
  if (
    typeof e != typeof t ||
    e == null ||
    t == null ||
    Tc(e) !== Tc(t) ||
    mc(e) !== mc(t)
  )
    return !1;
  var l = bc(e),
    u = bc(t);
  if (l !== u) return !1;
  var i = e instanceof Error,
    s = t instanceof Error;
  if (i !== s || ((i || s) && (e.name !== t.name || e.message !== t.message)))
    return !1;
  var d = Ec(e),
    f = Ec(t);
  if (d !== f || ((d || f) && (e.source !== t.source || vc(e) !== vc(t))))
    return !1;
  var p = gc(e),
    m = gc(t);
  if (
    p !== m ||
    ((p || m) && $c(e) !== $c(t)) ||
    (r.strict && Vl && Vl(e) !== Vl(t))
  )
    return !1;
  var C = Cc(e),
    R = Cc(t);
  if ((C || R) && C !== R) return !1;
  var S = Mc(e),
    v = Mc(t);
  if (S !== v) return !1;
  if (S || v) {
    if (e.length !== t.length) return !1;
    for (a = 0; a < e.length; a++) if (e[a] !== t[a]) return !1;
    return !0;
  }
  var b = hc(e),
    P = hc(t);
  if (b !== P) return !1;
  if (b || P)
    return Oc(e) !== Oc(t)
      ? !1
      : typeof Uint8Array == "function" &&
          ie(new Uint8Array(e), new Uint8Array(t), r, n);
  var w = _c(e),
    O = _c(t);
  if (w !== O) return !1;
  if (w || O)
    return Sc(e) !== Sc(t)
      ? !1
      : typeof Uint8Array == "function" &&
          ie(new Uint8Array(e), new Uint8Array(t), r, n);
  if (typeof e != typeof t) return !1;
  var y = Rc(e),
    h = Rc(t);
  if (y.length !== h.length) return !1;
  for (y.sort(), h.sort(), a = y.length - 1; a >= 0; a--)
    if (y[a] != h[a]) return !1;
  for (a = y.length - 1; a >= 0; a--)
    if (((o = y[a]), !ie(e[o], t[o], r, n))) return !1;
  var E = wc(e),
    I = wc(t);
  return E !== I
    ? !1
    : E === "Set" || I === "Set"
    ? xT(e, t, r, n)
    : E === "Map"
    ? MT(e, t, r, n)
    : !0;
}
var IT = function (t, r, n) {
  return ie(t, r, n, TT());
};
Object.defineProperty(Ko, "__esModule", { value: !0 });
Ko.default = void 0;
var jT = bu(IT),
  NT = bu(et),
  Bp = bu(Ot);
function bu(e) {
  return e && e.__esModule ? e : { default: e };
}
function Hl(e, t) {
  return LT(e) || kT(e, t) || Ip(e, t) || DT();
}
function DT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kT(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n = [],
      a = !0,
      o = !1,
      l,
      u;
    try {
      for (
        r = r.call(e);
        !(a = (l = r.next()).done) && (n.push(l.value), !(t && n.length === t));
        a = !0
      );
    } catch (i) {
      (o = !0), (u = i);
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function LT(e) {
  if (Array.isArray(e)) return e;
}
function FT(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = Ip(e)) ||
      (t && e && typeof e.length == "number")
    ) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (s) {
          throw s;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0,
    l = !1,
    u;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var s = r.next();
      return (o = s.done), s;
    },
    e: function (s) {
      (l = !0), (u = s);
    },
    f: function () {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (l) throw u;
      }
    },
  };
}
function Ip(e, t) {
  if (e) {
    if (typeof e == "string") return Bc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Bc(e, t);
  }
}
function Bc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Ae = [],
  Ic = Bp.default.keys();
for (var Wl = 0; Wl < Ic.length; Wl++) {
  var zl = Ic[Wl],
    Kl = Bp.default.get(zl);
  if (Kl)
    for (
      var jc = [].concat(Kl.baseConcepts, Kl.relatedConcepts), Gl = 0;
      Gl < jc.length;
      Gl++
    ) {
      var Nc = jc[Gl];
      if (Nc.module === "HTML") {
        var Yl = Nc.concept;
        Yl &&
          (function () {
            var e = JSON.stringify(Yl),
              t = Ae.find(function (o) {
                return JSON.stringify(o[0]) === e;
              }),
              r = void 0;
            t ? (r = t[1]) : (r = []);
            for (var n = !0, a = 0; a < r.length; a++)
              if (r[a] === zl) {
                n = !1;
                break;
              }
            n && r.push(zl), Ae.push([Yl, r]);
          })();
      }
    }
}
var qi = {
    entries: function () {
      return Ae;
    },
    forEach: function (t) {
      var r =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
        n = FT(Ae),
        a;
      try {
        for (n.s(); !(a = n.n()).done; ) {
          var o = Hl(a.value, 2),
            l = o[0],
            u = o[1];
          t.call(r, u, l, Ae);
        }
      } catch (i) {
        n.e(i);
      } finally {
        n.f();
      }
    },
    get: function (t) {
      var r = Ae.find(function (n) {
        return (0, jT.default)(t, n[0]);
      });
      return r && r[1];
    },
    has: function (t) {
      return !!qi.get(t);
    },
    keys: function () {
      return Ae.map(function (t) {
        var r = Hl(t, 1),
          n = r[0];
        return n;
      });
    },
    values: function () {
      return Ae.map(function (t) {
        var r = Hl(t, 2),
          n = r[1];
        return n;
      });
    },
  },
  UT = (0, NT.default)(qi, qi.entries());
Ko.default = UT;
var Jo = {};
Object.defineProperty(Jo, "__esModule", { value: !0 });
Jo.default = void 0;
var VT = Np(et),
  jp = Np(Ot);
function Np(e) {
  return e && e.__esModule ? e : { default: e };
}
function Jl(e, t) {
  return zT(e) || WT(e, t) || Dp(e, t) || HT();
}
function HT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WT(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n = [],
      a = !0,
      o = !1,
      l,
      u;
    try {
      for (
        r = r.call(e);
        !(a = (l = r.next()).done) && (n.push(l.value), !(t && n.length === t));
        a = !0
      );
    } catch (i) {
      (o = !0), (u = i);
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function zT(e) {
  if (Array.isArray(e)) return e;
}
function KT(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = Dp(e)) ||
      (t && e && typeof e.length == "number")
    ) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (s) {
          throw s;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0,
    l = !1,
    u;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var s = r.next();
      return (o = s.done), s;
    },
    e: function (s) {
      (l = !0), (u = s);
    },
    f: function () {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (l) throw u;
      }
    },
  };
}
function Dp(e, t) {
  if (e) {
    if (typeof e == "string") return Dc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Dc(e, t);
  }
}
function Dc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var xe = [],
  kp = jp.default.keys(),
  GT = function (t) {
    var r = kp[t],
      n = jp.default.get(r);
    if (n)
      for (
        var a = [].concat(n.baseConcepts, n.relatedConcepts), o = 0;
        o < a.length;
        o++
      ) {
        var l = a[o];
        if (l.module === "HTML") {
          var u = l.concept;
          if (u) {
            var i = xe.find(function (d) {
                return d[0] === r;
              }),
              s = void 0;
            i ? (s = i[1]) : (s = []), s.push(u), xe.push([r, s]);
          }
        }
      }
  };
for (var Xl = 0; Xl < kp.length; Xl++) GT(Xl);
var Ai = {
    entries: function () {
      return xe;
    },
    forEach: function (t) {
      var r =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
        n = KT(xe),
        a;
      try {
        for (n.s(); !(a = n.n()).done; ) {
          var o = Jl(a.value, 2),
            l = o[0],
            u = o[1];
          t.call(r, u, l, xe);
        }
      } catch (i) {
        n.e(i);
      } finally {
        n.f();
      }
    },
    get: function (t) {
      var r = xe.find(function (n) {
        return n[0] === t;
      });
      return r && r[1];
    },
    has: function (t) {
      return !!Ai.get(t);
    },
    keys: function () {
      return xe.map(function (t) {
        var r = Jl(t, 1),
          n = r[0];
        return n;
      });
    },
    values: function () {
      return xe.map(function (t) {
        var r = Jl(t, 2),
          n = r[1];
        return n;
      });
    },
  },
  YT = (0, VT.default)(Ai, Ai.entries());
Jo.default = YT;
Object.defineProperty(le, "__esModule", { value: !0 });
var vt =
    (le.roles =
    Fp =
    le.roleElements =
    Lp =
    le.elementRoles =
    le.dom =
    le.aria =
      void 0),
  JT = sr(dn),
  XT = sr(pn),
  QT = sr(Ot),
  ZT = sr(Ko),
  eq = sr(Jo);
function sr(e) {
  return e && e.__esModule ? e : { default: e };
}
var tq = JT.default;
le.aria = tq;
var rq = XT.default;
le.dom = rq;
var nq = QT.default;
vt = le.roles = nq;
var aq = ZT.default,
  Lp = (le.elementRoles = aq),
  oq = eq.default,
  Fp = (le.roleElements = oq),
  hu = { exports: {} };
hu.exports;
(function (e) {
  var t = (function () {
    var r = String.fromCharCode,
      n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
      o = {};
    function l(i, s) {
      if (!o[i]) {
        o[i] = {};
        for (var d = 0; d < i.length; d++) o[i][i.charAt(d)] = d;
      }
      return o[i][s];
    }
    var u = {
      compressToBase64: function (i) {
        if (i == null) return "";
        var s = u._compress(i, 6, function (d) {
          return n.charAt(d);
        });
        switch (s.length % 4) {
          default:
          case 0:
            return s;
          case 1:
            return s + "===";
          case 2:
            return s + "==";
          case 3:
            return s + "=";
        }
      },
      decompressFromBase64: function (i) {
        return i == null
          ? ""
          : i == ""
          ? null
          : u._decompress(i.length, 32, function (s) {
              return l(n, i.charAt(s));
            });
      },
      compressToUTF16: function (i) {
        return i == null
          ? ""
          : u._compress(i, 15, function (s) {
              return r(s + 32);
            }) + " ";
      },
      decompressFromUTF16: function (i) {
        return i == null
          ? ""
          : i == ""
          ? null
          : u._decompress(i.length, 16384, function (s) {
              return i.charCodeAt(s) - 32;
            });
      },
      compressToUint8Array: function (i) {
        for (
          var s = u.compress(i),
            d = new Uint8Array(s.length * 2),
            f = 0,
            p = s.length;
          f < p;
          f++
        ) {
          var m = s.charCodeAt(f);
          (d[f * 2] = m >>> 8), (d[f * 2 + 1] = m % 256);
        }
        return d;
      },
      decompressFromUint8Array: function (i) {
        if (i == null) return u.decompress(i);
        for (var s = new Array(i.length / 2), d = 0, f = s.length; d < f; d++)
          s[d] = i[d * 2] * 256 + i[d * 2 + 1];
        var p = [];
        return (
          s.forEach(function (m) {
            p.push(r(m));
          }),
          u.decompress(p.join(""))
        );
      },
      compressToEncodedURIComponent: function (i) {
        return i == null
          ? ""
          : u._compress(i, 6, function (s) {
              return a.charAt(s);
            });
      },
      decompressFromEncodedURIComponent: function (i) {
        return i == null
          ? ""
          : i == ""
          ? null
          : ((i = i.replace(/ /g, "+")),
            u._decompress(i.length, 32, function (s) {
              return l(a, i.charAt(s));
            }));
      },
      compress: function (i) {
        return u._compress(i, 16, function (s) {
          return r(s);
        });
      },
      _compress: function (i, s, d) {
        if (i == null) return "";
        var f,
          p,
          m = {},
          C = {},
          R = "",
          S = "",
          v = "",
          b = 2,
          P = 3,
          w = 2,
          O = [],
          y = 0,
          h = 0,
          E;
        for (E = 0; E < i.length; E += 1)
          if (
            ((R = i.charAt(E)),
            Object.prototype.hasOwnProperty.call(m, R) ||
              ((m[R] = P++), (C[R] = !0)),
            (S = v + R),
            Object.prototype.hasOwnProperty.call(m, S))
          )
            v = S;
          else {
            if (Object.prototype.hasOwnProperty.call(C, v)) {
              if (v.charCodeAt(0) < 256) {
                for (f = 0; f < w; f++)
                  (y = y << 1),
                    h == s - 1 ? ((h = 0), O.push(d(y)), (y = 0)) : h++;
                for (p = v.charCodeAt(0), f = 0; f < 8; f++)
                  (y = (y << 1) | (p & 1)),
                    h == s - 1 ? ((h = 0), O.push(d(y)), (y = 0)) : h++,
                    (p = p >> 1);
              } else {
                for (p = 1, f = 0; f < w; f++)
                  (y = (y << 1) | p),
                    h == s - 1 ? ((h = 0), O.push(d(y)), (y = 0)) : h++,
                    (p = 0);
                for (p = v.charCodeAt(0), f = 0; f < 16; f++)
                  (y = (y << 1) | (p & 1)),
                    h == s - 1 ? ((h = 0), O.push(d(y)), (y = 0)) : h++,
                    (p = p >> 1);
              }
              b--, b == 0 && ((b = Math.pow(2, w)), w++), delete C[v];
            } else
              for (p = m[v], f = 0; f < w; f++)
                (y = (y << 1) | (p & 1)),
                  h == s - 1 ? ((h = 0), O.push(d(y)), (y = 0)) : h++,
                  (p = p >> 1);
            b--,
              b == 0 && ((b = Math.pow(2, w)), w++),
              (m[S] = P++),
              (v = String(R));
          }
        if (v !== "") {
          if (Object.prototype.hasOwnProperty.call(C, v)) {
            if (v.charCodeAt(0) < 256) {
              for (f = 0; f < w; f++)
                (y = y << 1),
                  h == s - 1 ? ((h = 0), O.push(d(y)), (y = 0)) : h++;
              for (p = v.charCodeAt(0), f = 0; f < 8; f++)
                (y = (y << 1) | (p & 1)),
                  h == s - 1 ? ((h = 0), O.push(d(y)), (y = 0)) : h++,
                  (p = p >> 1);
            } else {
              for (p = 1, f = 0; f < w; f++)
                (y = (y << 1) | p),
                  h == s - 1 ? ((h = 0), O.push(d(y)), (y = 0)) : h++,
                  (p = 0);
              for (p = v.charCodeAt(0), f = 0; f < 16; f++)
                (y = (y << 1) | (p & 1)),
                  h == s - 1 ? ((h = 0), O.push(d(y)), (y = 0)) : h++,
                  (p = p >> 1);
            }
            b--, b == 0 && ((b = Math.pow(2, w)), w++), delete C[v];
          } else
            for (p = m[v], f = 0; f < w; f++)
              (y = (y << 1) | (p & 1)),
                h == s - 1 ? ((h = 0), O.push(d(y)), (y = 0)) : h++,
                (p = p >> 1);
          b--, b == 0 && ((b = Math.pow(2, w)), w++);
        }
        for (p = 2, f = 0; f < w; f++)
          (y = (y << 1) | (p & 1)),
            h == s - 1 ? ((h = 0), O.push(d(y)), (y = 0)) : h++,
            (p = p >> 1);
        for (;;)
          if (((y = y << 1), h == s - 1)) {
            O.push(d(y));
            break;
          } else h++;
        return O.join("");
      },
      decompress: function (i) {
        return i == null
          ? ""
          : i == ""
          ? null
          : u._decompress(i.length, 32768, function (s) {
              return i.charCodeAt(s);
            });
      },
      _decompress: function (i, s, d) {
        var f = [],
          p = 4,
          m = 4,
          C = 3,
          R = "",
          S = [],
          v,
          b,
          P,
          w,
          O,
          y,
          h,
          E = { val: d(0), position: s, index: 1 };
        for (v = 0; v < 3; v += 1) f[v] = v;
        for (P = 0, O = Math.pow(2, 2), y = 1; y != O; )
          (w = E.val & E.position),
            (E.position >>= 1),
            E.position == 0 && ((E.position = s), (E.val = d(E.index++))),
            (P |= (w > 0 ? 1 : 0) * y),
            (y <<= 1);
        switch (P) {
          case 0:
            for (P = 0, O = Math.pow(2, 8), y = 1; y != O; )
              (w = E.val & E.position),
                (E.position >>= 1),
                E.position == 0 && ((E.position = s), (E.val = d(E.index++))),
                (P |= (w > 0 ? 1 : 0) * y),
                (y <<= 1);
            h = r(P);
            break;
          case 1:
            for (P = 0, O = Math.pow(2, 16), y = 1; y != O; )
              (w = E.val & E.position),
                (E.position >>= 1),
                E.position == 0 && ((E.position = s), (E.val = d(E.index++))),
                (P |= (w > 0 ? 1 : 0) * y),
                (y <<= 1);
            h = r(P);
            break;
          case 2:
            return "";
        }
        for (f[3] = h, b = h, S.push(h); ; ) {
          if (E.index > i) return "";
          for (P = 0, O = Math.pow(2, C), y = 1; y != O; )
            (w = E.val & E.position),
              (E.position >>= 1),
              E.position == 0 && ((E.position = s), (E.val = d(E.index++))),
              (P |= (w > 0 ? 1 : 0) * y),
              (y <<= 1);
          switch ((h = P)) {
            case 0:
              for (P = 0, O = Math.pow(2, 8), y = 1; y != O; )
                (w = E.val & E.position),
                  (E.position >>= 1),
                  E.position == 0 && ((E.position = s), (E.val = d(E.index++))),
                  (P |= (w > 0 ? 1 : 0) * y),
                  (y <<= 1);
              (f[m++] = r(P)), (h = m - 1), p--;
              break;
            case 1:
              for (P = 0, O = Math.pow(2, 16), y = 1; y != O; )
                (w = E.val & E.position),
                  (E.position >>= 1),
                  E.position == 0 && ((E.position = s), (E.val = d(E.index++))),
                  (P |= (w > 0 ? 1 : 0) * y),
                  (y <<= 1);
              (f[m++] = r(P)), (h = m - 1), p--;
              break;
            case 2:
              return S.join("");
          }
          if ((p == 0 && ((p = Math.pow(2, C)), C++), f[h])) R = f[h];
          else if (h === m) R = b + b.charAt(0);
          else return null;
          S.push(R),
            (f[m++] = b + R.charAt(0)),
            p--,
            (b = R),
            p == 0 && ((p = Math.pow(2, C)), C++);
        }
      },
    };
    return u;
  })();
  e != null
    ? (e.exports = t)
    : typeof angular < "u" &&
      angular != null &&
      angular.module("LZString", []).factory("LZString", function () {
        return t;
      });
})(hu);
var lq = hu.exports;
const iq = _d(lq);
function Up(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const uq = (e, t, r, n, a, o, l) => {
    const u = n + r.indent,
      i = r.colors;
    return e
      .map((s) => {
        const d = t[s];
        let f = l(d, r, u, a, o);
        return (
          typeof d != "string" &&
            (f.indexOf(`
`) !== -1 && (f = r.spacingOuter + u + f + r.spacingOuter + n),
            (f = "{" + f + "}")),
          r.spacingInner +
            n +
            i.prop.open +
            s +
            i.prop.close +
            "=" +
            i.value.open +
            f +
            i.value.close
        );
      })
      .join("");
  },
  sq = 3,
  cq = (e, t, r, n, a, o) =>
    e
      .map((l) => {
        const u = typeof l == "string" ? Vp(l, t) : o(l, t, r, n, a);
        return u === "" &&
          typeof l == "object" &&
          l !== null &&
          l.nodeType !== sq
          ? ""
          : t.spacingOuter + r + u;
      })
      .join(""),
  Vp = (e, t) => {
    const r = t.colors.content;
    return r.open + Up(e) + r.close;
  },
  dq = (e, t) => {
    const r = t.colors.comment;
    return r.open + "<!--" + Up(e) + "-->" + r.close;
  },
  fq = (e, t, r, n, a) => {
    const o = n.colors.tag;
    return (
      o.open +
      "<" +
      e +
      (t && o.close + t + n.spacingOuter + a + o.open) +
      (r
        ? ">" + o.close + r + n.spacingOuter + a + o.open + "</" + e
        : (t && !n.min ? "" : " ") + "/") +
      ">" +
      o.close
    );
  },
  pq = (e, t) => {
    const r = t.colors.tag;
    return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
  },
  vq = 1,
  Hp = 3,
  Wp = 8,
  zp = 11,
  yq = /^((HTML|SVG)\w*)?Element$/,
  mq = (e) => {
    const t = e.constructor.name,
      { nodeType: r, tagName: n } = e,
      a =
        (typeof n == "string" && n.includes("-")) ||
        (typeof e.hasAttribute == "function" && e.hasAttribute("is"));
    return (
      (r === vq && (yq.test(t) || a)) ||
      (r === Hp && t === "Text") ||
      (r === Wp && t === "Comment") ||
      (r === zp && t === "DocumentFragment")
    );
  };
function bq(e) {
  return e.nodeType === Hp;
}
function hq(e) {
  return e.nodeType === Wp;
}
function Ql(e) {
  return e.nodeType === zp;
}
function gq(e) {
  return {
    test: (t) => {
      var r;
      return (
        (t == null || (r = t.constructor) == null ? void 0 : r.name) && mq(t)
      );
    },
    serialize: (t, r, n, a, o, l) => {
      if (bq(t)) return Vp(t.data, r);
      if (hq(t)) return dq(t.data, r);
      const u = Ql(t) ? "DocumentFragment" : t.tagName.toLowerCase();
      return ++a > r.maxDepth
        ? pq(u, r)
        : fq(
            u,
            uq(
              Ql(t)
                ? []
                : Array.from(t.attributes)
                    .map((i) => i.name)
                    .sort(),
              Ql(t)
                ? {}
                : Array.from(t.attributes).reduce(
                    (i, s) => ((i[s.name] = s.value), i),
                    {}
                  ),
              r,
              n + r.indent,
              a,
              o,
              l
            ),
            cq(
              Array.prototype.slice.call(t.childNodes || t.children).filter(e),
              r,
              n + r.indent,
              a,
              o,
              l
            ),
            r,
            n
          );
    },
  };
}
let Kp = null,
  gu = null,
  Eu = null;
try {
  const e = module && module.require;
  (gu = e.call(module, "fs").readFileSync),
    (Eu = e.call(module, "@babel/code-frame").codeFrameColumns),
    (Kp = e.call(module, "chalk"));
} catch {}
function Eq(e) {
  const t = e.indexOf("(") + 1,
    r = e.indexOf(")"),
    n = e.slice(t, r),
    a = n.split(":"),
    [o, l, u] = [a[0], parseInt(a[1], 10), parseInt(a[2], 10)];
  let i = "";
  try {
    i = gu(o, "utf-8");
  } catch {
    return "";
  }
  const s = Eu(
    i,
    { start: { line: l, column: u } },
    { highlightCode: !0, linesBelow: 0 }
  );
  return (
    Kp.dim(n) +
    `
` +
    s +
    `
`
  );
}
function _q() {
  if (!gu || !Eu) return "";
  const t = new Error().stack
    .split(
      `
`
    )
    .slice(1)
    .find((r) => !r.includes("node_modules/"));
  return Eq(t);
}
const Gp = 3;
function Zl() {
  return typeof jest < "u" && jest !== null
    ? setTimeout._isMockFunction === !0 ||
        Object.prototype.hasOwnProperty.call(setTimeout, "clock")
    : !1;
}
function _u() {
  if (typeof window > "u") throw new Error("Could not find default container");
  return window.document;
}
function Yp(e) {
  if (e.defaultView) return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window) return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null
    ? new Error(
        "It looks like the window object is not available for the provided node."
      )
    : e.then instanceof Function
    ? new Error(
        "It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?"
      )
    : Array.isArray(e)
    ? new Error(
        "It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?"
      )
    : typeof e.debug == "function" &&
      typeof e.logTestingPlaygroundURL == "function"
    ? new Error(
        "It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?"
      )
    : new Error(
        "The given node is not an Element, the node type is: " + typeof e + "."
      );
}
function Re(e) {
  if (
    !e ||
    typeof e.querySelector != "function" ||
    typeof e.querySelectorAll != "function"
  )
    throw new TypeError(
      "Expected container to be an Element, a Document or a DocumentFragment but got " +
        t(e) +
        "."
    );
  function t(r) {
    return typeof r == "object"
      ? r === null
        ? "null"
        : r.constructor.name
      : typeof r;
  }
}
const Rq = () => {
    let e;
    try {
      var t, r;
      e = JSON.parse(
        (t = process) == null || (r = t.env) == null ? void 0 : r.COLORS
      );
    } catch {}
    return typeof e == "boolean"
      ? e
      : typeof process < "u" &&
          process.versions !== void 0 &&
          process.versions.node !== void 0;
  },
  { DOMCollection: Pq } = tu,
  wq = 1,
  Cq = 8;
function Oq(e) {
  return (
    e.nodeType !== Cq && (e.nodeType !== wq || !e.matches(q().defaultIgnore))
  );
}
function Gt(e, t, r) {
  if (
    (r === void 0 && (r = {}),
    e || (e = _u().body),
    typeof t != "number" &&
      (t = (typeof process < "u" && {}.DEBUG_PRINT_LIMIT) || 7e3),
    t === 0)
  )
    return "";
  e.documentElement && (e = e.documentElement);
  let n = typeof e;
  if (
    (n === "object" ? (n = e.constructor.name) : (e = {}), !("outerHTML" in e))
  )
    throw new TypeError("Expected an element or document but got " + n);
  const { filterNode: a = Oq, ...o } = r,
    l = ef(e, {
      plugins: [gq(a), Pq],
      printFunctionName: !1,
      highlight: Rq(),
      ...o,
    });
  return t !== void 0 && e.outerHTML.length > t ? l.slice(0, t) + "..." : l;
}
const xi = function () {
  const e = _q();
  console.log(
    e
      ? Gt(...arguments) +
          `

` +
          e
      : Gt(...arguments)
  );
};
let Je = {
  testIdAttribute: "data-testid",
  asyncUtilTimeout: 1e3,
  asyncWrapper: (e) => e(),
  unstable_advanceTimersWrapper: (e) => e(),
  eventWrapper: (e) => e(),
  defaultHidden: !1,
  defaultIgnore: "script, style",
  showOriginalStackTrace: !1,
  throwSuggestions: !1,
  getElementError(e, t) {
    const r = Gt(t),
      n = new Error(
        [
          e,
          "Ignored nodes: comments, " +
            Je.defaultIgnore +
            `
` +
            r,
        ].filter(Boolean).join(`

`)
      );
    return (n.name = "TestingLibraryElementError"), n;
  },
  _disableExpensiveErrorDiagnostics: !1,
  computedStyleSupportsPseudoElements: !1,
};
function Sq(e) {
  try {
    return (Je._disableExpensiveErrorDiagnostics = !0), e();
  } finally {
    Je._disableExpensiveErrorDiagnostics = !1;
  }
}
function $q(e) {
  typeof e == "function" && (e = e(Je)), (Je = { ...Je, ...e });
}
function q() {
  return Je;
}
const Tq = [
  "button",
  "meter",
  "output",
  "progress",
  "select",
  "textarea",
  "input",
];
function Jp(e) {
  return Tq.includes(e.nodeName.toLowerCase())
    ? ""
    : e.nodeType === Gp
    ? e.textContent
    : Array.from(e.childNodes)
        .map((t) => Jp(t))
        .join("");
}
function Mi(e) {
  let t;
  return (
    e.tagName.toLowerCase() === "label"
      ? (t = Jp(e))
      : (t = e.value || e.textContent),
    t
  );
}
function Xp(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!qq(e)) return [];
  const r = e.ownerDocument.querySelectorAll("label");
  return Array.from(r).filter((n) => n.control === e);
}
function qq(e) {
  return (
    /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) ||
    (e.tagName === "INPUT" && e.getAttribute("type") !== "hidden")
  );
}
function Qp(e, t, r) {
  let { selector: n = "*" } = r === void 0 ? {} : r;
  const a = t.getAttribute("aria-labelledby"),
    o = a ? a.split(" ") : [];
  return o.length
    ? o.map((l) => {
        const u = e.querySelector('[id="' + l + '"]');
        return u
          ? { content: Mi(u), formControl: null }
          : { content: "", formControl: null };
      })
    : Array.from(Xp(t)).map((l) => {
        const u = Mi(l),
          i = "button, input, meter, output, progress, select, textarea",
          s = Array.from(l.querySelectorAll(i)).filter((d) => d.matches(n))[0];
        return { content: u, formControl: s };
      });
}
function Zp(e) {
  if (e == null)
    throw new Error(
      "It looks like " +
        e +
        " was passed instead of a matcher. Did you do something like getByText(" +
        e +
        ")?"
    );
}
function rt(e, t, r, n) {
  if (typeof e != "string") return !1;
  Zp(r);
  const a = n(e);
  return typeof r == "string" || typeof r == "number"
    ? a.toLowerCase().includes(r.toString().toLowerCase())
    : typeof r == "function"
    ? r(a, t)
    : ev(r, a);
}
function ge(e, t, r, n) {
  if (typeof e != "string") return !1;
  Zp(r);
  const a = n(e);
  return r instanceof Function
    ? r(a, t)
    : r instanceof RegExp
    ? ev(r, a)
    : a === String(r);
}
function Ru(e) {
  let { trim: t = !0, collapseWhitespace: r = !0 } = e === void 0 ? {} : e;
  return (n) => {
    let a = n;
    return (a = t ? a.trim() : a), (a = r ? a.replace(/\s+/g, " ") : a), a;
  };
}
function We(e) {
  let { trim: t, collapseWhitespace: r, normalizer: n } = e;
  if (!n) return Ru({ trim: t, collapseWhitespace: r });
  if (typeof t < "u" || typeof r < "u")
    throw new Error(
      'trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer'
    );
  return n;
}
function ev(e, t) {
  const r = e.test(t);
  return (
    e.global &&
      e.lastIndex !== 0 &&
      (console.warn(
        "To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."
      ),
      (e.lastIndex = 0)),
    r
  );
}
function cr(e) {
  return e.matches("input[type=submit], input[type=button], input[type=reset]")
    ? e.value
    : Array.from(e.childNodes)
        .filter((t) => t.nodeType === Gp && !!t.textContent)
        .map((t) => t.textContent)
        .join("");
}
const Aq = xq(Lp);
function tv(e) {
  return (
    e.hidden === !0 ||
    e.getAttribute("aria-hidden") === "true" ||
    e.ownerDocument.defaultView.getComputedStyle(e).display === "none"
  );
}
function Xo(e, t) {
  t === void 0 && (t = {});
  const { isSubtreeInaccessible: r = tv } = t;
  if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === "hidden")
    return !0;
  let a = e;
  for (; a; ) {
    if (r(a)) return !0;
    a = a.parentElement;
  }
  return !1;
}
function Pu(e) {
  for (const { match: t, roles: r } of Aq) if (t(e)) return [...r];
  return [];
}
function xq(e) {
  function t(l) {
    let { name: u, attributes: i } = l;
    return (
      "" +
      u +
      i
        .map((s) => {
          let { name: d, value: f, constraints: p = [] } = s;
          return p.indexOf("undefined") !== -1
            ? ":not([" + d + "])"
            : f
            ? "[" + d + '="' + f + '"]'
            : "[" + d + "]";
        })
        .join("")
    );
  }
  function r(l) {
    let { attributes: u = [] } = l;
    return u.length;
  }
  function n(l, u) {
    let { specificity: i } = l,
      { specificity: s } = u;
    return s - i;
  }
  function a(l) {
    let { attributes: u = [] } = l;
    const i = u.findIndex(
      (d) => d.value && d.name === "type" && d.value === "text"
    );
    i >= 0 && (u = [...u.slice(0, i), ...u.slice(i + 1)]);
    const s = t({ ...l, attributes: u });
    return (d) => (i >= 0 && d.type !== "text" ? !1 : d.matches(s));
  }
  let o = [];
  for (const [l, u] of e.entries())
    o = [...o, { match: a(l), roles: Array.from(u), specificity: r(l) }];
  return o.sort(n);
}
function rv(e, t) {
  let { hidden: r = !1 } = t === void 0 ? {} : t;
  function n(a) {
    return [a, ...Array.from(a.children).reduce((o, l) => [...o, ...n(l)], [])];
  }
  return n(e)
    .filter((a) => (r === !1 ? Xo(a) === !1 : !0))
    .reduce((a, o) => {
      let l = [];
      return (
        o.hasAttribute("role")
          ? (l = o.getAttribute("role").split(" ").slice(0, 1))
          : (l = Pu(o)),
        l.reduce(
          (u, i) =>
            Array.isArray(u[i])
              ? { ...u, [i]: [...u[i], o] }
              : { ...u, [i]: [o] },
          a
        )
      );
    }, {});
}
function nv(e, t) {
  let { hidden: r, includeDescription: n } = t;
  const a = rv(e, { hidden: r });
  return Object.entries(a)
    .filter((o) => {
      let [l] = o;
      return l !== "generic";
    })
    .map((o) => {
      let [l, u] = o;
      const i = "-".repeat(50),
        s = u.map((d) => {
          const f =
              'Name "' +
              nu(d, {
                computedStyleSupportsPseudoElements:
                  q().computedStyleSupportsPseudoElements,
              }) +
              `":
`,
            p = Gt(d.cloneNode(!1));
          if (n) {
            const m =
              'Description "' +
              _f(d, {
                computedStyleSupportsPseudoElements:
                  q().computedStyleSupportsPseudoElements,
              }) +
              `":
`;
            return "" + f + m + p;
          }
          return "" + f + p;
        }).join(`

`);
      return (
        l +
        `:

` +
        s +
        `

` +
        i
      );
    }).join(`
`);
}
const Mq = function (e, t) {
  let { hidden: r = !1 } = t === void 0 ? {} : t;
  return console.log(nv(e, { hidden: r }));
};
function Bq(e) {
  return e.tagName === "OPTION" ? e.selected : dr(e, "aria-selected");
}
function Iq(e) {
  if (!("indeterminate" in e && e.indeterminate))
    return "checked" in e ? e.checked : dr(e, "aria-checked");
}
function jq(e) {
  return dr(e, "aria-pressed");
}
function Nq(e) {
  var t, r;
  return (t =
    (r = dr(e, "aria-current")) != null ? r : e.getAttribute("aria-current")) !=
    null
    ? t
    : !1;
}
function Dq(e) {
  return dr(e, "aria-expanded");
}
function dr(e, t) {
  const r = e.getAttribute(t);
  if (r === "true") return !0;
  if (r === "false") return !1;
}
function kq(e) {
  const t = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 };
  return (
    (e.getAttribute("aria-level") && Number(e.getAttribute("aria-level"))) ||
    t[e.tagName]
  );
}
const kc = Ru();
function Lq(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function Lc(e) {
  return new RegExp(Lq(e.toLowerCase()), "i");
}
function Oe(e, t, r, n) {
  let { variant: a, name: o } = n,
    l = "";
  const u = {},
    i = [["Role", "TestId"].includes(e) ? r : Lc(r)];
  o && (u.name = Lc(o)),
    e === "Role" &&
      Xo(t) &&
      ((u.hidden = !0),
      (l = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `)),
    Object.keys(u).length > 0 && i.push(u);
  const s = a + "By" + e;
  return {
    queryName: e,
    queryMethod: s,
    queryArgs: i,
    variant: a,
    warning: l,
    toString() {
      l && console.warn(l);
      let [d, f] = i;
      return (
        (d = typeof d == "string" ? "'" + d + "'" : d),
        (f = f
          ? ", { " +
            Object.entries(f)
              .map((p) => {
                let [m, C] = p;
                return m + ": " + C;
              })
              .join(", ") +
            " }"
          : ""),
        s + "(" + d + f + ")"
      );
    },
  };
}
function Se(e, t, r) {
  return r && (!t || t.toLowerCase() === e.toLowerCase());
}
function tn(e, t, r) {
  var n, a;
  if ((t === void 0 && (t = "get"), e.matches(q().defaultIgnore))) return;
  const o =
    (n = e.getAttribute("role")) != null
      ? n
      : (a = Pu(e)) == null
      ? void 0
      : a[0];
  if (o !== "generic" && Se("Role", r, o))
    return Oe("Role", e, o, {
      variant: t,
      name: nu(e, {
        computedStyleSupportsPseudoElements:
          q().computedStyleSupportsPseudoElements,
      }),
    });
  const l = Qp(document, e)
    .map((p) => p.content)
    .join(" ");
  if (Se("LabelText", r, l)) return Oe("LabelText", e, l, { variant: t });
  const u = e.getAttribute("placeholder");
  if (Se("PlaceholderText", r, u))
    return Oe("PlaceholderText", e, u, { variant: t });
  const i = kc(cr(e));
  if (Se("Text", r, i)) return Oe("Text", e, i, { variant: t });
  if (Se("DisplayValue", r, e.value))
    return Oe("DisplayValue", e, kc(e.value), { variant: t });
  const s = e.getAttribute("alt");
  if (Se("AltText", r, s)) return Oe("AltText", e, s, { variant: t });
  const d = e.getAttribute("title");
  if (Se("Title", r, d)) return Oe("Title", e, d, { variant: t });
  const f = e.getAttribute(q().testIdAttribute);
  if (Se("TestId", r, f)) return Oe("TestId", e, f, { variant: t });
}
function wr(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function Fq(e, t) {
  let {
    container: r = _u(),
    timeout: n = q().asyncUtilTimeout,
    showOriginalStackTrace: a = q().showOriginalStackTrace,
    stackTraceError: o,
    interval: l = 50,
    onTimeout: u = (s) => (
      (s.message = q().getElementError(s.message, r).message), s
    ),
    mutationObserverOptions: i = {
      subtree: !0,
      childList: !0,
      attributes: !0,
      characterData: !0,
    },
  } = t;
  if (typeof e != "function")
    throw new TypeError("Received `callback` arg must be a function");
  return new Promise(async (s, d) => {
    let f,
      p,
      m,
      C = !1,
      R = "idle";
    const S = setTimeout(O, n),
      v = Zl();
    if (v) {
      const { unstable_advanceTimersWrapper: y } = q();
      for (w(); !C; ) {
        if (!Zl()) {
          const h = new Error(
            "Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
          );
          a || wr(h, o), d(h);
          return;
        }
        if (
          (y(() => {
            jest.advanceTimersByTime(l);
          }),
          w(),
          C)
        )
          break;
        await y(async () => {
          await new Promise((h) => {
            setTimeout(h, 0), jest.advanceTimersByTime(0);
          });
        });
      }
    } else {
      try {
        Re(r);
      } catch (h) {
        d(h);
        return;
      }
      p = setInterval(P, l);
      const { MutationObserver: y } = Yp(r);
      (m = new y(P)), m.observe(r, i), w();
    }
    function b(y, h) {
      (C = !0),
        clearTimeout(S),
        v || (clearInterval(p), m.disconnect()),
        y ? d(y) : s(h);
    }
    function P() {
      if (Zl()) {
        const y = new Error(
          "Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
        );
        return a || wr(y, o), d(y);
      } else return w();
    }
    function w() {
      if (R !== "pending")
        try {
          const y = Sq(e);
          typeof (y == null ? void 0 : y.then) == "function"
            ? ((R = "pending"),
              y.then(
                (h) => {
                  (R = "resolved"), b(null, h);
                },
                (h) => {
                  (R = "rejected"), (f = h);
                }
              ))
            : b(null, y);
        } catch (y) {
          f = y;
        }
    }
    function O() {
      let y;
      f
        ? ((y = f), !a && y.name === "TestingLibraryElementError" && wr(y, o))
        : ((y = new Error("Timed out in waitFor.")), a || wr(y, o)),
        b(u(y), null);
    }
  });
}
function wu(e, t) {
  const r = new Error("STACK_TRACE_MESSAGE");
  return q().asyncWrapper(() => Fq(e, { stackTraceError: r, ...t }));
}
function Qo(e, t) {
  return q().getElementError(e, t);
}
function Zo(e, t) {
  return Qo(
    e +
      "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).",
    t
  );
}
function nt(e, t, r, n) {
  let {
    exact: a = !0,
    collapseWhitespace: o,
    trim: l,
    normalizer: u,
  } = n === void 0 ? {} : n;
  const i = a ? ge : rt,
    s = We({ collapseWhitespace: o, trim: l, normalizer: u });
  return Array.from(t.querySelectorAll("[" + e + "]")).filter((d) =>
    i(d.getAttribute(e), d, r, s)
  );
}
function av(e, t, r, n) {
  const a = nt(e, t, r, n);
  if (a.length > 1)
    throw Zo("Found multiple elements by [" + e + "=" + r + "]", t);
  return a[0] || null;
}
function Pt(e, t) {
  return function (r) {
    for (
      var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      a[o - 1] = arguments[o];
    const l = e(r, ...a);
    if (l.length > 1) {
      const u = l.map((i) => Qo(null, i).message).join(`

`);
      throw Zo(
        t(r, ...a) +
          `

Here are the matching elements:

` +
          u,
        r
      );
    }
    return l[0] || null;
  };
}
function ov(e, t) {
  return q().getElementError(
    `A better query is available, try this:
` +
      e.toString() +
      `
`,
    t
  );
}
function Cu(e, t) {
  return function (r) {
    for (
      var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      a[o - 1] = arguments[o];
    const l = e(r, ...a);
    if (!l.length) throw q().getElementError(t(r, ...a), r);
    return l;
  };
}
function wt(e) {
  return (t, r, n, a) => wu(() => e(t, r, n), { container: t, ...a });
}
const Fe = (e, t, r) =>
    function (n) {
      for (
        var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1;
        l < a;
        l++
      )
        o[l - 1] = arguments[l];
      const u = e(n, ...o),
        [{ suggest: i = q().throwSuggestions } = {}] = o.slice(-1);
      if (u && i) {
        const s = tn(u, r);
        if (s && !t.endsWith(s.queryName)) throw ov(s.toString(), n);
      }
      return u;
    },
  X = (e, t, r) =>
    function (n) {
      for (
        var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1;
        l < a;
        l++
      )
        o[l - 1] = arguments[l];
      const u = e(n, ...o),
        [{ suggest: i = q().throwSuggestions } = {}] = o.slice(-1);
      if (u.length && i) {
        const s = [
          ...new Set(
            u.map((d) => {
              var f;
              return (f = tn(d, r)) == null ? void 0 : f.toString();
            })
          ),
        ];
        if (s.length === 1 && !t.endsWith(tn(u[0], r).queryName))
          throw ov(s[0], n);
      }
      return u;
    };
function Pe(e, t, r) {
  const n = Fe(Pt(e, t), e.name, "query"),
    a = Cu(e, r),
    o = Pt(a, t),
    l = Fe(o, e.name, "get"),
    u = X(a, e.name.replace("query", "get"), "getAll"),
    i = wt(X(a, e.name, "findAll")),
    s = wt(Fe(o, e.name, "find"));
  return [n, u, l, i, s];
}
var Uq = Object.freeze({
  __proto__: null,
  getElementError: Qo,
  wrapAllByQueryWithSuggestion: X,
  wrapSingleQueryWithSuggestion: Fe,
  getMultipleElementsFoundError: Zo,
  queryAllByAttribute: nt,
  queryByAttribute: av,
  makeSingleQuery: Pt,
  makeGetAllQuery: Cu,
  makeFindQuery: wt,
  buildQueries: Pe,
});
function Vq(e) {
  return Array.from(e.querySelectorAll("label,input"))
    .map((t) => ({ node: t, textToMatch: Mi(t) }))
    .filter((t) => {
      let { textToMatch: r } = t;
      return r !== null;
    });
}
const Hq = function (e, t, r) {
    let {
      exact: n = !0,
      trim: a,
      collapseWhitespace: o,
      normalizer: l,
    } = r === void 0 ? {} : r;
    const u = n ? ge : rt,
      i = We({ collapseWhitespace: o, trim: a, normalizer: l });
    return Vq(e)
      .filter((d) => {
        let { node: f, textToMatch: p } = d;
        return u(p, f, t, i);
      })
      .map((d) => {
        let { node: f } = d;
        return f;
      });
  },
  Yt = function (e, t, r) {
    let {
      selector: n = "*",
      exact: a = !0,
      collapseWhitespace: o,
      trim: l,
      normalizer: u,
    } = r === void 0 ? {} : r;
    Re(e);
    const i = a ? ge : rt,
      s = We({ collapseWhitespace: o, trim: l, normalizer: u }),
      d = Array.from(e.querySelectorAll("*"))
        .filter((f) => Xp(f).length || f.hasAttribute("aria-labelledby"))
        .reduce((f, p) => {
          const m = Qp(e, p, { selector: n });
          m.filter((R) => !!R.formControl).forEach((R) => {
            i(R.content, R.formControl, t, s) &&
              R.formControl &&
              f.push(R.formControl);
          });
          const C = m.filter((R) => !!R.content).map((R) => R.content);
          return (
            i(C.join(" "), p, t, s) && f.push(p),
            C.length > 1 &&
              C.forEach((R, S) => {
                i(R, p, t, s) && f.push(p);
                const v = [...C];
                v.splice(S, 1),
                  v.length > 1 && i(v.join(" "), p, t, s) && f.push(p);
              }),
            f
          );
        }, [])
        .concat(nt("aria-label", e, t, { exact: a, normalizer: s }));
    return Array.from(new Set(d)).filter((f) => f.matches(n));
  },
  Ze = function (e, t) {
    for (
      var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2;
      a < r;
      a++
    )
      n[a - 2] = arguments[a];
    const o = Yt(e, t, ...n);
    if (!o.length) {
      const l = Hq(e, t, ...n);
      if (l.length) {
        const u = l.map((i) => Wq(e, i)).filter((i) => !!i);
        throw u.length
          ? q().getElementError(
              u.map(
                (i) =>
                  "Found a label with the text of: " +
                  t +
                  ", however the element associated with this label (<" +
                  i +
                  " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" +
                  i +
                  " />, you can use aria-label or aria-labelledby instead."
              ).join(`

`),
              e
            )
          : q().getElementError(
              "Found a label with the text of: " +
                t +
                `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`,
              e
            );
      } else
        throw q().getElementError(
          "Unable to find a label with the text of: " + t,
          e
        );
    }
    return o;
  };
function Wq(e, t) {
  const r = t.getAttribute("for");
  if (!r) return null;
  const n = e.querySelector('[id="' + r + '"]');
  return n ? n.tagName.toLowerCase() : null;
}
const lv = (e, t) => "Found multiple elements with the text of: " + t,
  iv = Fe(Pt(Yt, lv), Yt.name, "query"),
  uv = Pt(Ze, lv),
  sv = wt(X(Ze, Ze.name, "findAll")),
  cv = wt(Fe(uv, Ze.name, "find")),
  dv = X(Ze, Ze.name, "getAll"),
  fv = Fe(uv, Ze.name, "get"),
  pv = X(Yt, Yt.name, "queryAll"),
  Bi = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return Re(t[0]), nt("placeholder", ...t);
  },
  zq = (e, t) => "Found multiple elements with the placeholder text of: " + t,
  Kq = (e, t) => "Unable to find an element with the placeholder text of: " + t,
  vv = X(Bi, Bi.name, "queryAll"),
  [yv, mv, bv, hv, gv] = Pe(Bi, zq, Kq),
  Ii = function (e, t, r) {
    let {
      selector: n = "*",
      exact: a = !0,
      collapseWhitespace: o,
      trim: l,
      ignore: u = q().defaultIgnore,
      normalizer: i,
    } = r === void 0 ? {} : r;
    Re(e);
    const s = a ? ge : rt,
      d = We({ collapseWhitespace: o, trim: l, normalizer: i });
    let f = [];
    return (
      typeof e.matches == "function" && e.matches(n) && (f = [e]),
      [...f, ...Array.from(e.querySelectorAll(n))]
        .filter((p) => !u || !p.matches(u))
        .filter((p) => s(cr(p), p, t, d))
    );
  },
  Gq = (e, t) => "Found multiple elements with the text: " + t,
  Yq = function (e, t, r) {
    r === void 0 && (r = {});
    const { collapseWhitespace: n, trim: a, normalizer: o, selector: l } = r,
      i = We({ collapseWhitespace: n, trim: a, normalizer: o })(t.toString()),
      s = i !== t.toString(),
      d = (l ?? "*") !== "*";
    return (
      "Unable to find an element with the text: " +
      (s ? i + " (normalized from '" + t + "')" : t) +
      (d ? ", which matches selector '" + l + "'" : "") +
      ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible."
    );
  },
  Ev = X(Ii, Ii.name, "queryAll"),
  [_v, Rv, Pv, wv, Cv] = Pe(Ii, Gq, Yq),
  ji = function (e, t, r) {
    let {
      exact: n = !0,
      collapseWhitespace: a,
      trim: o,
      normalizer: l,
    } = r === void 0 ? {} : r;
    Re(e);
    const u = n ? ge : rt,
      i = We({ collapseWhitespace: a, trim: o, normalizer: l });
    return Array.from(e.querySelectorAll("input,textarea,select")).filter((s) =>
      s.tagName === "SELECT"
        ? Array.from(s.options)
            .filter((f) => f.selected)
            .some((f) => u(cr(f), f, t, i))
        : u(s.value, s, t, i)
    );
  },
  Jq = (e, t) => "Found multiple elements with the display value: " + t + ".",
  Xq = (e, t) => "Unable to find an element with the display value: " + t + ".",
  Ov = X(ji, ji.name, "queryAll"),
  [Sv, $v, Tv, qv, Av] = Pe(ji, Jq, Xq),
  Qq = /^(img|input|area|.+-.+)$/i,
  Ni = function (e, t, r) {
    return (
      r === void 0 && (r = {}),
      Re(e),
      nt("alt", e, t, r).filter((n) => Qq.test(n.tagName))
    );
  },
  Zq = (e, t) => "Found multiple elements with the alt text: " + t,
  eA = (e, t) => "Unable to find an element with the alt text: " + t,
  xv = X(Ni, Ni.name, "queryAll"),
  [Mv, Bv, Iv, jv, Nv] = Pe(Ni, Zq, eA),
  tA = (e) => {
    var t;
    return (
      e.tagName.toLowerCase() === "title" &&
      ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) ===
        "svg"
    );
  },
  Di = function (e, t, r) {
    let {
      exact: n = !0,
      collapseWhitespace: a,
      trim: o,
      normalizer: l,
    } = r === void 0 ? {} : r;
    Re(e);
    const u = n ? ge : rt,
      i = We({ collapseWhitespace: a, trim: o, normalizer: l });
    return Array.from(e.querySelectorAll("[title], svg > title")).filter(
      (s) => u(s.getAttribute("title"), s, t, i) || (tA(s) && u(cr(s), s, t, i))
    );
  },
  rA = (e, t) => "Found multiple elements with the title: " + t + ".",
  nA = (e, t) => "Unable to find an element with the title: " + t + ".",
  Dv = X(Di, Di.name, "queryAll"),
  [kv, Lv, Fv, Uv, Vv] = Pe(Di, rA, nA);
function ki(e, t, r) {
  let {
    exact: n = !0,
    collapseWhitespace: a,
    hidden: o = q().defaultHidden,
    name: l,
    description: u,
    trim: i,
    normalizer: s,
    queryFallbacks: d = !1,
    selected: f,
    checked: p,
    pressed: m,
    current: C,
    level: R,
    expanded: S,
  } = r === void 0 ? {} : r;
  Re(e);
  const v = n ? ge : rt,
    b = We({ collapseWhitespace: a, trim: i, normalizer: s });
  if (f !== void 0) {
    var P;
    if (
      ((P = vt.get(t)) == null ? void 0 : P.props["aria-selected"]) === void 0
    )
      throw new Error('"aria-selected" is not supported on role "' + t + '".');
  }
  if (p !== void 0) {
    var w;
    if (((w = vt.get(t)) == null ? void 0 : w.props["aria-checked"]) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + t + '".');
  }
  if (m !== void 0) {
    var O;
    if (((O = vt.get(t)) == null ? void 0 : O.props["aria-pressed"]) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + t + '".');
  }
  if (C !== void 0) {
    var y;
    if (((y = vt.get(t)) == null ? void 0 : y.props["aria-current"]) === void 0)
      throw new Error('"aria-current" is not supported on role "' + t + '".');
  }
  if (R !== void 0 && t !== "heading")
    throw new Error('Role "' + t + '" cannot have "level" property.');
  if (S !== void 0) {
    var h;
    if (
      ((h = vt.get(t)) == null ? void 0 : h.props["aria-expanded"]) === void 0
    )
      throw new Error('"aria-expanded" is not supported on role "' + t + '".');
  }
  const E = new WeakMap();
  function I(c) {
    return E.has(c) || E.set(c, tv(c)), E.get(c);
  }
  return Array.from(e.querySelectorAll(aA(t, n, s ? b : void 0)))
    .filter((c) => {
      if (c.hasAttribute("role")) {
        const K = c.getAttribute("role");
        if (d)
          return K.split(" ")
            .filter(Boolean)
            .some((it) => v(it, c, t, b));
        if (s) return v(K, c, t, b);
        const [ce] = K.split(" ");
        return v(ce, c, t, b);
      }
      return Pu(c).some((K) => v(K, c, t, b));
    })
    .filter((c) =>
      f !== void 0
        ? f === Bq(c)
        : p !== void 0
        ? p === Iq(c)
        : m !== void 0
        ? m === jq(c)
        : C !== void 0
        ? C === Nq(c)
        : S !== void 0
        ? S === Dq(c)
        : R !== void 0
        ? R === kq(c)
        : !0
    )
    .filter((c) =>
      l === void 0
        ? !0
        : ge(
            nu(c, {
              computedStyleSupportsPseudoElements:
                q().computedStyleSupportsPseudoElements,
            }),
            c,
            l,
            (z) => z
          )
    )
    .filter((c) =>
      u === void 0
        ? !0
        : ge(
            _f(c, {
              computedStyleSupportsPseudoElements:
                q().computedStyleSupportsPseudoElements,
            }),
            c,
            u,
            (z) => z
          )
    )
    .filter((c) =>
      o === !1 ? Xo(c, { isSubtreeInaccessible: I }) === !1 : !0
    );
}
function aA(e, t, r) {
  var n;
  if (typeof e != "string") return "*";
  const a = t && !r ? '*[role~="' + e + '"]' : "*[role]",
    o = (n = Fp.get(e)) != null ? n : new Set(),
    l = new Set(
      Array.from(o).map((u) => {
        let { name: i } = u;
        return i;
      })
    );
  return [a].concat(Array.from(l)).join(",");
}
const Hv = (e) => {
    let t = "";
    return (
      e === void 0
        ? (t = "")
        : typeof e == "string"
        ? (t = ' and name "' + e + '"')
        : (t = " and name `" + e + "`"),
      t
    );
  },
  oA = function (e, t, r) {
    let { name: n } = r === void 0 ? {} : r;
    return 'Found multiple elements with the role "' + t + '"' + Hv(n);
  },
  lA = function (e, t, r) {
    let {
      hidden: n = q().defaultHidden,
      name: a,
      description: o,
    } = r === void 0 ? {} : r;
    if (q()._disableExpensiveErrorDiagnostics)
      return 'Unable to find role="' + t + '"' + Hv(a);
    let l = "";
    Array.from(e.children).forEach((d) => {
      l += nv(d, { hidden: n, includeDescription: o !== void 0 });
    });
    let u;
    l.length === 0
      ? n === !1
        ? (u =
            "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole")
        : (u = "There are no available roles.")
      : (u = (
          `
Here are the ` +
          (n === !1 ? "accessible" : "available") +
          ` roles:

  ` +
          l
            .replace(
              /\n/g,
              `
  `
            )
            .replace(
              /\n\s\s\n/g,
              `

`
            ) +
          `
`
        ).trim());
    let i = "";
    a === void 0
      ? (i = "")
      : typeof a == "string"
      ? (i = ' and name "' + a + '"')
      : (i = " and name `" + a + "`");
    let s = "";
    return (
      o === void 0
        ? (s = "")
        : typeof o == "string"
        ? (s = ' and description "' + o + '"')
        : (s = " and description `" + o + "`"),
      (
        `
Unable to find an ` +
        (n === !1 ? "accessible " : "") +
        'element with the role "' +
        t +
        '"' +
        i +
        s +
        `

` +
        u
      ).trim()
    );
  },
  Wv = X(ki, ki.name, "queryAll"),
  [zv, Kv, Gv, Yv, Jv] = Pe(ki, oA, lA),
  Ou = () => q().testIdAttribute,
  Li = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return Re(t[0]), nt(Ou(), ...t);
  },
  iA = (e, t) => "Found multiple elements by: [" + Ou() + '="' + t + '"]',
  uA = (e, t) => "Unable to find an element by: [" + Ou() + '="' + t + '"]',
  Xv = X(Li, Li.name, "queryAll"),
  [Qv, Zv, ey, ty, ry] = Pe(Li, iA, uA);
var rn = Object.freeze({
  __proto__: null,
  queryAllByLabelText: pv,
  queryByLabelText: iv,
  getAllByLabelText: dv,
  getByLabelText: fv,
  findAllByLabelText: sv,
  findByLabelText: cv,
  queryByPlaceholderText: yv,
  queryAllByPlaceholderText: vv,
  getByPlaceholderText: bv,
  getAllByPlaceholderText: mv,
  findAllByPlaceholderText: hv,
  findByPlaceholderText: gv,
  queryByText: _v,
  queryAllByText: Ev,
  getByText: Pv,
  getAllByText: Rv,
  findAllByText: wv,
  findByText: Cv,
  queryByDisplayValue: Sv,
  queryAllByDisplayValue: Ov,
  getByDisplayValue: Tv,
  getAllByDisplayValue: $v,
  findAllByDisplayValue: qv,
  findByDisplayValue: Av,
  queryByAltText: Mv,
  queryAllByAltText: xv,
  getByAltText: Iv,
  getAllByAltText: Bv,
  findAllByAltText: jv,
  findByAltText: Nv,
  queryByTitle: kv,
  queryAllByTitle: Dv,
  getByTitle: Fv,
  getAllByTitle: Lv,
  findAllByTitle: Uv,
  findByTitle: Vv,
  queryByRole: zv,
  queryAllByRole: Wv,
  getAllByRole: Kv,
  getByRole: Gv,
  findAllByRole: Yv,
  findByRole: Jv,
  queryByTestId: Qv,
  queryAllByTestId: Xv,
  getByTestId: ey,
  getAllByTestId: Zv,
  findAllByTestId: ty,
  findByTestId: ry,
});
function Fi(e, t, r) {
  return (
    t === void 0 && (t = rn),
    r === void 0 && (r = {}),
    Object.keys(t).reduce((n, a) => {
      const o = t[a];
      return (n[a] = o.bind(null, e)), n;
    }, r)
  );
}
const ny = (e) => !e || (Array.isArray(e) && !e.length);
function Fc(e) {
  if (ny(e))
    throw new Error(
      "The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal."
    );
}
async function sA(e, t) {
  const r = new Error("Timed out in waitForElementToBeRemoved.");
  if (typeof e != "function") {
    Fc(e);
    const a = (Array.isArray(e) ? e : [e]).map((o) => {
      let l = o.parentElement;
      if (l === null) return () => null;
      for (; l.parentElement; ) l = l.parentElement;
      return () => (l.contains(o) ? o : null);
    });
    e = () => a.map((o) => o()).filter(Boolean);
  }
  return (
    Fc(e()),
    wu(() => {
      let n;
      try {
        n = e();
      } catch (a) {
        if (a.name === "TestingLibraryElementError") return;
        throw a;
      }
      if (!ny(n)) throw r;
    }, t)
  );
}
const Uc = {
    copy: {
      EventType: "ClipboardEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    cut: {
      EventType: "ClipboardEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    paste: {
      EventType: "ClipboardEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    compositionEnd: {
      EventType: "CompositionEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    compositionStart: {
      EventType: "CompositionEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    compositionUpdate: {
      EventType: "CompositionEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    keyDown: {
      EventType: "KeyboardEvent",
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
    },
    keyPress: {
      EventType: "KeyboardEvent",
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
    },
    keyUp: {
      EventType: "KeyboardEvent",
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
    },
    focus: {
      EventType: "FocusEvent",
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    blur: {
      EventType: "FocusEvent",
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    focusIn: {
      EventType: "FocusEvent",
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    focusOut: {
      EventType: "FocusEvent",
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    change: {
      EventType: "Event",
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    input: {
      EventType: "InputEvent",
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    invalid: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !0 },
    },
    submit: {
      EventType: "Event",
      defaultInit: { bubbles: !0, cancelable: !0 },
    },
    reset: { EventType: "Event", defaultInit: { bubbles: !0, cancelable: !0 } },
    click: {
      EventType: "MouseEvent",
      defaultInit: { bubbles: !0, cancelable: !0, button: 0, composed: !0 },
    },
    contextMenu: {
      EventType: "MouseEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dblClick: {
      EventType: "MouseEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    drag: {
      EventType: "DragEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dragEnd: {
      EventType: "DragEvent",
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    dragEnter: {
      EventType: "DragEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dragExit: {
      EventType: "DragEvent",
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    dragLeave: {
      EventType: "DragEvent",
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    dragOver: {
      EventType: "DragEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dragStart: {
      EventType: "DragEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    drop: {
      EventType: "DragEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseDown: {
      EventType: "MouseEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseEnter: {
      EventType: "MouseEvent",
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    mouseLeave: {
      EventType: "MouseEvent",
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    mouseMove: {
      EventType: "MouseEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseOut: {
      EventType: "MouseEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseOver: {
      EventType: "MouseEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseUp: {
      EventType: "MouseEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    select: {
      EventType: "Event",
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    touchCancel: {
      EventType: "TouchEvent",
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    touchEnd: {
      EventType: "TouchEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    touchMove: {
      EventType: "TouchEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    touchStart: {
      EventType: "TouchEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    resize: {
      EventType: "UIEvent",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    scroll: {
      EventType: "UIEvent",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    wheel: {
      EventType: "WheelEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    abort: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    canPlay: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    canPlayThrough: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    durationChange: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    emptied: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    encrypted: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    ended: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    loadedData: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    loadedMetadata: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    loadStart: {
      EventType: "ProgressEvent",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    pause: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    play: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    playing: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    progress: {
      EventType: "ProgressEvent",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    rateChange: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    seeked: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    seeking: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    stalled: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    suspend: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    timeUpdate: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    volumeChange: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    waiting: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    load: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    error: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    animationStart: {
      EventType: "AnimationEvent",
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    animationEnd: {
      EventType: "AnimationEvent",
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    animationIteration: {
      EventType: "AnimationEvent",
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    transitionCancel: {
      EventType: "TransitionEvent",
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    transitionEnd: {
      EventType: "TransitionEvent",
      defaultInit: { bubbles: !0, cancelable: !0 },
    },
    transitionRun: {
      EventType: "TransitionEvent",
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    transitionStart: {
      EventType: "TransitionEvent",
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    pointerOver: {
      EventType: "PointerEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerEnter: {
      EventType: "PointerEvent",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    pointerDown: {
      EventType: "PointerEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerMove: {
      EventType: "PointerEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerUp: {
      EventType: "PointerEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerCancel: {
      EventType: "PointerEvent",
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    pointerOut: {
      EventType: "PointerEvent",
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerLeave: {
      EventType: "PointerEvent",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    gotPointerCapture: {
      EventType: "PointerEvent",
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    lostPointerCapture: {
      EventType: "PointerEvent",
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    popState: {
      EventType: "PopStateEvent",
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    offline: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    online: {
      EventType: "Event",
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
  },
  Vc = { doubleClick: "dblClick" };
function Jt(e, t) {
  return q().eventWrapper(() => {
    if (!t)
      throw new Error(
        "Unable to fire an event - please provide an event object."
      );
    if (!e)
      throw new Error(
        'Unable to fire a "' +
          t.type +
          '" event - please provide a DOM element.'
      );
    return e.dispatchEvent(t);
  });
}
function kr(e, t, r, n) {
  let { EventType: a = "Event", defaultInit: o = {} } = n === void 0 ? {} : n;
  if (!t)
    throw new Error(
      'Unable to fire a "' + e + '" event - please provide a DOM element.'
    );
  const l = { ...o, ...r },
    { target: { value: u, files: i, ...s } = {} } = l;
  u !== void 0 && cA(t, u),
    i !== void 0 &&
      Object.defineProperty(t, "files", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: i,
      }),
    Object.assign(t, s);
  const d = Yp(t),
    f = d[a] || d.Event;
  let p;
  if (typeof f == "function") p = new f(e, l);
  else {
    p = d.document.createEvent(a);
    const { bubbles: C, cancelable: R, detail: S, ...v } = l;
    p.initEvent(e, C, R, S),
      Object.keys(v).forEach((b) => {
        p[b] = v[b];
      });
  }
  return (
    ["dataTransfer", "clipboardData"].forEach((C) => {
      const R = l[C];
      typeof R == "object" &&
        (typeof d.DataTransfer == "function"
          ? Object.defineProperty(p, C, {
              value: Object.getOwnPropertyNames(R).reduce(
                (S, v) => (Object.defineProperty(S, v, { value: R[v] }), S),
                new d.DataTransfer()
              ),
            })
          : Object.defineProperty(p, C, { value: R }));
    }),
    p
  );
}
Object.keys(Uc).forEach((e) => {
  const { EventType: t, defaultInit: r } = Uc[e],
    n = e.toLowerCase();
  (kr[e] = (a, o) => kr(n, a, o, { EventType: t, defaultInit: r })),
    (Jt[e] = (a, o) => Jt(a, kr[e](a, o)));
});
function cA(e, t) {
  const { set: r } = Object.getOwnPropertyDescriptor(e, "value") || {},
    n = Object.getPrototypeOf(e),
    { set: a } = Object.getOwnPropertyDescriptor(n, "value") || {};
  if (a && r !== a) a.call(e, t);
  else if (r) r.call(e, t);
  else throw new Error("The given element does not have a value setter");
}
Object.keys(Vc).forEach((e) => {
  const t = Vc[e];
  Jt[e] = function () {
    return Jt[t](...arguments);
  };
});
function dA(e) {
  return e.replace(
    /[ \t]*[\n][ \t]*/g,
    `
`
  );
}
function fA(e) {
  return iq.compressToEncodedURIComponent(dA(e));
}
function pA(e) {
  return "https://testing-playground.com/#markup=" + fA(e);
}
const vA = (e, t, r) =>
    Array.isArray(e) ? e.forEach((n) => xi(n, t, r)) : xi(e, t, r),
  yA = function (e) {
    if ((e === void 0 && (e = _u().body), !e || !("innerHTML" in e))) {
      console.log("The element you're providing isn't a valid DOM element.");
      return;
    }
    if (!e.innerHTML) {
      console.log("The provided element doesn't have any children.");
      return;
    }
    const t = pA(e.innerHTML);
    return (
      console.log(
        `Open this URL in your browser

` + t
      ),
      t
    );
  },
  Hc = { debug: vA, logTestingPlaygroundURL: yA },
  mA =
    typeof document < "u" && document.body
      ? Fi(document.body, rn, Hc)
      : Object.keys(rn).reduce(
          (e, t) => (
            (e[t] = () => {
              throw new TypeError(
                "For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error"
              );
            }),
            e
          ),
          Hc
        ),
  ay = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        buildQueries: Pe,
        configure: $q,
        createEvent: kr,
        findAllByAltText: jv,
        findAllByDisplayValue: qv,
        findAllByLabelText: sv,
        findAllByPlaceholderText: hv,
        findAllByRole: Yv,
        findAllByTestId: ty,
        findAllByText: wv,
        findAllByTitle: Uv,
        findByAltText: Nv,
        findByDisplayValue: Av,
        findByLabelText: cv,
        findByPlaceholderText: gv,
        findByRole: Jv,
        findByTestId: ry,
        findByText: Cv,
        findByTitle: Vv,
        fireEvent: Jt,
        getAllByAltText: Bv,
        getAllByDisplayValue: $v,
        getAllByLabelText: dv,
        getAllByPlaceholderText: mv,
        getAllByRole: Kv,
        getAllByTestId: Zv,
        getAllByText: Rv,
        getAllByTitle: Lv,
        getByAltText: Iv,
        getByDisplayValue: Tv,
        getByLabelText: fv,
        getByPlaceholderText: bv,
        getByRole: Gv,
        getByTestId: ey,
        getByText: Pv,
        getByTitle: Fv,
        getConfig: q,
        getDefaultNormalizer: Ru,
        getElementError: Qo,
        getMultipleElementsFoundError: Zo,
        getNodeText: cr,
        getQueriesForElement: Fi,
        getRoles: rv,
        getSuggestedQuery: tn,
        isInaccessible: Xo,
        logDOM: xi,
        logRoles: Mq,
        makeFindQuery: wt,
        makeGetAllQuery: Cu,
        makeSingleQuery: Pt,
        prettyDOM: Gt,
        prettyFormat: cb,
        queries: rn,
        queryAllByAltText: xv,
        queryAllByAttribute: nt,
        queryAllByDisplayValue: Ov,
        queryAllByLabelText: pv,
        queryAllByPlaceholderText: vv,
        queryAllByRole: Wv,
        queryAllByTestId: Xv,
        queryAllByText: Ev,
        queryAllByTitle: Dv,
        queryByAltText: Mv,
        queryByAttribute: av,
        queryByDisplayValue: Sv,
        queryByLabelText: iv,
        queryByPlaceholderText: yv,
        queryByRole: zv,
        queryByTestId: Qv,
        queryByText: _v,
        queryByTitle: kv,
        queryHelpers: Uq,
        screen: mA,
        waitFor: wu,
        waitForElementToBeRemoved: sA,
        within: Fi,
        wrapAllByQueryWithSuggestion: X,
        wrapSingleQueryWithSuggestion: Fe,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
var oy = {},
  at = {};
const Q = Ed(ay);
var N = {},
  Su = {};
Object.defineProperty(Su, "__esModule", { value: !0 });
Su.getMouseEventOptions = bA;
function Wc(e) {
  return (
    e === "mousedown" || e === "mouseup" || e === "click" || e === "dblclick"
  );
}
const zc = { none: 0, primary: 1, secondary: 2, auxiliary: 4 },
  Kc = { primary: 0, auxiliary: 1, secondary: 2 };
function Gc(e, t) {
  var r;
  const [n, a] = t === "button" ? [Kc, zc] : [zc, Kc],
    o =
      (r = Object.entries(n).find(([, l]) => l === e)) == null ? void 0 : r[0];
  return o && Object.prototype.hasOwnProperty.call(a, o) ? a[o] : 0;
}
function Yc(e, t, r) {
  return Wc(e)
    ? typeof t[r] == "number"
      ? t[r]
      : r === "button" && typeof t.buttons == "number"
      ? Gc(t.buttons, "buttons")
      : r === "buttons" && typeof t.button == "number"
      ? Gc(t.button, "button")
      : r != "button" && Wc(e)
      ? 1
      : 0
    : 0;
}
function bA(e, t, r = 0) {
  var n;
  return (
    (t = (n = t) != null ? n : {}),
    {
      ...t,
      detail: e === "mousedown" || e === "mouseup" || e === "click" ? 1 + r : r,
      buttons: Yc(e, t, "buttons"),
      button: Yc(e, t, "button"),
    }
  );
}
var $u = {},
  we = {};
Object.defineProperty(we, "__esModule", { value: !0 });
we.isElementType = hA;
function hA(e, t, r) {
  return (e.namespaceURI &&
    e.namespaceURI !== "http://www.w3.org/1999/xhtml") ||
    ((t = Array.isArray(t) ? t : [t]), !t.includes(e.tagName.toLowerCase()))
    ? !1
    : r
    ? Object.entries(r).every(([n, a]) => e[n] === a)
    : !0;
}
Object.defineProperty($u, "__esModule", { value: !0 });
$u.isClickableInput = EA;
var Jc = we;
const gA = [
  "button",
  "color",
  "file",
  "image",
  "reset",
  "submit",
  "checkbox",
  "radio",
];
function EA(e) {
  return (
    (0, Jc.isElementType)(e, "button") ||
    ((0, Jc.isElementType)(e, "input") && gA.includes(e.type))
  );
}
var Tu = {};
Object.defineProperty(Tu, "__esModule", { value: !0 });
Tu.buildTimeValue = _A;
function _A(e) {
  const t = e.replace(/\D/g, "");
  if (t.length < 2) return e;
  const r = parseInt(t[0], 10),
    n = parseInt(t[1], 10);
  if (r >= 3 || (r === 2 && n >= 4)) {
    let a;
    return r >= 3 ? (a = 1) : (a = 2), Xc(t, a);
  }
  return e.length === 2 ? e : Xc(t, 2);
}
function Xc(e, t) {
  const r = e.slice(0, t),
    n = Math.min(parseInt(r, 10), 23),
    a = e.slice(t),
    o = parseInt(a, 10),
    l = Math.min(o, 59);
  return `${n.toString().padStart(2, "0")}:${l.toString().padStart(2, "0")}`;
}
var qu = {},
  ot = {};
Object.defineProperty(ot, "__esModule", { value: !0 });
ot.getSelectionRange = iy;
ot.hasSelectionSupport = Au;
ot.setSelectionRange = RA;
var bt = we,
  Ui;
(function (e) {
  (e.text = "text"),
    (e.search = "search"),
    (e.url = "url"),
    (e.tel = "tel"),
    (e.password = "password");
})(Ui || (Ui = {}));
const ly = Symbol("inputSelection");
function Au(e) {
  return (
    (0, bt.isElementType)(e, "textarea") ||
    ((0, bt.isElementType)(e, "input") && !!Ui[e.type])
  );
}
function iy(e) {
  if (Au(e))
    return { selectionStart: e.selectionStart, selectionEnd: e.selectionEnd };
  if ((0, bt.isElementType)(e, "input")) {
    var t;
    return (t = e[ly]) != null
      ? t
      : { selectionStart: null, selectionEnd: null };
  }
  const r = e.ownerDocument.getSelection();
  if (r != null && r.rangeCount && e.contains(r.focusNode)) {
    const n = r.getRangeAt(0);
    return { selectionStart: n.startOffset, selectionEnd: n.endOffset };
  } else return { selectionStart: null, selectionEnd: null };
}
function RA(e, t, r) {
  const { selectionStart: n, selectionEnd: a } = iy(e);
  if (
    (n === t && a === r) ||
    (Au(e) && e.setSelectionRange(t, r),
    (0, bt.isElementType)(e, "input") &&
      (e[ly] = { selectionStart: t, selectionEnd: r }),
    (0, bt.isElementType)(e, "input") || (0, bt.isElementType)(e, "textarea"))
  )
    return;
  const o = e.ownerDocument.createRange();
  o.selectNodeContents(e),
    e.firstChild && (o.setStart(e.firstChild, t), o.setEnd(e.firstChild, r));
  const l = e.ownerDocument.getSelection();
  l && (l.removeAllRanges(), l.addRange(o));
}
var $t = {},
  fr = {};
Object.defineProperty(fr, "__esModule", { value: !0 });
fr.isContentEditable = PA;
function PA(e) {
  return (
    e.hasAttribute("contenteditable") &&
    (e.getAttribute("contenteditable") == "true" ||
      e.getAttribute("contenteditable") == "")
  );
}
Object.defineProperty($t, "__esModule", { value: !0 });
$t.getValue = CA;
var wA = fr;
function CA(e) {
  return e ? ((0, wA.isContentEditable)(e) ? e.textContent : e.value) : null;
}
var el = {};
Object.defineProperty(el, "__esModule", { value: !0 });
el.isValidDateValue = OA;
function OA(e, t) {
  const r = e.cloneNode();
  return (r.value = t), r.value === t;
}
var tl = {};
Object.defineProperty(tl, "__esModule", { value: !0 });
tl.isValidInputTimeValue = SA;
function SA(e, t) {
  const r = e.cloneNode();
  return (r.value = t), r.value === t;
}
Object.defineProperty(qu, "__esModule", { value: !0 });
qu.calculateNewValue = AA;
var $A = ot,
  TA = $t,
  qA = el,
  Qc = tl;
function AA(
  e,
  t,
  r = (() => {
    var o;
    return (o = (0, TA.getValue)(t)) != null ? o : "";
  })(),
  n = (0, $A.getSelectionRange)(t),
  a
) {
  const o = n.selectionStart === null ? r.length : n.selectionStart,
    l = n.selectionEnd === null ? r.length : n.selectionEnd,
    u = Math.max(0, o === l && a === "backward" ? o - 1 : o),
    i = r.substring(0, u),
    s = Math.min(r.length, o === l && a === "forward" ? l + 1 : l),
    d = r.substring(s, r.length);
  let f = `${i}${e}${d}`;
  const p = u + e.length;
  return (
    t.type === "date" && !(0, qA.isValidDateValue)(t, f) && (f = r),
    t.type === "time" &&
      !(0, Qc.isValidInputTimeValue)(t, f) &&
      ((0, Qc.isValidInputTimeValue)(t, e) ? (f = e) : (f = r)),
    { newValue: f, newSelectionStart: p }
  );
}
var rl = {};
Object.defineProperty(rl, "__esModule", { value: !0 });
rl.isCursorAtEnd = MA;
rl.isCursorAtStart = BA;
var uy = ot,
  xA = $t;
function MA(e) {
  var t;
  const { selectionStart: r, selectionEnd: n } = (0, uy.getSelectionRange)(e);
  return (
    r === n && (r ?? 0) === ((t = (0, xA.getValue)(e)) != null ? t : "").length
  );
}
function BA(e) {
  const { selectionStart: t, selectionEnd: r } = (0, uy.getSelectionRange)(e);
  return t === r && (t ?? 0) === 0;
}
var xu = {};
Object.defineProperty(xu, "__esModule", { value: !0 });
xu.hasUnreliableEmptyValue = jA;
var IA = we,
  Vi;
(function (e) {
  e.number = "number";
})(Vi || (Vi = {}));
function jA(e) {
  return (0, IA.isElementType)(e, "input") && !!Vi[e.type];
}
var lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.editableInputTypes = void 0;
lt.isEditable = DA;
lt.isEditableInput = cy;
var sy = we,
  NA = fr;
function DA(e) {
  return (
    cy(e) ||
    (0, sy.isElementType)(e, "textarea", { readOnly: !1 }) ||
    (0, NA.isContentEditable)(e)
  );
}
let nn;
lt.editableInputTypes = nn;
(function (e) {
  (e.text = "text"),
    (e.date = "date"),
    (e["datetime-local"] = "datetime-local"),
    (e.email = "email"),
    (e.month = "month"),
    (e.number = "number"),
    (e.password = "password"),
    (e.search = "search"),
    (e.tel = "tel"),
    (e.time = "time"),
    (e.url = "url"),
    (e.week = "week");
})(nn || (lt.editableInputTypes = nn = {}));
function cy(e) {
  return (0, sy.isElementType)(e, "input", { readOnly: !1 }) && !!nn[e.type];
}
var Mu = {};
Object.defineProperty(Mu, "__esModule", { value: !0 });
Mu.getSpaceUntilMaxLength = LA;
var Zc = we,
  kA = $t,
  Hi;
(function (e) {
  (e.email = "email"),
    (e.password = "password"),
    (e.search = "search"),
    (e.telephone = "telephone"),
    (e.text = "text"),
    (e.url = "url");
})(Hi || (Hi = {}));
function LA(e) {
  const t = (0, kA.getValue)(e);
  if (t === null) return;
  const r = FA(e);
  return r ? r - t.length : void 0;
}
function FA(e) {
  var t;
  if (!UA(e)) return;
  const r = (t = e.getAttribute("maxlength")) != null ? t : "";
  return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0;
}
function UA(e) {
  return (
    (0, Zc.isElementType)(e, "textarea") ||
    ((0, Zc.isElementType)(e, "input") && !!Hi[e.type])
  );
}
var Bu = {},
  pr = {};
Object.defineProperty(pr, "__esModule", { value: !0 });
pr.isDisabled = VA;
function VA(e) {
  return !!(e && e.disabled);
}
Object.defineProperty(Bu, "__esModule", { value: !0 });
Bu.getActiveElement = dy;
var HA = pr;
function dy(e) {
  const t = e.activeElement;
  return t != null && t.shadowRoot
    ? dy(t.shadowRoot)
    : (0, HA.isDisabled)(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : t;
}
var Iu = {},
  nl = {};
Object.defineProperty(nl, "__esModule", { value: !0 });
nl.isLabelWithInternallyDisabledControl = KA;
var WA = pr,
  zA = we;
function KA(e) {
  if (!(0, zA.isElementType)(e, "label")) return !1;
  const t = e.control;
  return !!(t && e.contains(t) && (0, WA.isDisabled)(t));
}
var vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
vr.FOCUSABLE_SELECTOR = void 0;
const GA = [
  "input:not([type=hidden]):not([disabled])",
  "button:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[contenteditable=""]',
  '[contenteditable="true"]',
  "a[href]",
  "[tabindex]:not([disabled])",
].join(", ");
vr.FOCUSABLE_SELECTOR = GA;
Object.defineProperty(Iu, "__esModule", { value: !0 });
Iu.isFocusable = XA;
var YA = nl,
  JA = vr;
function XA(e) {
  return (
    !(0, YA.isLabelWithInternallyDisabledControl)(e) &&
    e.matches(JA.FOCUSABLE_SELECTOR)
  );
}
var ju = {};
Object.defineProperty(ju, "__esModule", { value: !0 });
ju.eventWrapper = ZA;
var QA = Q;
function ZA(e) {
  let t;
  return (
    (0, QA.getConfig)().eventWrapper(() => {
      t = e();
    }),
    t
  );
}
var Nu = {},
  Ce = {};
Object.defineProperty(Ce, "__esModule", { value: !0 });
Ce.TEXT_NODE = void 0;
Ce.checkContainerType = a1;
Ce.getDocument = r1;
Ce.getWindowFromNode = n1;
Ce.jestFakeTimersAreEnabled = t1;
const e1 = 3;
Ce.TEXT_NODE = e1;
function t1() {
  return typeof jest < "u" && jest !== null
    ? setTimeout._isMockFunction === !0 ||
        Object.prototype.hasOwnProperty.call(setTimeout, "clock")
    : !1;
}
function r1() {
  if (typeof window > "u") throw new Error("Could not find default container");
  return window.document;
}
function n1(e) {
  if (e.defaultView) return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window) return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null
    ? new Error(
        "It looks like the window object is not available for the provided node."
      )
    : e.then instanceof Function
    ? new Error(
        "It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?"
      )
    : Array.isArray(e)
    ? new Error(
        "It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?"
      )
    : typeof e.debug == "function" &&
      typeof e.logTestingPlaygroundURL == "function"
    ? new Error(
        "It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?"
      )
    : new Error(
        `The given node is not an Element, the node type is: ${typeof e}.`
      );
}
function a1(e) {
  if (
    !e ||
    typeof e.querySelector != "function" ||
    typeof e.querySelectorAll != "function"
  )
    throw new TypeError(
      `Expected container to be an Element, a Document or a DocumentFragment but got ${t(
        e
      )}.`
    );
  function t(r) {
    return typeof r == "object"
      ? r === null
        ? "null"
        : r.constructor.name
      : typeof r;
  }
}
Object.defineProperty(Nu, "__esModule", { value: !0 });
Nu.isVisible = l1;
var o1 = Ce;
function l1(e) {
  const t = (0, o1.getWindowFromNode)(e);
  for (let n = e; (r = n) != null && r.ownerDocument; n = n.parentElement) {
    var r;
    if (t.getComputedStyle(n).display === "none") return !1;
  }
  return !0;
}
var Du = {};
Object.defineProperty(Du, "__esModule", { value: !0 });
Du.isDocument = i1;
function i1(e) {
  return e.nodeType === e.DOCUMENT_NODE;
}
var ku = {};
Object.defineProperty(ku, "__esModule", { value: !0 });
ku.wait = u1;
function u1(e) {
  return new Promise((t) => setTimeout(() => t(), e));
}
var Lu = {};
Object.defineProperty(Lu, "__esModule", { value: !0 });
Lu.hasPointerEvents = c1;
var s1 = Ce;
function c1(e) {
  const t = (0, s1.getWindowFromNode)(e);
  for (let n = e; (r = n) != null && r.ownerDocument; n = n.parentElement) {
    var r;
    const a = t.getComputedStyle(n).pointerEvents;
    if (a && !["inherit", "unset"].includes(a)) return a !== "none";
  }
  return !0;
}
var al = {};
Object.defineProperty(al, "__esModule", { value: !0 });
al.hasFormSubmit = void 0;
const d1 = (e) =>
  !!(
    e &&
    (e.querySelector('input[type="submit"]') ||
      e.querySelector('button[type="submit"]'))
  );
al.hasFormSubmit = d1;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Su;
  Object.keys(t).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === t[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return t[c];
        },
      });
  });
  var r = $u;
  Object.keys(r).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === r[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return r[c];
        },
      });
  });
  var n = Tu;
  Object.keys(n).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === n[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return n[c];
        },
      });
  });
  var a = qu;
  Object.keys(a).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === a[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return a[c];
        },
      });
  });
  var o = rl;
  Object.keys(o).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === o[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return o[c];
        },
      });
  });
  var l = $t;
  Object.keys(l).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === l[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return l[c];
        },
      });
  });
  var u = xu;
  Object.keys(u).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === u[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return u[c];
        },
      });
  });
  var i = fr;
  Object.keys(i).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === i[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return i[c];
        },
      });
  });
  var s = lt;
  Object.keys(s).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === s[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return s[c];
        },
      });
  });
  var d = el;
  Object.keys(d).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === d[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return d[c];
        },
      });
  });
  var f = tl;
  Object.keys(f).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === f[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return f[c];
        },
      });
  });
  var p = Mu;
  Object.keys(p).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === p[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return p[c];
        },
      });
  });
  var m = ot;
  Object.keys(m).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === m[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return m[c];
        },
      });
  });
  var C = Bu;
  Object.keys(C).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === C[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return C[c];
        },
      });
  });
  var R = Iu;
  Object.keys(R).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === R[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return R[c];
        },
      });
  });
  var S = vr;
  Object.keys(S).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === S[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return S[c];
        },
      });
  });
  var v = ju;
  Object.keys(v).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === v[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return v[c];
        },
      });
  });
  var b = we;
  Object.keys(b).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === b[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return b[c];
        },
      });
  });
  var P = nl;
  Object.keys(P).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === P[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return P[c];
        },
      });
  });
  var w = Nu;
  Object.keys(w).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === w[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return w[c];
        },
      });
  });
  var O = pr;
  Object.keys(O).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === O[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return O[c];
        },
      });
  });
  var y = Du;
  Object.keys(y).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === y[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return y[c];
        },
      });
  });
  var h = ku;
  Object.keys(h).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === h[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return h[c];
        },
      });
  });
  var E = Lu;
  Object.keys(E).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === E[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return E[c];
        },
      });
  });
  var I = al;
  Object.keys(I).forEach(function (c) {
    c === "default" ||
      c === "__esModule" ||
      (c in e && e[c] === I[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return I[c];
        },
      });
  });
})(N);
var Tt = {};
Object.defineProperty(Tt, "__esModule", { value: !0 });
Tt.hover = f1;
Tt.unhover = p1;
var te = Q,
  Y = N;
function fy(e) {
  const t = [e];
  let r = e;
  for (; (r = r.parentElement) != null; ) t.push(r);
  return t;
}
function f1(e, t, { skipPointerEventsCheck: r = !1 } = {}) {
  if (!r && !(0, Y.hasPointerEvents)(e))
    throw new Error(
      'unable to hover element as it has or inherits pointer-events set to "none".'
    );
  if ((0, Y.isLabelWithInternallyDisabledControl)(e)) return;
  const n = fy(e).reverse();
  te.fireEvent.pointerOver(e, t);
  for (const a of n) te.fireEvent.pointerEnter(a, t);
  if (!(0, Y.isDisabled)(e)) {
    te.fireEvent.mouseOver(e, (0, Y.getMouseEventOptions)("mouseover", t));
    for (const a of n)
      te.fireEvent.mouseEnter(a, (0, Y.getMouseEventOptions)("mouseenter", t));
  }
  te.fireEvent.pointerMove(e, t),
    (0, Y.isDisabled)(e) ||
      te.fireEvent.mouseMove(e, (0, Y.getMouseEventOptions)("mousemove", t));
}
function p1(e, t, { skipPointerEventsCheck: r = !1 } = {}) {
  if (!r && !(0, Y.hasPointerEvents)(e))
    throw new Error(
      'unable to unhover element as it has or inherits pointer-events set to "none".'
    );
  if ((0, Y.isLabelWithInternallyDisabledControl)(e)) return;
  const n = fy(e);
  te.fireEvent.pointerMove(e, t),
    (0, Y.isDisabled)(e) ||
      te.fireEvent.mouseMove(e, (0, Y.getMouseEventOptions)("mousemove", t)),
    te.fireEvent.pointerOut(e, t);
  for (const a of n) te.fireEvent.pointerLeave(a, t);
  if (!(0, Y.isDisabled)(e)) {
    te.fireEvent.mouseOut(e, (0, Y.getMouseEventOptions)("mouseout", t));
    for (const a of n)
      te.fireEvent.mouseLeave(a, (0, Y.getMouseEventOptions)("mouseleave", t));
  }
}
var yr = {};
Object.defineProperty(yr, "__esModule", { value: !0 });
yr.blur = v1;
var ei = N;
function v1(e) {
  !(0, ei.isFocusable)(e) ||
    !((0, ei.getActiveElement)(e.ownerDocument) === e) ||
    (0, ei.eventWrapper)(() => e.blur());
}
var qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.focus = y1;
var ti = N;
function y1(e) {
  !(0, ti.isFocusable)(e) ||
    (0, ti.getActiveElement)(e.ownerDocument) === e ||
    (0, ti.eventWrapper)(() => e.focus());
}
Object.defineProperty(at, "__esModule", { value: !0 });
at.click = Wi;
at.dblClick = _1;
var G = Q,
  L = N,
  py = Tt,
  m1 = yr,
  an = qt;
function b1(e) {
  const t = e.ownerDocument.activeElement;
  return t && t !== e.ownerDocument.body && t !== e ? t : null;
}
function h1(e, t, { clickCount: r }) {
  (0, L.isLabelWithInternallyDisabledControl)(e) ||
    (G.fireEvent.pointerDown(e, t),
    G.fireEvent.mouseDown(e, (0, L.getMouseEventOptions)("mousedown", t, r)),
    G.fireEvent.pointerUp(e, t),
    G.fireEvent.mouseUp(e, (0, L.getMouseEventOptions)("mouseup", t, r)),
    Fu(e, (0, L.getMouseEventOptions)("click", t, r)),
    e.control && (0, an.focus)(e.control));
}
function g1(e, t, { clickCount: r }) {
  G.fireEvent.pointerDown(e, t),
    e.disabled ||
      G.fireEvent.mouseDown(e, (0, L.getMouseEventOptions)("mousedown", t, r)),
    (0, an.focus)(e),
    G.fireEvent.pointerUp(e, t),
    e.disabled ||
      (G.fireEvent.mouseUp(e, (0, L.getMouseEventOptions)("mouseup", t, r)),
      Fu(e, (0, L.getMouseEventOptions)("click", t, r)));
}
function ed(e, t, { clickCount: r }) {
  const n = b1(e);
  if (
    (G.fireEvent.pointerDown(e, t),
    !(0, L.isDisabled)(e) &&
      G.fireEvent.mouseDown(e, (0, L.getMouseEventOptions)("mousedown", t, r)))
  ) {
    const o = E1(e, L.isFocusable);
    n && !o ? (0, m1.blur)(n) : o && (0, an.focus)(o);
  }
  if ((G.fireEvent.pointerUp(e, t), !(0, L.isDisabled)(e))) {
    G.fireEvent.mouseUp(e, (0, L.getMouseEventOptions)("mouseup", t, r)),
      Fu(e, (0, L.getMouseEventOptions)("click", t, r));
    const a = e.closest("label");
    a != null && a.control && (0, an.focus)(a.control);
  }
}
function E1(e, t) {
  let r = e;
  do {
    if (t(r)) return r;
    r = r.parentElement;
  } while (r && r !== e.ownerDocument.body);
}
function Wi(
  e,
  t,
  { skipHover: r = !1, clickCount: n = 0, skipPointerEventsCheck: a = !1 } = {}
) {
  if (!a && !(0, L.hasPointerEvents)(e))
    throw new Error(
      'unable to click element as it has or inherits pointer-events set to "none".'
    );
  r || (0, py.hover)(e, t, { skipPointerEventsCheck: !0 }),
    (0, L.isElementType)(e, "label")
      ? h1(e, t, { clickCount: n })
      : (0, L.isElementType)(e, "input")
      ? e.type === "checkbox" || e.type === "radio"
        ? g1(e, t, { clickCount: n })
        : ed(e, t, { clickCount: n })
      : ed(e, t, { clickCount: n });
}
function Fu(e, t) {
  t.button === 2 ? G.fireEvent.contextMenu(e, t) : G.fireEvent.click(e, t);
}
function _1(e, t, { skipPointerEventsCheck: r = !1 } = {}) {
  if (!r && !(0, L.hasPointerEvents)(e))
    throw new Error(
      'unable to double-click element as it has or inherits pointer-events set to "none".'
    );
  (0, py.hover)(e, t, { skipPointerEventsCheck: r }),
    Wi(e, t, { skipHover: !0, clickCount: 0, skipPointerEventsCheck: r }),
    Wi(e, t, { skipHover: !0, clickCount: 1, skipPointerEventsCheck: r }),
    G.fireEvent.dblClick(e, (0, L.getMouseEventOptions)("dblclick", t, 2));
}
var ol = {},
  Uu = {},
  Vu = {},
  ll = {},
  Hu = {};
Object.defineProperty(Hu, "__esModule", { value: !0 });
Hu.getNextKeyDef = R1;
var on;
(function (e) {
  (e["{"] = "}"), (e["["] = "]");
})(on || (on = {}));
var zi;
(function (e) {
  (e.alt = "alt"), (e.ctrl = "ctrl"), (e.meta = "meta"), (e.shift = "shift");
})(zi || (zi = {}));
var Ki;
(function (e) {
  (e.ctrl = "Control"), (e.del = "Delete"), (e.esc = "Escape"), (e.space = " ");
})(Ki || (Ki = {}));
function R1(e, t) {
  var r;
  const {
    type: n,
    descriptor: a,
    consumedLength: o,
    releasePrevious: l,
    releaseSelf: u,
    repeat: i,
  } = P1(e);
  return {
    keyDef:
      (r = t.keyboardMap.find((d) => {
        if (n === "[") {
          var f;
          return (
            ((f = d.code) == null ? void 0 : f.toLowerCase()) ===
            a.toLowerCase()
          );
        } else if (n === "{") {
          var p;
          const m = S1(a);
          return (
            ((p = d.key) == null ? void 0 : p.toLowerCase()) === m.toLowerCase()
          );
        }
        return d.key === a;
      })) != null
        ? r
        : { key: "Unknown", code: "Unknown", [n === "[" ? "code" : "key"]: a },
    consumedLength: o,
    releasePrevious: l,
    releaseSelf: u,
    repeat: i,
  };
}
function P1(e) {
  let t = 0;
  const r = e[t] in on ? e[t] : "";
  t += r.length;
  const n = r ? e.match(new RegExp(`^\\${r}+`))[0].length : 0,
    o = n === 2 || (r === "{" && n > 3) ? "" : r;
  return { type: o, ...(o === "" ? w1(e, t) : C1(e, t, o)) };
}
function w1(e, t) {
  const r = e[t];
  return (
    vy(r, e, t),
    (t += r.length),
    {
      consumedLength: t,
      descriptor: r,
      releasePrevious: !1,
      releaseSelf: !0,
      repeat: 1,
    }
  );
}
function C1(e, t, r) {
  var n, a, o;
  const l = e[t] === "/" ? "/" : "";
  t += l.length;
  const u = (n = e.slice(t).match(/^\w+/)) == null ? void 0 : n[0];
  vy(u, e, t), (t += u.length);
  const i =
    (a = (o = e.slice(t).match(/^>\d+/)) == null ? void 0 : o[0]) != null
      ? a
      : "";
  t += i.length;
  const s = e[t] === "/" || (!i && e[t] === ">") ? e[t] : "";
  t += s.length;
  const d = on[r],
    f = e[t] === d ? d : "";
  if (!f)
    throw new Error(
      my(
        [!i && "repeat modifier", !s && "release modifier", `"${d}"`]
          .filter(Boolean)
          .join(" or "),
        e[t],
        e
      )
    );
  return (
    (t += f.length),
    {
      consumedLength: t,
      descriptor: u,
      releasePrevious: !!l,
      repeat: i ? Math.max(Number(i.substr(1)), 1) : 1,
      releaseSelf: O1(r, u, s, i),
    }
  );
}
function vy(e, t, r) {
  if (!e) throw new Error(my("key descriptor", t[r], t));
}
function yy(e, t) {
  return e[t];
}
function O1(e, t, r, n) {
  return r ? r === "/" : !(n || (e === "{" && yy(zi, t.toLowerCase())));
}
function S1(e) {
  var t;
  return (t = yy(Ki, e)) != null ? t : e;
}
function my(e, t, r) {
  return `Expected ${e} but found "${t ?? ""}" in "${r}"
    See https://github.com/testing-library/user-event/blob/main/README.md#keyboardtext-options
    for more information about how userEvent parses your input.`;
}
var U = {},
  il = {};
Object.defineProperty(il, "__esModule", { value: !0 });
il.keydownBehavior = void 0;
var ri = N;
const $1 = [
  {
    matches: (e, t) =>
      (e.key === "ArrowLeft" || e.key === "ArrowRight") &&
      (0, ri.isElementType)(t, ["input", "textarea"]),
    handle: (e, t) => {
      var r;
      const { selectionStart: n, selectionEnd: a } = (0, ri.getSelectionRange)(
          t
        ),
        o = e.key === "ArrowLeft" ? -1 : 1,
        l = (r = n === a ? (n ?? 0) + o : o < 0 ? n : a) != null ? r : 0;
      (0, ri.setSelectionRange)(t, l, l);
    },
  },
];
il.keydownBehavior = $1;
var ul = {},
  sl = {},
  Wu = {};
Object.defineProperty(Wu, "__esModule", { value: !0 });
Wu.carryValue = T1;
var td = N;
function T1(e, t, r) {
  const n = (0, td.getValue)(e);
  t.carryValue =
    n !== r && n === "" && (0, td.hasUnreliableEmptyValue)(e) ? r : void 0;
}
var zu = {};
Object.defineProperty(zu, "__esModule", { value: !0 });
zu.fireChangeForInputTimeIfValid = x1;
var q1 = Q,
  A1 = N;
function x1(e, t, r) {
  (0, A1.isValidInputTimeValue)(e, r) &&
    t !== r &&
    q1.fireEvent.change(e, { target: { value: r } });
}
var Ku = {};
Object.defineProperty(Ku, "__esModule", { value: !0 });
Ku.fireInputEvent = M1;
var by = Q,
  Ke = N;
function M1(e, { newValue: t, newSelectionStart: r, eventOverrides: n }) {
  if ((0, Ke.isContentEditable)(e)) rd(e, "textContent", t);
  else if ((0, Ke.isElementType)(e, ["input", "textarea"])) rd(e, "value", t);
  else throw new Error("Invalid Element");
  B1(e, r), by.fireEvent.input(e, { ...n }), I1(e, t, r);
}
function B1(e, t) {
  (0, Ke.setSelectionRange)(e, t, t);
}
function I1(e, t, r) {
  const n = (0, Ke.getValue)(e);
  if (!(n === "" && (0, Ke.hasUnreliableEmptyValue)(e)) && n === t) {
    const { selectionStart: o } = (0, Ke.getSelectionRange)(e);
    o === n.length && (0, Ke.setSelectionRange)(e, r, r);
  }
}
const Cr = Symbol("initial input value/textContent"),
  ni = Symbol("onBlur");
function rd(e, t, r) {
  const n = Object.getOwnPropertyDescriptor(e, t),
    a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
  if (
    (n && a && Object.defineProperty(e, t, a),
    e[Cr] === void 0 && (e[Cr] = String(e[t])),
    (e[t] = r),
    !e[ni])
  ) {
    var o;
    (o = e.ownerDocument.defaultView) == null ||
      o.addEventListener(
        "blur",
        (e[ni] = () => {
          const l = e[Cr];
          delete e[ni],
            delete e[Cr],
            String(e[t]) !== l && by.fireEvent.change(e);
        }),
        { capture: !0, once: !0 }
      );
  }
  n && Object.defineProperty(e, t, n);
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Wu;
  Object.keys(t).forEach(function (a) {
    a === "default" ||
      a === "__esModule" ||
      (a in e && e[a] === t[a]) ||
      Object.defineProperty(e, a, {
        enumerable: !0,
        get: function () {
          return t[a];
        },
      });
  });
  var r = zu;
  Object.keys(r).forEach(function (a) {
    a === "default" ||
      a === "__esModule" ||
      (a in e && e[a] === r[a]) ||
      Object.defineProperty(e, a, {
        enumerable: !0,
        get: function () {
          return r[a];
        },
      });
  });
  var n = Ku;
  Object.keys(n).forEach(function (a) {
    a === "default" ||
      a === "__esModule" ||
      (a in e && e[a] === n[a]) ||
      Object.defineProperty(e, a, {
        enumerable: !0,
        get: function () {
          return n[a];
        },
      });
  });
})(sl);
Object.defineProperty(ul, "__esModule", { value: !0 });
ul.keydownBehavior = void 0;
var ee = N,
  nd = sl;
const j1 = [
  {
    matches: (e, t) =>
      (e.key === "Home" || e.key === "End") &&
      ((0, ee.isElementType)(t, ["input", "textarea"]) ||
        (0, ee.isContentEditable)(t)),
    handle: (e, t) => {
      if (e.key === "Home") (0, ee.setSelectionRange)(t, 0, 0);
      else {
        var r, n;
        const a =
          (r = (n = (0, ee.getValue)(t)) == null ? void 0 : n.length) != null
            ? r
            : 0;
        (0, ee.setSelectionRange)(t, a, a);
      }
    },
  },
  {
    matches: (e, t) =>
      (e.key === "PageUp" || e.key === "PageDown") &&
      (0, ee.isElementType)(t, ["input"]),
    handle: (e, t) => {
      if (e.key === "PageUp") (0, ee.setSelectionRange)(t, 0, 0);
      else {
        var r, n;
        const a =
          (r = (n = (0, ee.getValue)(t)) == null ? void 0 : n.length) != null
            ? r
            : 0;
        (0, ee.setSelectionRange)(t, a, a);
      }
    },
  },
  {
    matches: (e, t) =>
      e.key === "Delete" && (0, ee.isEditable)(t) && !(0, ee.isCursorAtEnd)(t),
    handle: (e, t, r, n) => {
      const { newValue: a, newSelectionStart: o } = (0, ee.calculateNewValue)(
        "",
        t,
        n.carryValue,
        void 0,
        "forward"
      );
      (0, nd.fireInputEvent)(t, {
        newValue: a,
        newSelectionStart: o,
        eventOverrides: { inputType: "deleteContentForward" },
      }),
        (0, nd.carryValue)(t, n, a);
    },
  },
];
ul.keydownBehavior = j1;
var cl = {};
Object.defineProperty(cl, "__esModule", { value: !0 });
cl.keypressBehavior = void 0;
var N1 = Q,
  ft = sl,
  j = N;
const D1 = [
  {
    matches: (e, t) => {
      var r;
      return (
        ((r = e.key) == null ? void 0 : r.length) === 1 &&
        (0, j.isElementType)(t, "input", { type: "time", readOnly: !1 })
      );
    },
    handle: (e, t, r, n) => {
      var a;
      let o = e.key;
      const l = ((a = n.carryValue) != null ? a : "") + o,
        u = (0, j.buildTimeValue)(l);
      (0, j.isValidInputTimeValue)(t, u) && (o = u);
      const { newValue: i, newSelectionStart: s } = (0, j.calculateNewValue)(
          o,
          t
        ),
        d = (0, j.getValue)(t);
      d !== i &&
        (0, ft.fireInputEvent)(t, {
          newValue: i,
          newSelectionStart: s,
          eventOverrides: { data: e.key, inputType: "insertText" },
        }),
        (0, ft.fireChangeForInputTimeIfValid)(t, d, u),
        (n.carryValue = l);
    },
  },
  {
    matches: (e, t) => {
      var r;
      return (
        ((r = e.key) == null ? void 0 : r.length) === 1 &&
        (0, j.isElementType)(t, "input", { type: "date", readOnly: !1 })
      );
    },
    handle: (e, t, r, n) => {
      var a;
      let o = e.key;
      const l = ((a = n.carryValue) != null ? a : "") + o,
        u = (0, j.isValidDateValue)(t, l);
      u && (o = l);
      const { newValue: i, newSelectionStart: s } = (0, j.calculateNewValue)(
        o,
        t
      );
      (0, j.getValue)(t) !== i &&
        (0, ft.fireInputEvent)(t, {
          newValue: i,
          newSelectionStart: s,
          eventOverrides: { data: e.key, inputType: "insertText" },
        }),
        u && N1.fireEvent.change(t, { target: { value: l } }),
        (n.carryValue = l);
    },
  },
  {
    matches: (e, t) => {
      var r;
      return (
        ((r = e.key) == null ? void 0 : r.length) === 1 &&
        (0, j.isElementType)(t, "input", { type: "number", readOnly: !1 })
      );
    },
    handle: (e, t, r, n) => {
      var a, o, l, u;
      if (!/[\d.\-e]/.test(e.key)) return;
      const i =
          (a = (o = n.carryValue) != null ? o : (0, j.getValue)(t)) != null
            ? a
            : "",
        { newValue: s, newSelectionStart: d } = (0, j.calculateNewValue)(
          e.key,
          t,
          i
        ),
        f = s.split("e", 2);
      if (
        Number((l = s.match(/-/g)) == null ? void 0 : l.length) > 2 ||
        Number((u = s.match(/\./g)) == null ? void 0 : u.length) > 1 ||
        (f[1] && !/^-?\d*$/.test(f[1]))
      )
        return;
      (0, ft.fireInputEvent)(t, {
        newValue: s,
        newSelectionStart: d,
        eventOverrides: { data: e.key, inputType: "insertText" },
      }),
        (0, j.getValue)(t) === s ? (n.carryValue = void 0) : (n.carryValue = s);
    },
  },
  {
    matches: (e, t) => {
      var r;
      return (
        ((r = e.key) == null ? void 0 : r.length) === 1 &&
        (((0, j.isElementType)(t, ["input", "textarea"], { readOnly: !1 }) &&
          !(0, j.isClickableInput)(t)) ||
          (0, j.isContentEditable)(t)) &&
        (0, j.getSpaceUntilMaxLength)(t) !== 0
      );
    },
    handle: (e, t) => {
      const { newValue: r, newSelectionStart: n } = (0, j.calculateNewValue)(
        e.key,
        t
      );
      (0, ft.fireInputEvent)(t, {
        newValue: r,
        newSelectionStart: n,
        eventOverrides: { data: e.key, inputType: "insertText" },
      });
    },
  },
  {
    matches: (e, t) =>
      e.key === "Enter" &&
      ((0, j.isElementType)(t, "textarea", { readOnly: !1 }) ||
        (0, j.isContentEditable)(t)) &&
      (0, j.getSpaceUntilMaxLength)(t) !== 0,
    handle: (e, t, r, n) => {
      const { newValue: a, newSelectionStart: o } = (0, j.calculateNewValue)(
          `
`,
          t
        ),
        l =
          (0, j.isContentEditable)(t) && !n.modifiers.shift
            ? "insertParagraph"
            : "insertLineBreak";
      (0, ft.fireInputEvent)(t, {
        newValue: a,
        newSelectionStart: o,
        eventOverrides: { inputType: l },
      });
    },
  },
];
cl.keypressBehavior = D1;
var J = {},
  mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.getKeyEventProps = k1;
mr.getMouseEventProps = L1;
function k1(e, t) {
  var r, n;
  return {
    key: e.key,
    code: e.code,
    altKey: t.modifiers.alt,
    ctrlKey: t.modifiers.ctrl,
    metaKey: t.modifiers.meta,
    shiftKey: t.modifiers.shift,
    keyCode:
      (r = e.keyCode) != null
        ? r
        : ((n = e.key) == null ? void 0 : n.length) === 1
        ? e.key.charCodeAt(0)
        : void 0,
  };
}
function L1(e) {
  return {
    altKey: e.modifiers.alt,
    ctrlKey: e.modifiers.ctrl,
    metaKey: e.modifiers.meta,
    shiftKey: e.modifiers.shift,
  };
}
Object.defineProperty(J, "__esModule", { value: !0 });
J.preKeyupBehavior =
  J.preKeydownBehavior =
  J.postKeyupBehavior =
  J.keyupBehavior =
  J.keypressBehavior =
  J.keydownBehavior =
    void 0;
var ht = Q,
  pe = N,
  dl = mr,
  ad = sl;
const hy = { Alt: "alt", Control: "ctrl", Shift: "shift", Meta: "meta" },
  F1 = [
    ...Object.entries(hy).map(([e, t]) => ({
      matches: (r) => r.key === e,
      handle: (r, n, a, o) => {
        o.modifiers[t] = !0;
      },
    })),
    {
      matches: (e) => e.key === "AltGraph",
      handle: (e, t, r, n) => {
        var a;
        const o =
          (a = r.keyboardMap.find((l) => l.key === "Control")) != null
            ? a
            : { key: "Control", code: "Control" };
        ht.fireEvent.keyDown(t, (0, dl.getKeyEventProps)(o, n));
      },
    },
  ];
J.preKeydownBehavior = F1;
const U1 = [
  {
    matches: (e) => e.key === "CapsLock",
    handle: (e, t, r, n) => {
      n.modifiers.caps = !n.modifiers.caps;
    },
  },
  {
    matches: (e, t) =>
      e.key === "Backspace" &&
      (0, pe.isEditable)(t) &&
      !(0, pe.isCursorAtStart)(t),
    handle: (e, t, r, n) => {
      const { newValue: a, newSelectionStart: o } = (0, pe.calculateNewValue)(
        "",
        t,
        n.carryValue,
        void 0,
        "backward"
      );
      (0, ad.fireInputEvent)(t, {
        newValue: a,
        newSelectionStart: o,
        eventOverrides: { inputType: "deleteContentBackward" },
      }),
        (0, ad.carryValue)(t, n, a);
    },
  },
];
J.keydownBehavior = U1;
const V1 = [
  {
    matches: (e, t) =>
      e.key === "Enter" &&
      (0, pe.isElementType)(t, "input") &&
      ["checkbox", "radio"].includes(t.type),
    handle: (e, t) => {
      const r = t.form;
      (0, pe.hasFormSubmit)(r) && ht.fireEvent.submit(r);
    },
  },
  {
    matches: (e, t) =>
      e.key === "Enter" &&
      ((0, pe.isClickableInput)(t) ||
        ((0, pe.isElementType)(t, "a") && !!t.href)),
    handle: (e, t, r, n) => {
      ht.fireEvent.click(t, (0, dl.getMouseEventProps)(n));
    },
  },
  {
    matches: (e, t) => e.key === "Enter" && (0, pe.isElementType)(t, "input"),
    handle: (e, t) => {
      const r = t.form;
      r &&
        (r.querySelectorAll("input").length === 1 ||
          (0, pe.hasFormSubmit)(r)) &&
        ht.fireEvent.submit(r);
    },
  },
];
J.keypressBehavior = V1;
const H1 = [
  ...Object.entries(hy).map(([e, t]) => ({
    matches: (r) => r.key === e,
    handle: (r, n, a, o) => {
      o.modifiers[t] = !1;
    },
  })),
];
J.preKeyupBehavior = H1;
const W1 = [
  {
    matches: (e, t) => e.key === " " && (0, pe.isClickableInput)(t),
    handle: (e, t, r, n) => {
      ht.fireEvent.click(t, (0, dl.getMouseEventProps)(n));
    },
  },
];
J.keyupBehavior = W1;
const z1 = [
  {
    matches: (e) => e.key === "AltGraph",
    handle: (e, t, r, n) => {
      var a;
      const o =
        (a = r.keyboardMap.find((l) => l.key === "Control")) != null
          ? a
          : { key: "Control", code: "Control" };
      ht.fireEvent.keyUp(t, (0, dl.getKeyEventProps)(o, n));
    },
  },
];
J.postKeyupBehavior = z1;
Object.defineProperty(U, "__esModule", { value: !0 });
U.replaceBehavior =
  U.preKeyupBehavior =
  U.preKeydownBehavior =
  U.postKeyupBehavior =
  U.keyupBehavior =
  U.keypressBehavior =
  U.keydownBehavior =
    void 0;
var od = N,
  K1 = fl(il),
  G1 = fl(ul),
  Y1 = fl(cl),
  At = fl(J);
function gy(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (gy = function (n) {
    return n ? r : t;
  })(e);
}
function fl(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var r = gy(t);
  if (r && r.has(e)) return r.get(e);
  var n = {},
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(n, o, l) : (n[o] = e[o]);
    }
  return (n.default = e), r && r.set(e, n), n;
}
const J1 = [
  {
    matches: (e, t) =>
      e.key === "selectall" && (0, od.isElementType)(t, ["input", "textarea"]),
    handle: (e, t, r, n) => {
      var a;
      (0, od.setSelectionRange)(
        t,
        0,
        ((a = n.carryValue) != null ? a : t.value).length
      );
    },
  },
];
U.replaceBehavior = J1;
const X1 = [...At.preKeydownBehavior];
U.preKeydownBehavior = X1;
const Q1 = [
  ...K1.keydownBehavior,
  ...G1.keydownBehavior,
  ...At.keydownBehavior,
];
U.keydownBehavior = Q1;
const Z1 = [...At.keypressBehavior, ...Y1.keypressBehavior];
U.keypressBehavior = Z1;
const ex = [...At.preKeyupBehavior];
U.preKeyupBehavior = ex;
const tx = [...At.keyupBehavior];
U.keyupBehavior = tx;
const rx = [...At.postKeyupBehavior];
U.postKeyupBehavior = rx;
Object.defineProperty(ll, "__esModule", { value: !0 });
ll.keyboardImplementation = Ry;
ll.releaseAllKeys = ox;
var Gu = Q,
  Ey = N,
  nx = Hu,
  Xe = ax(U),
  Yu = mr;
function _y(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (_y = function (n) {
    return n ? r : t;
  })(e);
}
function ax(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var r = _y(t);
  if (r && r.has(e)) return r.get(e);
  var n = {},
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(n, o, l) : (n[o] = e[o]);
    }
  return (n.default = e), r && r.set(e, n), n;
}
async function Ry(e, t, r) {
  var n;
  const { document: a } = t,
    o = () => Py(a),
    {
      keyDef: l,
      consumedLength: u,
      releasePrevious: i,
      releaseSelf: s,
      repeat: d,
    } = (n = r.repeatKey) != null ? n : (0, nx.getNextKeyDef)(e, t);
  if (!Qe(Xe.replaceBehavior, l, o(), t, r)) {
    const p = r.pressed.find((m) => m.keyDef === l);
    if ((p && !r.repeatKey && Gi(l, o, t, r, p.unpreventedDefault), !i)) {
      const m = lx(l, o, t, r);
      m && ux(l, r) && ix(l, o, t, r), s && d <= 1 && Gi(l, o, t, r, m);
    }
  }
  if (
    (d > 1
      ? (r.repeatKey = {
          consumedLength: 0,
          keyDef: l,
          releasePrevious: i,
          releaseSelf: s,
          repeat: d - 1,
        })
      : delete r.repeatKey,
    e.length > u || d > 1)
  )
    return t.delay > 0 && (await (0, Ey.wait)(t.delay)), Ry(e.slice(u), t, r);
}
function Py(e) {
  var t;
  return (t = (0, Ey.getActiveElement)(e)) != null ? t : e.body;
}
function ox(e, t) {
  const r = () => Py(e.document);
  for (const n of t.pressed) Gi(n.keyDef, r, e, t, n.unpreventedDefault);
}
function lx(e, t, r, n) {
  const a = t();
  a !== n.activeElement && ((n.carryValue = void 0), (n.carryChar = "")),
    (n.activeElement = a),
    Qe(Xe.preKeydownBehavior, e, a, r, n);
  const o = Gu.fireEvent.keyDown(a, (0, Yu.getKeyEventProps)(e, n));
  return (
    n.pressed.push({ keyDef: e, unpreventedDefault: o }),
    o && Qe(Xe.keydownBehavior, e, t(), r, n),
    o
  );
}
function ix(e, t, r, n) {
  const a = t();
  Gu.fireEvent.keyPress(a, (0, Yu.getKeyEventProps)(e, n)) &&
    Qe(Xe.keypressBehavior, e, t(), r, n);
}
function Gi(e, t, r, n, a) {
  const o = t();
  Qe(Xe.preKeyupBehavior, e, o, r, n);
  const l = Gu.fireEvent.keyUp(o, (0, Yu.getKeyEventProps)(e, n));
  a && l && Qe(Xe.keyupBehavior, e, t(), r, n),
    (n.pressed = n.pressed.filter((u) => u.keyDef !== e)),
    Qe(Xe.postKeyupBehavior, e, o, r, n);
}
function Qe(e, t, r, n, a) {
  const o = e.find((l) => l.matches(t, r, n, a));
  return o && o.handle(t, r, n, a), !!o;
}
function ux(e, t) {
  var r;
  return (
    (((r = e.key) == null ? void 0 : r.length) === 1 || e.key === "Enter") &&
    !t.modifiers.ctrl &&
    !t.modifiers.alt
  );
}
var pl = {},
  br = {};
Object.defineProperty(br, "__esModule", { value: !0 });
br.DOM_KEY_LOCATION = void 0;
let Yi;
br.DOM_KEY_LOCATION = Yi;
(function (e) {
  (e[(e.STANDARD = 0)] = "STANDARD"),
    (e[(e.LEFT = 1)] = "LEFT"),
    (e[(e.RIGHT = 2)] = "RIGHT"),
    (e[(e.NUMPAD = 3)] = "NUMPAD");
})(Yi || (br.DOM_KEY_LOCATION = Yi = {}));
Object.defineProperty(pl, "__esModule", { value: !0 });
pl.defaultKeyMap = void 0;
var de = br;
const sx = [
  ..."0123456789".split("").map((e) => ({ code: `Digit${e}`, key: e })),
  ...")!@#$%^&*("
    .split("")
    .map((e, t) => ({ code: `Digit${t}`, key: e, shiftKey: !0 })),
  ..."abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((e) => ({ code: `Key${e.toUpperCase()}`, key: e })),
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .map((e) => ({ code: `Key${e}`, key: e, shiftKey: !0 })),
  { code: "Space", key: " " },
  {
    code: "AltLeft",
    key: "Alt",
    location: de.DOM_KEY_LOCATION.LEFT,
    keyCode: 18,
  },
  {
    code: "AltRight",
    key: "Alt",
    location: de.DOM_KEY_LOCATION.RIGHT,
    keyCode: 18,
  },
  {
    code: "ShiftLeft",
    key: "Shift",
    location: de.DOM_KEY_LOCATION.LEFT,
    keyCode: 16,
  },
  {
    code: "ShiftRight",
    key: "Shift",
    location: de.DOM_KEY_LOCATION.RIGHT,
    keyCode: 16,
  },
  {
    code: "ControlLeft",
    key: "Control",
    location: de.DOM_KEY_LOCATION.LEFT,
    keyCode: 17,
  },
  {
    code: "ControlRight",
    key: "Control",
    location: de.DOM_KEY_LOCATION.RIGHT,
    keyCode: 17,
  },
  {
    code: "MetaLeft",
    key: "Meta",
    location: de.DOM_KEY_LOCATION.LEFT,
    keyCode: 93,
  },
  {
    code: "MetaRight",
    key: "Meta",
    location: de.DOM_KEY_LOCATION.RIGHT,
    keyCode: 93,
  },
  {
    code: "OSLeft",
    key: "OS",
    location: de.DOM_KEY_LOCATION.LEFT,
    keyCode: 91,
  },
  {
    code: "OSRight",
    key: "OS",
    location: de.DOM_KEY_LOCATION.RIGHT,
    keyCode: 91,
  },
  { code: "CapsLock", key: "CapsLock", keyCode: 20 },
  { code: "Backspace", key: "Backspace", keyCode: 8 },
  { code: "Enter", key: "Enter", keyCode: 13 },
  { code: "Escape", key: "Escape", keyCode: 27 },
  { code: "ArrowUp", key: "ArrowUp", keyCode: 38 },
  { code: "ArrowDown", key: "ArrowDown", keyCode: 40 },
  { code: "ArrowLeft", key: "ArrowLeft", keyCode: 37 },
  { code: "ArrowRight", key: "ArrowRight", keyCode: 39 },
  { code: "Home", key: "Home", keyCode: 36 },
  { code: "End", key: "End", keyCode: 35 },
  { code: "Delete", key: "Delete", keyCode: 46 },
  { code: "PageUp", key: "PageUp", keyCode: 33 },
  { code: "PageDown", key: "PageDown", keyCode: 34 },
];
pl.defaultKeyMap = sx;
var vl = {};
Object.defineProperty(vl, "__esModule", { value: !0 });
vl.specialCharMap = void 0;
const cx = {
  arrowLeft: "{arrowleft}",
  arrowRight: "{arrowright}",
  arrowDown: "{arrowdown}",
  arrowUp: "{arrowup}",
  enter: "{enter}",
  escape: "{esc}",
  delete: "{del}",
  backspace: "{backspace}",
  home: "{home}",
  end: "{end}",
  selectAll: "{selectall}",
  space: "{space}",
  whitespace: " ",
  pageUp: "{pageUp}",
  pageDown: "{pageDown}",
};
vl.specialCharMap = cx;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.keyboard = o),
    (e.keyboardImplementationWrapper = l),
    Object.defineProperty(e, "specialCharMap", {
      enumerable: !0,
      get: function () {
        return a.specialCharMap;
      },
    });
  var t = Q,
    r = ll,
    n = pl,
    a = vl;
  function o(i, s) {
    var d;
    const { promise: f, state: p } = l(i, s);
    return ((d = s == null ? void 0 : s.delay) != null ? d : 0) > 0
      ? (0, t.getConfig)().asyncWrapper(() => f.then(() => p))
      : (f.catch(console.error), p);
  }
  function l(i, s = {}) {
    const {
        keyboardState: d = u(),
        delay: f = 0,
        document: p = document,
        autoModify: m = !1,
        keyboardMap: C = n.defaultKeyMap,
      } = s,
      R = { delay: f, document: p, autoModify: m, keyboardMap: C };
    return {
      promise: (0, r.keyboardImplementation)(i, R, d),
      state: d,
      releaseAllKeys: () => (0, r.releaseAllKeys)(R, d),
    };
  }
  function u() {
    return {
      activeElement: null,
      pressed: [],
      carryChar: "",
      modifiers: { alt: !1, caps: !1, ctrl: !1, meta: !1, shift: !1 },
    };
  }
})(Vu);
Object.defineProperty(Uu, "__esModule", { value: !0 });
Uu.typeImplementation = px;
var Or = N,
  dx = at,
  fx = Vu;
async function px(
  e,
  t,
  {
    delay: r,
    skipClick: n = !1,
    skipAutoClose: a = !1,
    initialSelectionStart: o = void 0,
    initialSelectionEnd: l = void 0,
  }
) {
  if (e.disabled) return;
  n || (0, dx.click)(e);
  const u = () => (0, Or.getActiveElement)(e.ownerDocument),
    i = (0, Or.getValue)(u()),
    { selectionStart: s, selectionEnd: d } = (0, Or.getSelectionRange)(e);
  i != null &&
    (s === null || s === 0) &&
    (d === null || d === 0) &&
    (0, Or.setSelectionRange)(u(), o ?? i.length, l ?? i.length);
  const { promise: f, releaseAllKeys: p } = (0,
  fx.keyboardImplementationWrapper)(t, { delay: r, document: e.ownerDocument });
  return r > 0 && (await f), a || p(), f;
}
Object.defineProperty(ol, "__esModule", { value: !0 });
ol.type = yx;
var vx = Q,
  ld = Uu;
function yx(e, t, { delay: r = 0, ...n } = {}) {
  return r > 0
    ? (0, vx.getConfig)().asyncWrapper(() =>
        (0, ld.typeImplementation)(e, t, { delay: r, ...n })
      )
    : void (0, ld.typeImplementation)(e, t, { delay: r, ...n }).catch(
        console.error
      );
}
var Ju = {};
Object.defineProperty(Ju, "__esModule", { value: !0 });
Ju.clear = bx;
var id = N,
  mx = ol;
function bx(e) {
  var t, r;
  if (!(0, id.isElementType)(e, ["input", "textarea"]))
    throw new Error(
      "clear currently only supports input and textarea elements."
    );
  if ((0, id.isDisabled)(e)) return;
  const n = e.type;
  n !== "textarea" && (e.type = "text"),
    (0, mx.type)(e, "{selectall}{del}", {
      delay: 0,
      initialSelectionStart: (t = e.selectionStart) != null ? t : void 0,
      initialSelectionEnd: (r = e.selectionEnd) != null ? r : void 0,
    }),
    n !== "textarea" && (e.type = n);
}
var Xu = {};
Object.defineProperty(Xu, "__esModule", { value: !0 });
Xu.tab = _x;
var Sr = Q,
  Dt = N,
  hx = qt,
  gx = yr;
function Ex(e, t, r, n) {
  if ((0, Dt.isDocument)(n) && ((e === 0 && t) || (e === r.length - 1 && !t)))
    return n.body;
  const a = t ? e - 1 : e + 1,
    o = t ? r.length - 1 : 0;
  return r[a] || r[o];
}
function _x({ shift: e = !1, focusTrap: t } = {}) {
  var r, n;
  const a =
      (r = (n = t) == null ? void 0 : n.ownerDocument) != null ? r : document,
    o = (0, Dt.getActiveElement)(a);
  t || (t = a);
  const l = t.querySelectorAll(Dt.FOCUSABLE_SELECTOR),
    u = Array.from(l).filter(
      (v) =>
        v === o ||
        (v.getAttribute("tabindex") !== "-1" &&
          !(0, Dt.isDisabled)(v) &&
          (0, Dt.isVisible)(v))
    );
  if (u.length === 0) return;
  const i = u
      .map((v, b) => ({ el: v, idx: b }))
      .sort((v, b) => {
        if (o && o.getAttribute("tabindex") === "-1") return v.idx - b.idx;
        const P = Number(v.el.getAttribute("tabindex")),
          w = Number(b.el.getAttribute("tabindex")),
          O = P - w;
        return O === 0 ? v.idx - b.idx : O;
      })
      .map(({ el: v }) => v),
    s = {};
  let d = [];
  i.forEach((v) => {
    const b = v;
    if (b.type === "radio" && b.name) {
      const P = o;
      if (P && P.type === b.type && P.name === b.name) {
        b === P && d.push(b);
        return;
      }
      if (b.checked) {
        (d = d.filter((w) => w.type !== b.type || w.name !== b.name)),
          d.push(b),
          (s[b.name] = b);
        return;
      }
      if (typeof s[b.name] < "u") return;
    }
    d.push(b);
  });
  const f = d.findIndex((v) => v === o),
    p = Ex(f, e, d, t),
    m = { key: "Shift", keyCode: 16, shiftKey: !0 },
    C = { key: "Tab", keyCode: 9, shiftKey: e };
  let R = !0;
  o &&
    (e && Sr.fireEvent.keyDown(o, { ...m }),
    (R = Sr.fireEvent.keyDown(o, { ...C })));
  const S = !R && o ? o : p;
  R && (p === a.body ? o && (0, gx.blur)(o) : (0, hx.focus)(p)),
    Sr.fireEvent.keyUp(S, { ...C }),
    e && Sr.fireEvent.keyUp(S, { ...m, shiftKey: !1 });
}
var Qu = {};
Object.defineProperty(Qu, "__esModule", { value: !0 });
Qu.upload = Cx;
var ai = Q,
  Rx = at,
  Px = yr,
  wx = qt,
  oi = N;
function Cx(e, t, r, { applyAccept: n = !1 } = {}) {
  var a;
  const o = (0, oi.isElementType)(e, "label") ? e.control : e;
  if (!o || !(0, oi.isElementType)(o, "input", { type: "file" }))
    throw new TypeError(
      `The ${o === e ? "given" : "associated"} ${
        o == null ? void 0 : o.tagName
      } element does not accept file uploads`
    );
  if ((0, oi.isDisabled)(e)) return;
  (0, Rx.click)(e, r == null ? void 0 : r.clickInit);
  const l = (Array.isArray(t) ? t : [t])
    .filter((i) => !n || Ox(i, o.accept))
    .slice(0, o.multiple ? void 0 : 1);
  if (
    ((0, Px.blur)(e),
    (0, wx.focus)(e),
    l.length === ((a = o.files) == null ? void 0 : a.length) &&
      l.every((i, s) => {
        var d;
        return i === ((d = o.files) == null ? void 0 : d.item(s));
      }))
  )
    return;
  const u = {
    ...l,
    length: l.length,
    item: (i) => l[i],
    [Symbol.iterator]() {
      let i = 0;
      return { next: () => ({ done: i >= l.length, value: l[i++] }) };
    },
  };
  (0, ai.fireEvent)(
    o,
    (0, ai.createEvent)("input", o, {
      target: { files: u },
      bubbles: !0,
      cancelable: !1,
      composed: !0,
    })
  ),
    ai.fireEvent.change(o, {
      target: { files: u },
      ...(r == null ? void 0 : r.changeInit),
    });
}
function Ox(e, t) {
  if (!t) return !0;
  const r = ["audio/*", "image/*", "video/*"];
  return t
    .split(",")
    .some((n) =>
      n.startsWith(".")
        ? e.name.endsWith(n)
        : r.includes(n)
        ? e.type.startsWith(n.substr(0, n.length - 1))
        : e.type === n
    );
}
var Ct = {};
Object.defineProperty(Ct, "__esModule", { value: !0 });
Ct.selectOptions = Ct.deselectOptions = void 0;
var M = Q,
  Nt = N,
  ud = at,
  sd = qt,
  cd = Tt;
function wy(e, t, r, n, { skipPointerEventsCheck: a = !1 } = {}) {
  if (!e && !t.multiple)
    throw (0, M.getConfig)().getElementError(
      "Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.",
      t
    );
  const o = Array.isArray(r) ? r : [r],
    l = Array.from(t.querySelectorAll('option, [role="option"]')),
    u = o
      .map((s) => {
        if (typeof s != "string" && l.includes(s)) return s;
        {
          const d = l.find((f) => f.value === s || f.innerHTML === s);
          if (d) return d;
          throw (0, M.getConfig)().getElementError(
            `Value "${String(s)}" not found in options`,
            t
          );
        }
      })
      .filter((s) => !(0, Nt.isDisabled)(s));
  if ((0, Nt.isDisabled)(t) || !u.length) return;
  if ((0, Nt.isElementType)(t, "select"))
    if (t.multiple)
      for (const s of u) {
        const d = a ? !0 : (0, Nt.hasPointerEvents)(s);
        d &&
          (M.fireEvent.pointerOver(s, n),
          M.fireEvent.pointerEnter(t, n),
          M.fireEvent.mouseOver(s),
          M.fireEvent.mouseEnter(t),
          M.fireEvent.pointerMove(s, n),
          M.fireEvent.mouseMove(s, n),
          M.fireEvent.pointerDown(s, n),
          M.fireEvent.mouseDown(s, n)),
          (0, sd.focus)(t),
          d && (M.fireEvent.pointerUp(s, n), M.fireEvent.mouseUp(s, n)),
          i(s),
          d && M.fireEvent.click(s, n);
      }
    else if (u.length === 1) {
      const s = a ? !0 : (0, Nt.hasPointerEvents)(t);
      s ? (0, ud.click)(t, n, { skipPointerEventsCheck: a }) : (0, sd.focus)(t),
        i(u[0]),
        s &&
          (M.fireEvent.pointerOver(t, n),
          M.fireEvent.pointerEnter(t, n),
          M.fireEvent.mouseOver(t),
          M.fireEvent.mouseEnter(t),
          M.fireEvent.pointerUp(t, n),
          M.fireEvent.mouseUp(t, n),
          M.fireEvent.click(t, n));
    } else
      throw (0, M.getConfig)().getElementError(
        "Cannot select multiple options on a non-multiple select",
        t
      );
  else if (t.getAttribute("role") === "listbox")
    u.forEach((s) => {
      (0, cd.hover)(s, n, { skipPointerEventsCheck: a }),
        (0, ud.click)(s, n, { skipPointerEventsCheck: a }),
        (0, cd.unhover)(s, n, { skipPointerEventsCheck: a });
    });
  else
    throw (0, M.getConfig)().getElementError(
      "Cannot select options on elements that are neither select nor listbox elements",
      t
    );
  function i(s) {
    (s.selected = e),
      (0, M.fireEvent)(
        t,
        (0, M.createEvent)("input", t, {
          bubbles: !0,
          cancelable: !1,
          composed: !0,
          ...n,
        })
      ),
      M.fireEvent.change(t, n);
  }
}
const Sx = wy.bind(null, !0);
Ct.selectOptions = Sx;
const $x = wy.bind(null, !1);
Ct.deselectOptions = $x;
var Zu = {};
Object.defineProperty(Zu, "__esModule", { value: !0 });
Zu.paste = qx;
var dd = Q,
  be = N;
function Tx(e) {
  return (
    ((0, be.isElementType)(e, "input") && !!be.editableInputTypes[e.type]) ||
    (0, be.isElementType)(e, "textarea")
  );
}
function qx(
  e,
  t,
  r,
  { initialSelectionStart: n, initialSelectionEnd: a } = {}
) {
  if (!Tx(e))
    throw new TypeError(`The given ${e.tagName} element is currently unsupported.
      A PR extending this implementation would be very much welcome at https://github.com/testing-library/user-event`);
  if (
    (0, be.isDisabled)(e) ||
    ((0, be.eventWrapper)(() => e.focus()),
    e.selectionStart === 0 &&
      e.selectionEnd === 0 &&
      (0, be.setSelectionRange)(e, n ?? e.value.length, a ?? e.value.length),
    dd.fireEvent.paste(e, r),
    e.readOnly)
  )
    return;
  t = t.substr(0, (0, be.getSpaceUntilMaxLength)(e));
  const { newValue: o, newSelectionStart: l } = (0, be.calculateNewValue)(t, e);
  dd.fireEvent.input(e, { inputType: "insertFromPaste", target: { value: o } }),
    (0, be.setSelectionRange)(e, { newSelectionStart: l, selectionEnd: l }, {});
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.default = void 0),
    Object.defineProperty(e, "specialChars", {
      enumerable: !0,
      get: function () {
        return s.specialCharMap;
      },
    });
  var t = at,
    r = ol,
    n = Ju,
    a = Xu,
    o = Tt,
    l = Qu,
    u = Ct,
    i = Zu,
    s = Vu,
    f = {
      click: t.click,
      dblClick: t.dblClick,
      type: r.type,
      clear: n.clear,
      tab: a.tab,
      hover: o.hover,
      unhover: o.unhover,
      upload: l.upload,
      selectOptions: u.selectOptions,
      deselectOptions: u.deselectOptions,
      paste: i.paste,
      keyboard: s.keyboard,
    };
  e.default = f;
})(oy);
const Ax = _d(oy);
var xx =
    (globalThis && globalThis.__makeTemplateObject) ||
    function (e, t) {
      return (
        Object.defineProperty
          ? Object.defineProperty(e, "raw", { value: t })
          : (e.raw = t),
        e
      );
    },
  ln =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ln =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) {
              t = arguments[r];
              for (var a in t)
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            }
            return e;
          }),
        ln.apply(this, arguments)
      );
    };
const { once: Mx } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var _ = gd(ln({}, ay), {
  intercept: function (e, t) {
    return (
      t[0] === "fireEvent" || e.startsWith("findBy") || e.startsWith("waitFor")
    );
  },
});
_.screen = Object.entries(_.screen).reduce(function (e, t) {
  var r = t[0],
    n = t[1];
  return Object.defineProperty(e, r, {
    get: function () {
      return (
        Mx.warn(
          Cy(
            fd ||
              (fd = xx(
                [
                  "\n          You are using Testing Library's `screen` object. Use `within(canvasElement)` instead.\n          More info: https://storybook.js.org/docs/react/essentials/interactions\n        ",
                ],
                [
                  "\n          You are using Testing Library's \\`screen\\` object. Use \\`within(canvasElement)\\` instead.\n          More info: https://storybook.js.org/docs/react/essentials/interactions\n        ",
                ]
              ))
          )
        ),
        n
      );
    },
  });
}, ln({}, _.screen));
_.buildQueries;
_.configure;
_.createEvent;
_.findAllByAltText;
_.findAllByDisplayValue;
_.findAllByLabelText;
_.findAllByPlaceholderText;
_.findAllByRole;
_.findAllByTestId;
_.findAllByText;
_.findAllByTitle;
_.findByAltText;
_.findByDisplayValue;
_.findByLabelText;
_.findByPlaceholderText;
_.findByRole;
_.findByTestId;
_.findByText;
_.findByTitle;
_.fireEvent;
_.getAllByAltText;
_.getAllByDisplayValue;
_.getAllByLabelText;
_.getAllByPlaceholderText;
_.getAllByRole;
_.getAllByTestId;
_.getAllByText;
_.getAllByTitle;
_.getByAltText;
_.getByDisplayValue;
_.getByLabelText;
_.getByPlaceholderText;
_.getByRole;
_.getByTestId;
_.getByText;
_.getByTitle;
_.getConfig;
_.getDefaultNormalizer;
_.getElementError;
_.getNodeText;
_.getQueriesForElement;
_.getRoles;
_.getSuggestedQuery;
_.isInaccessible;
_.logDOM;
_.logRoles;
_.prettyDOM;
_.queries;
_.queryAllByAltText;
_.queryAllByAttribute;
_.queryAllByDisplayValue;
_.queryAllByLabelText;
_.queryAllByPlaceholderText;
_.queryAllByRole;
_.queryAllByTestId;
_.queryAllByText;
_.queryAllByTitle;
_.queryByAltText;
_.queryByAttribute;
_.queryByDisplayValue;
_.queryByLabelText;
_.queryByPlaceholderText;
_.queryByRole;
_.queryByTestId;
_.queryByText;
_.queryByTitle;
_.queryHelpers;
_.screen;
_.waitFor;
_.waitForElementToBeRemoved;
var Bx = _.within;
_.prettyFormat;
var Ix = gd({ userEvent: Ax }, { intercept: !0 }).userEvent,
  fd;
const Ji = () => {
  const [e, t] = Oy.useState();
  return D.jsxs("article", {
    children: [
      D.jsx(Sy, {
        user: e,
        onLogin: () => t({ name: "Jane Doe" }),
        onLogout: () => t(void 0),
        onCreateAccount: () => t({ name: "Jane Doe" }),
      }),
      D.jsxs("section", {
        className: "storybook-page",
        children: [
          D.jsx("h2", { children: "Pages in Storybook" }),
          D.jsxs("p", {
            children: [
              "We recommend building UIs with a",
              " ",
              D.jsx("a", {
                href: "https://componentdriven.org",
                target: "_blank",
                rel: "noopener noreferrer",
                children: D.jsx("strong", { children: "component-driven" }),
              }),
              " ",
              "process starting with atomic components and ending with pages.",
            ],
          }),
          D.jsx("p", {
            children:
              "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:",
          }),
          D.jsxs("ul", {
            children: [
              D.jsx("li", {
                children:
                  'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories',
              }),
              D.jsx("li", {
                children:
                  "Assemble data in the page component from your services. You can mock these services out using Storybook.",
              }),
            ],
          }),
          D.jsxs("p", {
            children: [
              "Get a guided tutorial on component-driven development at",
              " ",
              D.jsx("a", {
                href: "https://storybook.js.org/tutorials/",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Storybook tutorials",
              }),
              ". Read more in the",
              " ",
              D.jsx("a", {
                href: "https://storybook.js.org/docs",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "docs",
              }),
              ".",
            ],
          }),
          D.jsxs("div", {
            className: "tip-wrapper",
            children: [
              D.jsx("span", { className: "tip", children: "Tip" }),
              " Adjust the width of the canvas with the",
              " ",
              D.jsx("svg", {
                width: "10",
                height: "10",
                viewBox: "0 0 12 12",
                xmlns: "http://www.w3.org/2000/svg",
                children: D.jsx("g", {
                  fill: "none",
                  fillRule: "evenodd",
                  children: D.jsx("path", {
                    d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",
                    id: "a",
                    fill: "#999",
                  }),
                }),
              }),
              "Viewports addon in the toolbar",
            ],
          }),
        ],
      }),
    ],
  });
};
try {
  (Ji.displayName = "Page"),
    (Ji.__docgenInfo = { description: "", displayName: "Page", props: {} });
} catch {}
const Hx = {
    title: "Example/Page",
    component: Ji,
    parameters: { layout: "fullscreen" },
  },
  $r = {},
  Tr = {
    play: async ({ canvasElement: e }) => {
      const r = await Bx(e).getByRole("button", { name: /Log in/i });
      await Ix.click(r);
    },
  };
var pd, vd, yd;
$r.parameters = {
  ...$r.parameters,
  docs: {
    ...((pd = $r.parameters) == null ? void 0 : pd.docs),
    source: {
      originalSource: "{}",
      ...((yd = (vd = $r.parameters) == null ? void 0 : vd.docs) == null
        ? void 0
        : yd.source),
    },
  },
};
var md, bd, hd;
Tr.parameters = {
  ...Tr.parameters,
  docs: {
    ...((md = Tr.parameters) == null ? void 0 : md.docs),
    source: {
      originalSource: `{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i
    });
    await userEvent.click(loginButton);
  }
}`,
      ...((hd = (bd = Tr.parameters) == null ? void 0 : bd.docs) == null
        ? void 0
        : hd.source),
    },
  },
};
const Wx = ["LoggedOut", "LoggedIn"];
export {
  Tr as LoggedIn,
  $r as LoggedOut,
  Wx as __namedExportsOrder,
  Hx as default,
};
//# sourceMappingURL=Page.stories-2c3c930e.js.map
