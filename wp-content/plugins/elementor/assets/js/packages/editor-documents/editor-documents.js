/*! For license information please see editor-documents.js.LICENSE.txt */
!(function () {
  'use strict';
  var t = {
      react: function (t) {
        t.exports = window.React;
      },
      '@elementor/editor': function (t) {
        t.exports = window.elementorV2.editor;
      },
      '@elementor/editor-v1-adapters': function (t) {
        t.exports = window.elementorV2.editorV1Adapters;
      },
      '@elementor/store': function (t) {
        t.exports = window.elementorV2.store;
      },
      '@wordpress/i18n': function (t) {
        t.exports = window.wp.i18n;
      },
    },
    e = {};
  function n(i) {
    var o = e[i];
    if (void 0 !== o) return o.exports;
    var a = (e[i] = { exports: {} });
    return t[i](a, a.exports, n), a.exports;
  }
  (n.d = function (t, e) {
    for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
  }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    });
  var i = {};
  !(function () {
    n.r(i),
      n.d(i, {
        __useActiveDocument: function () {
          return w;
        },
        __useActiveDocumentActions: function () {
          return y;
        },
        __useHostDocument: function () {
          return h;
        },
        __useNavigateToDocument: function () {
          return S;
        },
        slice: function () {
          return c;
        },
      });
    var t = n('@elementor/store'),
      e = n('@elementor/editor-v1-adapters'),
      o = n('@elementor/editor'),
      a = n('react'),
      r = n('@wordpress/i18n');
    function s(t) {
      return !(!t.activeId || !t.entities[t.activeId]);
    }
    var c = (0, t.__createSlice)({
      name: 'documents',
      initialState: { entities: {}, activeId: null, hostId: null },
      reducers: {
        init(t, { payload: e }) {
          (t.entities = e.entities), (t.hostId = e.hostId), (t.activeId = e.activeId);
        },
        activateDocument(t, e) {
          (t.entities[e.payload.id] = e.payload), (t.activeId = e.payload.id);
        },
        setAsHost(t, e) {
          t.hostId = e.payload;
        },
        updateActiveDocument(t, e) {
          s(t) &&
            (t.entities[t.activeId] = {
              ...t.entities[t.activeId],
              ...e.payload,
            });
        },
        startSaving(t) {
          s(t) && (t.entities[t.activeId].isSaving = !0);
        },
        endSaving(t, e) {
          s(t) && (t.entities[t.activeId] = { ...e.payload, isSaving: !1 });
        },
        startSavingDraft: (t) => {
          s(t) && (t.entities[t.activeId].isSavingDraft = !0);
        },
        endSavingDraft(t, e) {
          s(t) && (t.entities[t.activeId] = { ...e.payload, isSavingDraft: !1 });
        },
        markAsDirty(t) {
          s(t) && (t.entities[t.activeId].isDirty = !0);
        },
        markAsPristine(t) {
          s(t) && (t.entities[t.activeId].isDirty = !1);
        },
      },
    });
    function d() {
      const t = window.elementor?.documents;
      if (!t) throw new Error('Elementor Editor V1 documents manager not found');
      return t;
    }
    function u(t) {
      switch (window.elementor?.getPreferences?.('exit_to') || 'this_post') {
        case 'dashboard':
          return t.config.urls.main_dashboard;
        case 'all_posts':
          return t.config.urls.all_post_type;
        default:
          return t.config.urls.exit_to_dashboard;
      }
    }
    function l(t) {
      return t?.config?.panel?.show_copy_and_share ?? !1;
    }
    function m(t) {
      return t.config.urls.permalink ?? '';
    }
    function v(t) {
      const e = t.config.revisions.current_id !== t.id,
        n = u(t);
      return {
        id: t.id,
        title: t.container.settings.get('post_title'),
        type: { value: t.config.type, label: t.config.panel.title },
        status: { value: t.config.status.value, label: t.config.status.label },
        links: { permalink: m(t), platformEdit: n },
        isDirty: t.editor.isChanged || e,
        isSaving: t.editor.isSaving,
        isSavingDraft: !1,
        permissions: {
          allowAddingWidgets: t.config.panel?.allow_adding_widgets ?? !0,
          showCopyAndShare: l(t),
        },
        userCan: { publish: t.config.user.can_publish },
      };
    }
    function p(t, e) {
      let n;
      return (...i) => {
        clearTimeout(n),
          (n = setTimeout(() => {
            t(...i);
          }, e));
      };
    }
    var _ = (t) => t.documents.entities,
      f = (0, t.__createSelector)(
        _,
        (t) => t.documents.activeId,
        (t, e) => (e && t[e] ? t[e] : null),
      ),
      g = (0, t.__createSelector)(
        _,
        (t) => t.documents.hostId,
        (t, e) => (e && t[e] ? t[e] : null),
      );
    function h() {
      return (0, t.__useSelector)(g);
    }
    function w() {
      return (0, t.__useSelector)(f);
    }
    function y() {
      const t = w(),
        n = t?.links?.permalink ?? '';
      return {
        save: (0, a.useCallback)(() => (0, e.__privateRunCommand)('document/save/default'), []),
        saveDraft: (0, a.useCallback)(() => (0, e.__privateRunCommand)('document/save/draft'), []),
        saveTemplate: (0, a.useCallback)(() => (0, e.__privateOpenRoute)('library/save-template'), []),
        copyAndShare: (0, a.useCallback)(() => {
          navigator.clipboard.writeText(n);
        }, [n]),
      };
    }
    function S() {
      return (0, a.useCallback)(async (t) => {
        await (0, e.__privateRunCommand)('editor/documents/switch', {
          id: t,
          setAsInitial: !0,
        });
        const n = new URL(window.location.href);
        n.searchParams.set('post', t.toString()),
          n.searchParams.delete('active-document'),
          history.replaceState({}, '', n);
      }, []);
    }
    (0, t.__registerSlice)(c),
      (function () {
        const { init: n } = c.actions;
        (0, e.__privateListenTo)((0, e.v1ReadyEvent)(), () => {
          const e = d(),
            i = Object.entries(e.documents).reduce((t, [e, n]) => ((t[e] = v(n)), t), {});
          (0, t.__dispatch)(
            n({
              entities: i,
              hostId: e.getInitialId(),
              activeId: e.getCurrentId(),
            }),
          );
        });
      })(),
      (function () {
        const { activateDocument: n, setAsHost: i } = c.actions;
        (0, e.__privateListenTo)((0, e.commandEndEvent)('editor/documents/open'), () => {
          const e = d(),
            o = v(e.getCurrent());
          (0, t.__dispatch)(n(o)), e.getInitialId() === o.id && (0, t.__dispatch)(i(o.id));
        });
      })(),
      (function () {
        const { startSaving: n, endSaving: i, startSavingDraft: o, endSavingDraft: a } = c.actions,
          r = (t) => {
            const e = t;
            return 'autosave' === e.args?.status;
          };
        (0, e.__privateListenTo)((0, e.commandStartEvent)('document/save/save'), (e) => {
          r(e) ? (0, t.__dispatch)(o()) : (0, t.__dispatch)(n());
        }),
          (0, e.__privateListenTo)((0, e.commandEndEvent)('document/save/save'), (e) => {
            const n = v(d().getCurrent());
            r(e) ? (0, t.__dispatch)(a(n)) : (0, t.__dispatch)(i(n));
          });
      })(),
      (function () {
        const { updateActiveDocument: n } = c.actions,
          i = p((e) => {
            const i = e;
            if (!('post_title' in i.args?.settings)) return;
            const o = d().getCurrent().container.settings.get('post_title');
            (0, t.__dispatch)(n({ title: o }));
          }, 400);
        (0, e.__privateListenTo)((0, e.commandEndEvent)('document/elements/settings'), i);
      })(),
      (function () {
        const { markAsDirty: n, markAsPristine: i } = c.actions;
        (0, e.__privateListenTo)((0, e.commandEndEvent)('document/save/set-is-modified'), () => {
          d().getCurrent().editor.isChanged ? (0, t.__dispatch)(n()) : (0, t.__dispatch)(i());
        });
      })(),
      (function () {
        const { updateActiveDocument: n } = c.actions,
          i = p((e) => {
            const i = e;
            if (!('exit_to' in i.args?.settings)) return;
            const o = d().getCurrent(),
              a = u(o),
              r = m(o);
            (0, t.__dispatch)(n({ links: { platformEdit: a, permalink: r } }));
          }, 400);
        (0, e.__privateListenTo)((0, e.commandEndEvent)('document/elements/settings'), i);
      })(),
      (0, o.injectIntoLogic)({
        id: 'documents-hooks',
        component: function () {
          return (
            (function () {
              const t = w(),
                e = h(),
                n = t && 'kit' !== t.type.value ? t : e;
              (0, a.useEffect)(() => {
                if (void 0 === n?.title) return;
                const t = (0, r.__)('Edit "%s" with Elementor', 'elementor').replace('%s', n.title);
                window.document.title = t;
              }, [n?.title]);
            })(),
            null
          );
        },
      });
  })(),
    ((window.elementorV2 = window.elementorV2 || {}).editorDocuments = i);
})();