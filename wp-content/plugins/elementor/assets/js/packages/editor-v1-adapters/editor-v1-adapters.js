/*! For license information please see editor-v1-adapters.js.LICENSE.txt */
!(function () {
  'use strict';
  var e = {
      react: function (e) {
        e.exports = window.React;
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.d = function (e, t) {
    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var r = {};
  !(function () {
    n.r(r),
      n.d(r, {
        __privateBlockDataCommand: function () {
          return a;
        },
        __privateDispatchReadyEvent: function () {
          return y;
        },
        __privateFlushListeners: function () {
          return E;
        },
        __privateGetCurrentEditMode: function () {
          return $;
        },
        __privateIsRouteActive: function () {
          return j;
        },
        __privateListenTo: function () {
          return h;
        },
        __privateOpenRoute: function () {
          return o;
        },
        __privateRegisterRoute: function () {
          return i;
        },
        __privateRunCommand: function () {
          return t;
        },
        __privateSetReady: function () {
          return w;
        },
        __privateUseIsPreviewMode: function () {
          return O;
        },
        __privateUseIsRouteActive: function () {
          return R;
        },
        __privateUseListenTo: function () {
          return P;
        },
        __privateUseRouteStatus: function () {
          return C;
        },
        commandEndEvent: function () {
          return s;
        },
        commandStartEvent: function () {
          return c;
        },
        editModeChangeEvent: function () {
          return v;
        },
        routeCloseEvent: function () {
          return f;
        },
        routeOpenEvent: function () {
          return d;
        },
        v1ReadyEvent: function () {
          return l;
        },
        windowEvent: function () {
          return m;
        },
      });
    var e = n('react');
    function t(e, t) {
      const n = window;
      if (!n.$e?.run) return Promise.reject('`$e.run()` is not available');
      const r = n.$e.run(e, t);
      return r instanceof Promise
        ? r
        : (i = r) &&
            'object' == typeof i &&
            Object.hasOwn(i, 'promise') &&
            Object.hasOwn(i, 'then') &&
            Object.hasOwn(i, 'fail')
          ? ((o = r),
            new Promise((e, t) => {
              o.then(e, t);
            }))
          : Promise.resolve(r);
      var o, i;
    }
    function o(e) {
      const t = window;
      if (!t.$e?.route) return Promise.reject('`$e.route()` is not available');
      try {
        return Promise.resolve(t.$e.route(e));
      } catch (e) {
        return Promise.reject(e);
      }
    }
    function i(e) {
      const t = window;
      if (!t.$e?.routes?.register) return Promise.reject('`$e.routes.register()` is not available');
      const n = e.split('/');
      if (n.length < 2) return Promise.reject(`\`${e}\` is an invalid route`);
      const r = n.pop(),
        o = n.join('/');
      try {
        return Promise.resolve(t.$e.routes.register(o, r, () => null));
      } catch (e) {
        return Promise.reject(e);
      }
    }
    var u = 0;
    function a({ command: e, condition: t }) {
      const n = window,
        r = n.$e?.modules?.hookData?.Dependency;
      if (!r) return Promise.reject('`$e.modules.hookData.Dependency` is not available');
      const o = ++u,
        i = new (class extends r {
          getCommand() {
            return e;
          }
          getId() {
            return `${e}--block--${o}`;
          }
          apply(e) {
            return !t(e);
          }
        })();
      try {
        return Promise.resolve(i.register());
      } catch (e) {
        return Promise.reject(e);
      }
    }
    var c = (e) => ({ type: 'command', name: e, state: 'before' }),
      s = (e) => ({ type: 'command', name: e, state: 'after' }),
      d = (e) => ({ type: 'route', name: e, state: 'open' }),
      f = (e) => ({ type: 'route', name: e, state: 'close' }),
      m = (e) => ({ type: 'window-event', name: e }),
      l = () => m('elementor/initialized'),
      v = () => m('elementor/edit-mode/change'),
      p = !1;
    function w(e) {
      p = e;
    }
    function y() {
      return (function () {
        const e = window.__elementorEditorV1LoadingPromise;
        return e || Promise.reject('Elementor Editor V1 is not loaded');
      })().then(() => {
        w(!0), window.dispatchEvent(new CustomEvent('elementor/initialized'));
      });
    }
    var _ = new Map(),
      g = new AbortController();
    function h(e, t) {
      Array.isArray(e) || (e = [e]);
      const n = e.map((e) => {
        const { type: n, name: r } = e;
        switch (n) {
          case 'command':
            return (function (e, t, n) {
              return b(`elementor/commands/run/${t}`, (t) => {
                'command' === t.type && t.command === e && n(t);
              });
            })(r, e.state, t);
          case 'route':
            return (function (e, t, n) {
              return b(`elementor/routes/${t}`, (t) => {
                'route' === t.type && t.route.startsWith(e) && n(t);
              });
            })(r, e.state, t);
          case 'window-event':
            return b(r, t);
        }
      });
      return () => {
        n.forEach((e) => e());
      };
    }
    function E() {
      g.abort(), _.clear(), w(!1), (g = new AbortController());
    }
    function b(e, t) {
      return (
        !_.has(e) &&
          (_.set(e, []),
          (function (e) {
            window.addEventListener(
              e,
              (function (e) {
                return (t) => {
                  if (!p) return;
                  const n = (function (e) {
                    return e instanceof CustomEvent && e.detail?.command
                      ? {
                          type: 'command',
                          command: e.detail.command,
                          args: e.detail.args,
                          originalEvent: e,
                        }
                      : e instanceof CustomEvent && e.detail?.route
                        ? {
                            type: 'route',
                            route: e.detail.route,
                            originalEvent: e,
                          }
                        : {
                            type: 'window-event',
                            event: e.type,
                            originalEvent: e,
                          };
                  })(t);
                  _.get(e)?.forEach((e) => {
                    e(n);
                  });
                };
              })(e),
              { signal: g.signal },
            );
          })(e)),
        _.get(e)?.push(t),
        () => {
          const n = _.get(e);
          if (!n?.length) return;
          const r = n.filter((e) => e !== t);
          _.set(e, r);
        }
      );
    }
    function P(t, n, r = []) {
      const [o, i] = (0, e.useState)(() => n());
      return (
        (0, e.useEffect)(() => {
          const e = () => i(n());
          return e(), h(t, e);
        }, r),
        o
      );
    }
    function j(e) {
      const t = window;
      return !!t.$e?.routes?.isPartOf(e);
    }
    function $() {
      const e = window;
      return e.elementor?.channels?.dataEditMode?.request?.('activeMode');
    }
    function O() {
      return P(v(), () => 'preview' === $());
    }
    function R(e) {
      return P([d(e), f(e)], () => j(e), [e]);
    }
    function C(e, { blockOnKitRoutes: t = !0, blockOnPreviewMode: n = !0 } = {}) {
      const r = R(e),
        o = R('panel/global'),
        i = O();
      return { isActive: r && !(n && i), isBlocked: (n && i) || (t && o) };
    }
  })(),
    ((window.elementorV2 = window.elementorV2 || {}).editorV1Adapters = r);
})();