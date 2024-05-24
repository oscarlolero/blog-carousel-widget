import Ce, { useState as fr } from "react";
var Q = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function dr() {
  if (xe)
    return I;
  xe = 1;
  var S = Ce, b = Symbol.for("react.element"), P = Symbol.for("react.fragment"), w = Object.prototype.hasOwnProperty, $ = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(R, f, x) {
    var p, y = {}, E = null, Y = null;
    x !== void 0 && (E = "" + x), f.key !== void 0 && (E = "" + f.key), f.ref !== void 0 && (Y = f.ref);
    for (p in f)
      w.call(f, p) && !M.hasOwnProperty(p) && (y[p] = f[p]);
    if (R && R.defaultProps)
      for (p in f = R.defaultProps, f)
        y[p] === void 0 && (y[p] = f[p]);
    return { $$typeof: b, type: R, key: E, ref: Y, props: y, _owner: $.current };
  }
  return I.Fragment = P, I.jsx = k, I.jsxs = k, I;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function vr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var S = Ce, b = Symbol.for("react.element"), P = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), R = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), ee = Symbol.iterator, Oe = "@@iterator";
    function Se(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Oe];
      return typeof r == "function" ? r : null;
    }
    var j = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function l(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var a = j.ReactDebugCurrentFrame, o = a.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = !1, Fe = !1, Ae = !1, De = !1, Ie = !1, re;
    re = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === w || e === M || Ie || e === $ || e === x || e === p || De || e === Y || ke || Fe || Ae || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === y || e.$$typeof === k || e.$$typeof === R || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function m(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case w:
          return "Fragment";
        case P:
          return "Portal";
        case M:
          return "Profiler";
        case $:
          return "StrictMode";
        case x:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return te(r) + ".Consumer";
          case k:
            var t = e;
            return te(t._context) + ".Provider";
          case f:
            return $e(e, e.render, "ForwardRef");
          case y:
            var a = e.displayName || null;
            return a !== null ? a : m(e.type) || "Memo";
          case E: {
            var o = e, s = o._payload, i = o._init;
            try {
              return m(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, F = 0, ae, ne, ie, oe, se, ce, ue;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Me() {
      {
        if (F === 0) {
          ae = console.log, ne = console.info, ie = console.warn, oe = console.error, se = console.group, ce = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ye() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, e, {
              value: ae
            }),
            info: _({}, e, {
              value: ne
            }),
            warn: _({}, e, {
              value: ie
            }),
            error: _({}, e, {
              value: oe
            }),
            group: _({}, e, {
              value: se
            }),
            groupCollapsed: _({}, e, {
              value: ce
            }),
            groupEnd: _({}, e, {
              value: ue
            })
          });
        }
        F < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = j.ReactCurrentDispatcher, B;
    function L(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (o) {
            var a = o.stack.trim().match(/\n( *(at )?)/);
            B = a && a[1] || "";
          }
        return `
` + B + e;
      }
    }
    var J = !1, V;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Le();
    }
    function fe(e, r) {
      if (!e || J)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      J = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Z.current, Z.current = null, Me();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (v) {
              a = v;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (v) {
              a = v;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            a = v;
          }
          e();
        }
      } catch (v) {
        if (v && a && typeof v.stack == "string") {
          for (var n = v.stack.split(`
`), d = a.stack.split(`
`), c = n.length - 1, u = d.length - 1; c >= 1 && u >= 0 && n[c] !== d[u]; )
            u--;
          for (; c >= 1 && u >= 0; c--, u--)
            if (n[c] !== d[u]) {
              if (c !== 1 || u !== 1)
                do
                  if (c--, u--, u < 0 || n[c] !== d[u]) {
                    var h = `
` + n[c].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, h), h;
                  }
                while (c >= 1 && u >= 0);
              break;
            }
        }
      } finally {
        J = !1, Z.current = s, Ye(), Error.prepareStackTrace = o;
      }
      var O = e ? e.displayName || e.name : "", T = O ? L(O) : "";
      return typeof e == "function" && V.set(e, T), T;
    }
    function Ve(e, r, t) {
      return fe(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ne(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case x:
          return L("Suspense");
        case p:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ve(e.render);
          case y:
            return N(e.type, r, t);
          case E: {
            var a = e, o = a._payload, s = a._init;
            try {
              return N(s(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, de = {}, ve = j.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ue(e, r, t, a, o) {
      {
        var s = Function.call.bind(A);
        for (var i in e)
          if (s(e, i)) {
            var n = void 0;
            try {
              if (typeof e[i] != "function") {
                var d = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              n = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              n = c;
            }
            n && !(n instanceof Error) && (U(o), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof n), U(null)), n instanceof Error && !(n.message in de) && (de[n.message] = !0, U(o), l("Failed %s type: %s", t, n.message), U(null));
          }
      }
    }
    var Ze = Array.isArray;
    function q(e) {
      return Ze(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ge(e) {
      if (Je(e))
        return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), pe(e);
    }
    var D = j.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, me, K;
    K = {};
    function Ke(e) {
      if (A.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, r) {
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = m(D.current.type);
        K[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m(D.current.type), e.ref), K[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          he || (he = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          me || (me = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, a, o, s, i) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: b,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function er(e, r, t, a, o) {
      {
        var s, i = {}, n = null, d = null;
        t !== void 0 && (ge(t), n = "" + t), Ge(r) && (ge(r.key), n = "" + r.key), Ke(r) && (d = r.ref, ze(r, o));
        for (s in r)
          A.call(r, s) && !qe.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            i[s] === void 0 && (i[s] = c[s]);
        }
        if (n || d) {
          var u = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && He(i, u), d && Xe(i, u);
        }
        return Qe(e, n, d, o, a, D.current, i);
      }
    }
    var G = j.ReactCurrentOwner, ye = j.ReactDebugCurrentFrame;
    function C(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function be() {
      {
        if (G.current) {
          var e = m(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var Re = {};
    function tr(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var a = "";
        e && e._owner && e._owner !== G.current && (a = " It was passed a child from " + m(e._owner.type) + "."), C(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), C(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            H(a) && Ee(a, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Se(e);
          if (typeof o == "function" && o !== e.entries)
            for (var s = o.call(e), i; !(i = s.next()).done; )
              H(i.value) && Ee(i.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = m(r);
          Ue(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var o = m(r);
          l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            C(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), C(null);
            break;
          }
        }
        e.ref !== null && (C(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), C(null));
      }
    }
    var Te = {};
    function we(e, r, t, a, o, s) {
      {
        var i = We(e);
        if (!i) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = rr();
          d ? n += d : n += be();
          var c;
          e === null ? c = "null" : q(e) ? c = "array" : e !== void 0 && e.$$typeof === b ? (c = "<" + (m(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, n);
        }
        var u = er(e, r, t, o, s);
        if (u == null)
          return u;
        if (i) {
          var h = r.children;
          if (h !== void 0)
            if (a)
              if (q(h)) {
                for (var O = 0; O < h.length; O++)
                  _e(h[O], e);
                Object.freeze && Object.freeze(h);
              } else
                l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(h, e);
        }
        if (A.call(r, "key")) {
          var T = m(e), v = Object.keys(r).filter(function(lr) {
            return lr !== "key";
          }), X = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[T + X]) {
            var ur = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            l(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, X, T, ur, T), Te[T + X] = !0;
          }
        }
        return e === w ? nr(u) : ar(u), u;
      }
    }
    function ir(e, r, t) {
      return we(e, r, t, !0);
    }
    function or(e, r, t) {
      return we(e, r, t, !1);
    }
    var sr = or, cr = ir;
    W.Fragment = w, W.jsx = sr, W.jsxs = cr;
  }()), W;
}
process.env.NODE_ENV === "production" ? Q.exports = dr() : Q.exports = vr();
var g = Q.exports;
const pr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='35.93'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20228'%3e%3cpath%20fill='%2300D8FF'%20d='M210.483%2073.824a171.49%20171.49%200%200%200-8.24-2.597c.465-1.9.893-3.777%201.273-5.621c6.238-30.281%202.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254%2019.526a171.23%20171.23%200%200%200-6.375%205.848a155.866%20155.866%200%200%200-4.241-3.917C100.759%203.829%2077.587-4.822%2063.673%203.233C50.33%2010.957%2046.379%2033.89%2051.995%2062.588a170.974%20170.974%200%200%200%201.892%208.48c-3.28.932-6.445%201.924-9.474%202.98C17.309%2083.498%200%2098.307%200%20113.668c0%2015.865%2018.582%2031.778%2046.812%2041.427a145.52%20145.52%200%200%200%206.921%202.165a167.467%20167.467%200%200%200-2.01%209.138c-5.354%2028.2-1.173%2050.591%2012.134%2058.266c13.744%207.926%2036.812-.22%2059.273-19.855a145.567%20145.567%200%200%200%205.342-4.923a168.064%20168.064%200%200%200%206.92%206.314c21.758%2018.722%2043.246%2026.282%2056.54%2018.586c13.731-7.949%2018.194-32.003%2012.4-61.268a145.016%20145.016%200%200%200-1.535-6.842c1.62-.48%203.21-.974%204.76-1.488c29.348-9.723%2048.443-25.443%2048.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365%2070.984c-1.4.463-2.836.91-4.3%201.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11%209.31-21.767%2012.459-31.957c2.619.758%205.16%201.557%207.61%202.4c23.69%208.156%2038.14%2020.213%2038.14%2029.504c0%209.896-15.606%2022.743-40.946%2031.14Zm-10.514%2020.834c2.562%2012.94%202.927%2024.64%201.23%2033.787c-1.524%208.219-4.59%2013.698-8.382%2015.893c-8.067%204.67-25.32-1.4-43.927-17.412a156.726%20156.726%200%200%201-6.437-5.87c7.214-7.889%2014.423-17.06%2021.459-27.246c12.376-1.098%2024.068-2.894%2034.671-5.345a134.17%20134.17%200%200%201%201.386%206.193ZM87.276%20214.515c-7.882%202.783-14.16%202.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923%20156.923%200%200%201%201.869-8.499c10.486%202.32%2022.093%203.988%2034.498%204.994c7.084%209.967%2014.501%2019.128%2021.976%2027.15a134.668%20134.668%200%200%201-4.877%204.492c-9.933%208.682-19.886%2014.842-28.658%2017.94ZM50.35%20144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322%2013.897-21.212%2037.076-29.293c2.813-.98%205.757-1.905%208.812-2.773c3.204%2010.42%207.406%2021.315%2012.477%2032.332c-5.137%2011.18-9.399%2022.249-12.634%2032.792a134.718%20134.718%200%200%201-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134%206.425-47.789c8.564-4.958%2027.502%202.111%2047.463%2019.835a144.318%20144.318%200%200%201%203.841%203.545c-7.438%207.987-14.787%2017.08-21.808%2026.988c-12.04%201.116-23.565%202.908-34.161%205.309a160.342%20160.342%200%200%201-1.76-7.887Zm110.427%2027.268a347.8%20347.8%200%200%200-7.785-12.803c8.168%201.033%2015.994%202.404%2023.343%204.08c-2.206%207.072-4.956%2014.465-8.193%2022.045a381.151%20381.151%200%200%200-7.365-13.322Zm-45.032-43.861c5.044%205.465%2010.096%2011.566%2015.065%2018.186a322.04%20322.04%200%200%200-30.257-.006c4.974-6.559%2010.069-12.652%2015.192-18.18ZM82.802%2087.83a323.167%20323.167%200%200%200-7.227%2013.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634%2015.093-2.97%2023.209-3.984a321.524%20321.524%200%200%200-7.848%2012.897Zm8.081%2065.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3%205.045-14.885%208.298-22.6a321.187%20321.187%200%200%200%207.257%2013.246c2.594%204.48%205.28%208.868%208.038%2013.147Zm37.542%2031.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192%209.899.29%2014.978.29c5.218%200%2010.376-.117%2015.453-.343c-4.985%206.774-10.018%2012.97-15.028%2018.486Zm52.198-57.817c3.422%207.8%206.306%2015.345%208.596%2022.52c-7.422%201.694-15.436%203.058-23.88%204.071a382.417%20382.417%200%200%200%207.859-13.026a347.403%20347.403%200%200%200%207.425-13.565Zm-16.898%208.101a358.557%20358.557%200%200%201-12.281%2019.815a329.4%20329.4%200%200%201-23.444.823c-7.967%200-15.716-.248-23.178-.732a310.202%20310.202%200%200%201-12.513-19.846h.001a307.41%20307.41%200%200%201-10.923-20.627a310.278%20310.278%200%200%201%2010.89-20.637l-.001.001a307.318%20307.318%200%200%201%2012.413-19.761c7.613-.576%2015.42-.876%2023.31-.876H128c7.926%200%2015.743.303%2023.354.883a329.357%20329.357%200%200%201%2012.335%2019.695a358.489%20358.489%200%200%201%2011.036%2020.54a329.472%20329.472%200%200%201-11%2020.722Zm22.56-122.124c8.572%204.944%2011.906%2024.881%206.52%2051.026c-.344%201.668-.73%203.367-1.15%205.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789%20160.789%200%200%201%205.888-5.4c18.9-16.447%2036.564-22.941%2044.612-18.3ZM128%2090.808c12.625%200%2022.86%2010.235%2022.86%2022.86s-10.235%2022.86-22.86%2022.86s-22.86-10.235-22.86-22.86s10.235-22.86%2022.86-22.86Z'%3e%3c/path%3e%3c/svg%3e", gr = "/vite.svg";
function mr() {
  const [S, b] = fr(0);
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsxs("div", { children: [
      /* @__PURE__ */ g.jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ g.jsx("img", { src: gr, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ g.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ g.jsx("img", { src: pr, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ g.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ g.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ g.jsxs("button", { onClick: () => b((P) => P + 1), children: [
        "count is ",
        S
      ] }),
      /* @__PURE__ */ g.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ g.jsx("code", { children: "src/App.tsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ g.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
export {
  mr as default
};
