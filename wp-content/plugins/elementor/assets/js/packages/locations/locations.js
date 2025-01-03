/*! For license information please see locations.js.LICENSE.txt */
!(function () {
  'use strict';
  var e = {
      react: function (e) {
        e.exports = window.React;
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = (t[n] = { exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  (r.d = function (e, t) {
    for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var n = {};
  !(function () {
    r.r(n),
      r.d(n, {
        __flushAllInjections: function () {
          return u;
        },
        createLocation: function () {
          return a;
        },
      });
    var e = r('react'),
      t = class extends e.Component {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        render() {
          return this.state.hasError ? this.props.fallback : this.props.children;
        }
      };
    function o({ children: r }) {
      return e.createElement(t, { fallback: null }, e.createElement(e.Suspense, { fallback: null }, r));
    }
    var i = 10,
      c = [];
    function a() {
      const t = new Map(),
        r = (function (e) {
          return () => [...e.values()].sort((e, t) => e.priority - t.priority);
        })(t),
        n = (function (t) {
          return () => (0, e.useMemo)(() => t(), []);
        })(r),
        a = (function (t) {
          return (r) => {
            const n = t();
            return e.createElement(
              e.Fragment,
              null,
              n.map(({ id: t, component: n }) => e.createElement(n, { ...r, key: t })),
            );
          };
        })(n),
        u = (function (t) {
          return ({ component: r, id: n, options: c = {} }) => {
            var a;
            !t.has(n) || c?.overwrite
              ? t.set(n, {
                  id: n,
                  component: ((a = r), (t) => e.createElement(o, null, e.createElement(a, { ...t }))),
                  priority: c.priority ?? i,
                })
              : console.warn(
                  `An injection with the id "${n}" already exists. Did you mean to use "options.overwrite"?`,
                );
          };
        })(t);
      return c.push(() => t.clear()), { inject: u, getInjections: r, useInjections: n, Slot: a };
    }
    function u() {
      c.forEach((e) => e());
    }
  })(),
    ((window.elementorV2 = window.elementorV2 || {}).locations = n);
})();
