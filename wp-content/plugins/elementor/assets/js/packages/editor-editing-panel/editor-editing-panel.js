/*! For license information please see editor-editing-panel.js.LICENSE.txt */
!(function () {
  'use strict';
  var e = {
      react: function (e) {
        e.exports = window.React;
      },
      '@elementor/editor': function (e) {
        e.exports = window.elementorV2.editor;
      },
      '@elementor/editor-panels': function (e) {
        e.exports = window.elementorV2.editorPanels;
      },
      '@elementor/editor-responsive': function (e) {
        e.exports = window.elementorV2.editorResponsive;
      },
      '@elementor/editor-v1-adapters': function (e) {
        e.exports = window.elementorV2.editorV1Adapters;
      },
      '@elementor/icons': function (e) {
        e.exports = window.elementorV2.icons;
      },
      '@elementor/schema': function (e) {
        e.exports = window.elementorV2.schema;
      },
      '@elementor/ui': function (e) {
        e.exports = window.elementorV2.ui;
      },
      '@elementor/utils': function (e) {
        e.exports = window.elementorV2.utils;
      },
      '@elementor/wp-media': function (e) {
        e.exports = window.elementorV2.wpMedia;
      },
      '@wordpress/i18n': function (e) {
        e.exports = window.wp.i18n;
      },
    },
    t = {};
  function n(l) {
    var a = t[l];
    if (void 0 !== a) return a.exports;
    var r = (t[l] = { exports: {} });
    return e[l](r, r.exports, n), r.exports;
  }
  (n.d = function (e, t) {
    for (var l in t) n.o(t, l) && !n.o(e, l) && Object.defineProperty(e, l, { enumerable: !0, get: t[l] });
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
  var l = {};
  !(function () {
    n.r(l),
      n.d(l, {
        replaceControl: function () {
          return E;
        },
        useControl: function () {
          return v;
        },
      });
    var e,
      t = n('react'),
      a = n('@elementor/editor-panels'),
      r = n('@wordpress/i18n'),
      o = n('@elementor/editor-v1-adapters'),
      i = n('@elementor/ui'),
      c = n('@elementor/utils'),
      m = n('@elementor/icons'),
      s = n('@elementor/wp-media'),
      u = n('@elementor/editor-responsive'),
      d = n('@elementor/editor'),
      p = n('@elementor/schema'),
      E = ({ component: t, condition: n }) => {
        e = { component: t, condition: n };
      },
      g = (0, t.createContext)(null);
    function v(e) {
      const n = (0, t.useContext)(g);
      if (!n) throw new Error('useControl must be used within a ControlContext');
      return { ...n, value: n.value ?? e };
    }
    function b() {
      const e = window;
      return (e.elementor?.selection?.getElements?.() ?? []).reduce((e, t) => {
        const n = t.model.get('widgetType') || t.model.get('elType');
        return n && e.push({ id: t.model.get('id'), type: n }), e;
      }, []);
    }
    function h() {
      const e = window;
      return e?.elementor?.widgetsCache || null;
    }
    var y = (0, t.createContext)(null);
    function f({ children: e, element: n, elementType: l }) {
      return t.createElement(y.Provider, { value: { element: n, elementType: l } }, e);
    }
    function _() {
      const e = (0, t.useContext)(y);
      if (!e) throw new Error('useElementContext must be used within a ElementContextProvider');
      return e;
    }
    function w(e) {
      const t = window,
        n = t.elementor?.getContainer?.(e);
      return n ?? null;
    }
    var S = ({ children: e }) =>
        t.createElement(i.Typography, { component: 'label', variant: 'caption', color: 'text.secondary' }, e),
      x = (0, i.styled)(i.Stack)(({ theme: e, gap: t, direction: n }) => ({
        '> :only-child': { width: '100%' },
        '&:where( :has( > :nth-child( 2 ):last-child ) ) > :where( * )': {
          width: 'column' === n ? '100%' : `calc( 50% - ${e.spacing(t / 2)})`,
        },
        '&:where( :has( > :nth-child( 3 ):last-child ) ) > :where( * )': {
          width: 'column' === n ? '100%' : `calc( 33.3333% - ${e.spacing(2 * t)} / 3)`,
        },
      })),
      I = (e) =>
        t.createElement(x, {
          gap: 1,
          direction: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          ...e,
        }),
      C = ({ bind: e, children: n }) => {
        const { element: l, elementType: a } = _(),
          r = a.propsSchema[e]?.type.default,
          i = (({ id: e, bind: t }) =>
            (0, o.__privateUseListenTo)(
              (0, o.commandEndEvent)('document/elements/settings'),
              () => {
                const n = w(e);
                return n?.settings?.get(t) ?? null;
              },
              [e, t],
            ))({ id: l.id, bind: e }),
          c = i ?? r ?? null;
        return t.createElement(
          g.Provider,
          {
            value: {
              setValue: (t) => {
                (({ id: e, props: t }) => {
                  const n = w(e);
                  (0, o.__privateRunCommand)('document/elements/settings', {
                    container: n,
                    settings: { ...t },
                  });
                })({ id: l.id, props: { [e]: t } });
              },
              value: c,
              bind: e,
            },
          },
          n,
        );
      },
      k = ({ children: e, bind: n }) =>
        t.createElement(C, { bind: n }, t.createElement(I, { flexWrap: 'wrap' }, e));
    k.Label = S;
    var T = ({ title: e, children: n }) => {
        const l = (0, t.useId)(),
          a = `label-${l}`,
          r = `content-${l}`;
        return t.createElement(
          i.Accordion,
          { disableGutters: !0, defaultExpanded: !0 },
          t.createElement(
            i.AccordionSummary,
            { 'aria-controls': r, id: a },
            t.createElement(i.AccordionSummaryText, { primaryTypographyProps: { variant: 'caption' } }, e),
          ),
          t.createElement(
            i.AccordionDetails,
            { id: r, 'aria-labelledby': a },
            t.createElement(i.Stack, { gap: 2.5 }, n),
          ),
        );
      },
      P = ({ placeholder: e, type: n, value: l, onChange: a, endAdornment: r, startAdornment: o }) =>
        t.createElement(i.TextField, {
          size: 'tiny',
          type: n,
          value: l,
          onChange: a,
          placeholder: e,
          InputProps: { endAdornment: r, startAdornment: o },
        }),
      z = ({ options: e, onClick: n, value: l }) => {
        const a = (0, i.usePopupState)({
          variant: 'popover',
          popupId: (0, t.useId)(),
        });
        return t.createElement(
          i.InputAdornment,
          { position: 'end' },
          t.createElement(
            i.Button,
            {
              size: 'small',
              color: 'inherit',
              sx: { font: 'inherit', minWidth: 'initial' },
              ...(0, i.bindTrigger)(a),
            },
            l.toUpperCase(),
          ),
          t.createElement(
            i.Menu,
            { MenuListProps: { dense: !0 }, ...(0, i.bindMenu)(a) },
            e.map((l, r) =>
              t.createElement(
                i.MenuItem,
                {
                  key: l,
                  onClick: () =>
                    ((t) => {
                      n(e[t]), a.close();
                    })(r),
                },
                l.toUpperCase(),
              ),
            ),
          ),
        );
      },
      L = ['px', '%', 'em', 'rem', 'vw'],
      V = ({ units: e = L, placeholder: n, startIcon: l }) => {
        const { value: a, setValue: r } = v(),
          [o, c] = (({ external: e, setExternal: n, persistWhen: l, fallback: a }) => {
            function r(e, t) {
              return e || a(t);
            }
            const [o, i] = (0, t.useState)(r(e, void 0));
            return (
              (0, t.useEffect)(() => {
                i((t) => r(e, t));
              }, [e]),
              [
                o,
                (e) => {
                  const t = ('function' == typeof e ? e : () => e)(o);
                  i(t),
                    n(
                      (function (e) {
                        if (l(e)) return e;
                      })(t),
                    );
                },
              ]
            );
          })({
            external: a,
            setExternal: r,
            persistWhen: (e) => !!e?.value.size || 0 === e?.value.size,
            fallback: (e) => ({
              $$type: 'size',
              value: { unit: e?.value.unit || 'px', size: NaN },
            }),
          });
        return t.createElement(P, {
          endAdornment: t.createElement(z, {
            options: e,
            onClick: (e) => {
              c((t) => ({ ...t, value: { ...t.value, unit: e } }));
            },
            value: o.value.unit,
          }),
          placeholder: n,
          startAdornment: l ?? t.createElement(i.InputAdornment, { position: 'start' }, l),
          type: 'number',
          value: Number.isNaN(o.value.size) ? '' : o.value.size,
          onChange: (e) => {
            const { value: t } = e.target;
            c((e) => ({
              ...e,
              value: { ...e.value, size: t || '0' === t ? parseFloat(t) : NaN },
            }));
          },
        });
      },
      D = ({ options: e }) => {
        const { value: n, setValue: l } = v();
        return t.createElement(
          i.Select,
          {
            size: 'tiny',
            value: n ?? '',
            onChange: (e) => {
              l(e.target.value);
            },
          },
          e.map(({ label: e, ...n }) => t.createElement(i.MenuItem, { key: n.value, ...n }, e)),
        );
      },
      $ = {
        image: () => {
          const { value: e, setValue: n } = v(),
            { data: l } = (0, s.useWpMediaAttachment)(e?.value?.attachmentId),
            a = l?.url ?? e?.value?.url,
            { open: o } = (0, s.useWpMediaFrame)({
              types: ['image'],
              multiple: !1,
              selected: e?.value?.attachmentId,
              onSelect: (e) => {
                n({ $$type: 'image', value: { attachmentId: e.id } });
              },
            });
          return t.createElement(
            i.Card,
            { variant: 'outlined' },
            t.createElement(i.CardMedia, { image: a, sx: { height: 150 } }),
            t.createElement(
              i.CardOverlay,
              null,
              t.createElement(
                i.Button,
                {
                  color: 'inherit',
                  size: 'small',
                  variant: 'outlined',
                  onClick: () => {
                    o({ mode: 'browse' });
                  },
                },
                (0, r.__)('Select Image', 'elementor'),
              ),
              t.createElement(
                i.Button,
                {
                  color: 'inherit',
                  size: 'small',
                  variant: 'text',
                  startIcon: t.createElement(m.UploadIcon, null),
                  onClick: () => {
                    o({ mode: 'upload' });
                  },
                },
                (0, r.__)('Upload Image', 'elementor'),
              ),
            ),
          );
        },
        text: ({ placeholder: e }) => {
          const { value: n, setValue: l } = v('');
          return t.createElement(i.TextField, {
            type: 'text',
            size: 'tiny',
            value: n,
            onChange: (e) => l(e.target.value),
            placeholder: e,
          });
        },
        textarea: ({ placeholder: e }) => {
          const { value: n, setValue: l } = v();
          return t.createElement(i.TextField, {
            size: 'tiny',
            multiline: !0,
            fullWidth: !0,
            rows: 5,
            value: n,
            onChange: (e) => {
              l(e.target.value);
            },
            placeholder: e,
          });
        },
        size: V,
        select: D,
      },
      B = (e) => $[e],
      A = (0, c.createError)({
        code: 'CONTROL_TYPE_NOT_FOUND',
        message: 'Control type not found.',
      }),
      M = ({ props: n, type: l }) => {
        const { value: a } = v(),
          r = B(l);
        if (!r) throw new A({ context: { type: l } });
        const o =
          (({ value: t }) => {
            let n = !1;
            try {
              n = !!e?.condition({ value: t });
            } catch {}
            return n ? e?.component : void 0;
          })({ value: a }) || r;
        return t.createElement(o, { ...n });
      },
      N = () => {
        const { elementType: e } = _();
        return t.createElement(
          i.Stack,
          null,
          e.controls.map(({ type: e, value: n }, l) =>
            'control' === e
              ? t.createElement(O, { key: n.bind, control: n })
              : 'section' === e
                ? t.createElement(
                    T,
                    { key: e + '.' + l, title: n.label },
                    n.items?.map((e) =>
                      'control' === e.type
                        ? t.createElement(O, {
                            key: e.value.bind,
                            control: e.value,
                          })
                        : null,
                    ),
                  )
                : null,
          ),
        );
      },
      O = ({ control: e }) =>
        B(e.type)
          ? t.createElement(
              k,
              { bind: e.bind },
              e.label ? t.createElement(k.Label, null, e.label) : null,
              t.createElement(M, { type: e.type, props: e.props }),
            )
          : null,
      W = (0, t.createContext)(null);
    function j({ children: e, selectedStyleDef: n, selectedClassesProp: l }) {
      const a = { breakpoint: (0, u.useActiveBreakpoint)(), state: null };
      return t.createElement(
        W.Provider,
        {
          value: {
            selectedStyleDef: n,
            selectedMeta: a,
            selectedClassesProp: l,
          },
        },
        e,
      );
    }
    var F = (e) => {
        const t = w(e);
        return t?.model.get('styles') || null;
      },
      U = (e) => {
        const { element: n } = _(),
          {
            selectedStyleDef: l,
            selectedMeta: a,
            selectedClassesProp: r,
          } = (function () {
            const e = (0, t.useContext)(W);
            if (!e) throw new Error('UseStyleContext must be used within a StyleContextProvider');
            return e;
          })(),
          i = (({ elementID: e, styleDefID: t, meta: n, propName: l }) =>
            (0, o.__privateUseListenTo)(
              (0, o.commandEndEvent)('document/atomic-widgets/styles'),
              () => {
                if (!t) return null;
                const a = F(e)?.[t];
                if (!a) return null;
                const r = (function (e, t) {
                  return e.variants.find((e) => e.meta.breakpoint === t.breakpoint && e.meta.state === t.state);
                })(a, n);
                return r?.props[l] ?? null;
              },
              [e, t, l, n],
            ))({ elementID: n.id, styleDefID: l?.id, meta: a, propName: e });
        return [
          i,
          (t) => {
            (({ elementID: e, styleDefID: t, meta: n, props: l, bind: a }) => {
              const r = w(e);
              (0, o.__privateRunCommand)('document/atomic-widgets/styles', {
                container: r,
                styleDefID: t,
                bind: a,
                meta: n,
                props: l,
              });
            })({
              elementID: n.id,
              styleDefID: l?.id,
              props: { [e]: t },
              meta: a,
              bind: r,
            });
          },
        ];
      },
      R = ({ bind: e, children: n }) => {
        const [l, a] = U(e);
        return t.createElement(g.Provider, { value: { bind: e, value: l, setValue: a } }, n);
      };
    R.Label = S;
    var H = () =>
        t.createElement(
          T,
          { title: (0, r.__)('Size', 'elementor') },
          t.createElement(
            i.Stack,
            { gap: 1.5 },
            t.createElement(
              i.Stack,
              { direction: 'row', gap: 2 },
              t.createElement(G, {
                bind: 'width',
                label: (0, r.__)('Width', 'elementor'),
              }),
              t.createElement(G, {
                bind: 'height',
                label: (0, r.__)('Height', 'elementor'),
              }),
            ),
            t.createElement(
              i.Stack,
              { gap: 1.5, sx: { pt: 1.5 } },
              t.createElement(
                i.Stack,
                { direction: 'row', gap: 2 },
                t.createElement(G, {
                  bind: 'minWidth',
                  label: (0, r.__)('Min. Width', 'elementor'),
                }),
                t.createElement(G, {
                  bind: 'minHeight',
                  label: (0, r.__)('Min. Height', 'elementor'),
                }),
              ),
              t.createElement(
                i.Stack,
                { direction: 'row', gap: 2 },
                t.createElement(G, {
                  bind: 'maxWidth',
                  label: (0, r.__)('Max. Width', 'elementor'),
                }),
                t.createElement(G, {
                  bind: 'maxHeight',
                  label: (0, r.__)('Max. Height', 'elementor'),
                }),
              ),
            ),
          ),
        ),
      G = ({ label: e, bind: n }) =>
        t.createElement(
          R,
          { bind: n },
          t.createElement(
            I,
            { direction: 'column' },
            t.createElement(R.Label, null, e),
            t.createElement(M, { type: 'size' }),
          ),
        ),
      J = 'tiny',
      X = () => {
        const [e, n] = U('fontStyle'),
          [l, a] = U('textDecoration'),
          o = [e, ...(l || '').split(' ')];
        return t.createElement(
          I,
          null,
          t.createElement(S, null, (0, r.__)('Style', 'elementor')),
          t.createElement(
            i.ToggleButtonGroup,
            { value: o },
            t.createElement(
              Z,
              {
                value: 'italic',
                onChange: (t) => n(e === t ? null : t),
                'aria-label': 'italic',
                sx: { marginLeft: 'auto' },
              },
              t.createElement(m.ItalicIcon, { fontSize: J }),
            ),
            t.createElement(
              Y,
              {
                value: 'line-through',
                currentValues: l || '',
                updateValues: a,
                'aria-label': 'line-through',
              },
              t.createElement(m.StrikethroughIcon, { fontSize: J }),
            ),
            t.createElement(
              Y,
              {
                value: 'underline',
                currentValues: l || '',
                updateValues: a,
                'aria-label': 'underline',
              },
              t.createElement(m.UnderlineIcon, { fontSize: J }),
            ),
          ),
        );
      },
      Y = ({ children: e, value: n, currentValues: l, updateValues: a, 'aria-label': r }) => {
        const o = l.split(' ').filter(Boolean),
          i = o.includes(n);
        return t.createElement(
          Z,
          {
            value: n,
            onChange: (e) => {
              a(i ? o.filter((t) => t !== e).join(' ') || null : [...o, e].join(' '));
            },
            selected: i,
            'aria-label': r,
          },
          e,
        );
      },
      Z = ({ onChange: e, ...n }) =>
        t.createElement(i.ToggleButton, {
          ...n,
          onChange: (t, n) => {
            e(n);
          },
          size: J,
        }),
      q = () =>
        t.createElement(
          R,
          { bind: 'font-size' },
          t.createElement(
            I,
            null,
            t.createElement(R.Label, null, (0, r.__)('Font Size', 'elementor')),
            t.createElement(V, null),
          ),
        ),
      K = [
        { label: (0, r.__)('Light - 400', 'elementor'), value: 400 },
        { label: (0, r.__)('Regular - 500', 'elementor'), value: 500 },
        { label: (0, r.__)('Semi Bold - 600', 'elementor'), value: 600 },
        { label: (0, r.__)('Bold - 700', 'elementor'), value: 700 },
        { label: (0, r.__)('Black - 900', 'elementor'), value: 900 },
      ],
      Q = () =>
        t.createElement(
          R,
          { bind: 'fontWeight' },
          t.createElement(
            I,
            null,
            t.createElement(R.Label, null, (0, r.__)('Font Weight', 'elementor')),
            t.createElement(D, { options: K }),
          ),
        ),
      ee = () => {
        const { value: e, setValue: n } = v(),
          l = te((e) => {
            n(e);
          });
        return t.createElement(i.UnstableColorPicker, {
          value: e,
          onChange: l,
        });
      },
      te = (e, t = 300) => {
        let n;
        return (...l) => {
          clearTimeout(n), (n = setTimeout(() => e(...l), t));
        };
      },
      ne = () =>
        t.createElement(
          R,
          { bind: 'color' },
          t.createElement(
            I,
            null,
            t.createElement(R.Label, null, (0, r.__)('Text Color', 'elementor')),
            t.createElement(ee, null),
          ),
        ),
      le = () =>
        t.createElement(
          R,
          { bind: 'letter-spacing' },
          t.createElement(
            I,
            null,
            t.createElement(R.Label, null, (0, r.__)('Letter Spacing', 'elementor')),
            t.createElement(V, null),
          ),
        ),
      ae = () =>
        t.createElement(
          R,
          { bind: 'word-spacing' },
          t.createElement(
            I,
            null,
            t.createElement(R.Label, null, (0, r.__)('Word Spacing', 'elementor')),
            t.createElement(V, null),
          ),
        ),
      re = ({ children: e, defaultOpen: n = !1 }) => {
        const [l, a] = (0, t.useState)(n);
        return t.createElement(
          i.Stack,
          { sx: { py: 0.5 } },
          t.createElement(
            i.Button,
            {
              fullWidth: !0,
              size: 'small',
              color: 'secondary',
              variant: 'outlined',
              onClick: () => {
                a((e) => !e);
              },
              endIcon: t.createElement(oe, { open: l }),
            },
            l ? (0, r.__)('Show less', 'elementor') : (0, r.__)('Show more', 'elementor'),
          ),
          t.createElement(i.Collapse, { in: l, timeout: 'auto' }, e),
        );
      },
      oe = (0, i.styled)(m.ChevronDownIcon, {
        shouldForwardProp: (e) => 'open' !== e,
      })(({ theme: e, open: t }) => ({
        transform: t ? 'rotate(180deg)' : 'rotate(0)',
        transition: e.transitions.create('transform', {
          duration: e.transitions.duration.standard,
        }),
      })),
      ie = (0, i.styled)(i.ToggleButtonGroup)`
	${({ justify: e }) => `justify-content: ${e};`}
`,
      ce = ({ justify: e = 'end', size: n = 'tiny', value: l, onChange: a, items: r, exclusive: o = !1 }) =>
        t.createElement(
          ie,
          {
            justify: e,
            value: l,
            onChange: (e, t) => {
              a(t);
            },
            exclusive: o,
          },
          r.map(({ label: e, value: l, icon: a }) =>
            t.createElement(
              i.ToggleButton,
              { key: l, value: l, 'aria-label': e, size: n },
              t.createElement(a, { fontSize: n }),
            ),
          ),
        ),
      me = ({ options: e }) => {
        const { value: n, setValue: l } = v();
        return t.createElement(ce, {
          items: e,
          value: n || null,
          onChange: (e) => {
            l(e || void 0);
          },
          exclusive: !0,
        });
      },
      se = [
        {
          value: 'capitalize',
          label: (0, r.__)('Capitalize', 'elementor'),
          icon: m.LetterCaseIcon,
        },
        {
          value: 'uppercase',
          label: (0, r.__)('Uppercase', 'elementor'),
          icon: m.LetterCaseUpperIcon,
        },
        {
          value: 'lowercase',
          label: (0, r.__)('Lowercase', 'elementor'),
          icon: m.LetterCaseLowerIcon,
        },
      ],
      ue = () =>
        t.createElement(
          I,
          null,
          t.createElement(R.Label, null, (0, r.__)('Transform', 'elementor')),
          t.createElement(R, { bind: 'text-transform' }, t.createElement(me, { options: se })),
        ),
      de = [
        {
          value: 'left',
          label: (0, r.__)('Left', 'elementor'),
          icon: m.AlignLeftIcon,
        },
        {
          value: 'center',
          label: (0, r.__)('Center', 'elementor'),
          icon: m.AlignCenterIcon,
        },
        {
          value: 'right',
          label: (0, r.__)('Right', 'elementor'),
          icon: m.AlignRightIcon,
        },
        {
          value: 'justify',
          label: (0, r.__)('Justify', 'elementor'),
          icon: m.AlignJustifiedIcon,
        },
      ],
      pe = () =>
        t.createElement(
          I,
          null,
          t.createElement(R.Label, null, (0, r.__)('Alignment', 'elementor')),
          t.createElement(R, { bind: 'text-align' }, t.createElement(me, { options: de })),
        ),
      Ee = () =>
        t.createElement(
          T,
          { title: (0, r.__)('Typography', 'elementor') },
          t.createElement(
            i.Stack,
            { gap: 1.5 },
            t.createElement(Q, null),
            t.createElement(q, null),
            t.createElement(i.Divider, null),
            t.createElement(ne, null),
            t.createElement(
              re,
              null,
              t.createElement(
                i.Stack,
                { gap: 1.5, sx: { pt: 1.5 } },
                t.createElement(le, null),
                t.createElement(ae, null),
                t.createElement(i.Divider, null),
                t.createElement(pe, null),
                t.createElement(X, null),
                t.createElement(ue, null),
              ),
            ),
          ),
        ),
      ge = (e) => void 0 === e || '' === e || Number.isNaN(Number(e)),
      ve = ({ placeholder: e }) => {
        const { value: n, setValue: l } = v();
        return t.createElement(i.TextField, {
          size: 'tiny',
          type: 'number',
          value: ge(n) ? '' : n,
          onChange: (e) => {
            const t = e.target.value;
            l(ge(t) ? void 0 : Number(t));
          },
          placeholder: e,
        });
      },
      be = () =>
        t.createElement(
          R,
          { bind: 'zIndex' },
          t.createElement(
            I,
            null,
            t.createElement(R.Label, null, (0, r.__)('Z-Index', 'elementor')),
            t.createElement(ve, null),
          ),
        ),
      he = () =>
        t.createElement(
          T,
          { title: (0, r.__)('Position', 'elementor') },
          t.createElement(i.Stack, { gap: 1.5 }, t.createElement(be, null)),
        ),
      ye = ({ label: e }) => {
        const { value: n, setValue: l } = v(),
          { top: a, right: o, bottom: c, left: s, isLinked: u = !1 } = n?.value || {},
          d = (e, t) => {
            l({
              $$type: 'linked-dimensions',
              value: {
                isLinked: u,
                top: u ? t : a,
                right: u ? t : o,
                bottom: u ? t : c,
                left: u ? t : s,
                [e]: t,
              },
            });
          },
          p = u ? m.LinkIcon : m.DetachIcon;
        return t.createElement(
          t.Fragment,
          null,
          t.createElement(
            i.Stack,
            { direction: 'row', gap: 2 },
            t.createElement(S, null, e),
            t.createElement(
              i.ToggleButton,
              {
                'aria-label': (0, r.__)('Link Inputs', 'elementor'),
                size: 'tiny',
                value: 'check',
                selected: u,
                sx: { marginLeft: 'auto' },
                onChange: () => {
                  l({
                    $$type: 'linked-dimensions',
                    value: {
                      isLinked: !u,
                      top: a,
                      right: u ? o : a,
                      bottom: u ? c : a,
                      left: u ? s : a,
                    },
                  });
                },
              },
              t.createElement(p, { fontSize: 'tiny' }),
            ),
          ),
          t.createElement(
            i.Stack,
            { direction: 'row', gap: 2 },
            t.createElement(
              I,
              { direction: 'column' },
              t.createElement(S, null, (0, r.__)('Top', 'elementor')),
              t.createElement(fe, {
                bind: 'top',
                value: a,
                setValue: d,
                startIcon: t.createElement(m.SideTopIcon, { fontSize: 'tiny' }),
              }),
            ),
            t.createElement(
              I,
              { direction: 'column' },
              t.createElement(S, null, (0, r.__)('Right', 'elementor')),
              t.createElement(fe, {
                bind: 'right',
                value: o,
                setValue: d,
                startIcon: t.createElement(m.SideRightIcon, {
                  fontSize: 'tiny',
                }),
              }),
            ),
          ),
          t.createElement(
            i.Stack,
            { direction: 'row', gap: 2 },
            t.createElement(
              I,
              { direction: 'column' },
              t.createElement(S, null, (0, r.__)('Bottom', 'elementor')),
              t.createElement(fe, {
                bind: 'bottom',
                value: c,
                setValue: d,
                startIcon: t.createElement(m.SideBottomIcon, {
                  fontSize: 'tiny',
                }),
              }),
            ),
            t.createElement(
              I,
              { direction: 'column' },
              t.createElement(S, null, (0, r.__)('Left', 'elementor')),
              t.createElement(fe, {
                bind: 'left',
                value: s,
                setValue: d,
                startIcon: t.createElement(m.SideLeftIcon, {
                  fontSize: 'tiny',
                }),
              }),
            ),
          ),
        );
      },
      fe = ({ bind: e, startIcon: n, value: l, setValue: a }) =>
        t.createElement(
          g.Provider,
          { value: { bind: e, setValue: (t) => a(e, t), value: l } },
          t.createElement(V, { startIcon: n }),
        ),
      _e = () =>
        t.createElement(
          T,
          { title: (0, r.__)('Spacing', 'elementor') },
          t.createElement(
            i.Stack,
            { gap: 1.5 },
            t.createElement(
              R,
              { bind: 'padding' },
              t.createElement(ye, { label: (0, r.__)('Padding', 'elementor') }),
            ),
            t.createElement(i.Divider, null),
            t.createElement(
              R,
              { bind: 'margin' },
              t.createElement(ye, { label: (0, r.__)('Margin', 'elementor') }),
            ),
          ),
        ),
      we = () => {
        const e = (function () {
            const { element: e } = _(),
              t =
                ((n = e.id),
                (0, o.__privateUseListenTo)((0, o.commandEndEvent)('document/atomic-widgets/styles'), () => F(n), [
                  n,
                ]));
            var n;
            return Object.values(t || {})[0] ?? null;
          })(),
          n = (function () {
            const { elementType: e } = _(),
              t = Object.entries(e.propsSchema).find(([, { type: e }]) => 'classes' === e.key);
            if (!t) throw new Error('Element does not have a classes prop');
            return t[0];
          })();
        return t.createElement(
          j,
          { selectedStyleDef: e, selectedClassesProp: n },
          t.createElement(
            i.Stack,
            null,
            t.createElement(H, null),
            t.createElement(he, null),
            t.createElement(Ee, null),
            t.createElement(_e, null),
          ),
        );
      },
      Se = () => {
        const { getTabProps: e, getTabPanelProps: n, getTabsProps: l } = (0, i.useTabs)('settings');
        return t.createElement(
          i.Stack,
          { direction: 'column', sx: { width: '100%' } },
          t.createElement(
            i.Tabs,
            {
              variant: 'fullWidth',
              indicatorColor: 'secondary',
              textColor: 'inherit',
              ...l(),
            },
            t.createElement(i.Tab, {
              label: (0, r.__)('General', 'elementor'),
              ...e('settings'),
            }),
            t.createElement(i.Tab, {
              label: (0, r.__)('Style', 'elementor'),
              ...e('style'),
            }),
          ),
          t.createElement(i.TabPanel, { ...n('settings'), disablePadding: !0 }, t.createElement(N, null)),
          t.createElement(i.TabPanel, { ...n('style'), disablePadding: !0 }, t.createElement(we, null)),
        );
      },
      {
        panel: xe,
        usePanelActions: Ie,
        usePanelStatus: Ce,
      } = (0, a.__createPanel)({
        id: 'editing-panel',
        component: () => {
          const e = (0, o.__privateUseListenTo)(
              [
                (0, o.commandEndEvent)('document/elements/select'),
                (0, o.commandEndEvent)('document/elements/deselect'),
              ],
              () => b(),
            ),
            [n] = e,
            l =
              ((i = n?.type),
              (0, o.__privateUseListenTo)(
                (0, o.commandEndEvent)('editor/documents/load'),
                () => {
                  if (!i) return null;
                  const e = h(),
                    t = e?.[i];
                  return t?.atomic_controls && t?.atomic_props_schema
                    ? {
                        key: i,
                        controls: t.atomic_controls,
                        propsSchema: t.atomic_props_schema,
                        title: t.title,
                      }
                    : null;
                },
                [i],
              ));
          var i;
          if (1 !== e.length || !l) return null;
          const c = (0, r.__)('Edit %s', 'elementor').replace('%s', l.title);
          return t.createElement(
            a.Panel,
            null,
            t.createElement(a.PanelHeader, null, t.createElement(a.PanelHeaderTitle, null, c)),
            t.createElement(
              a.PanelBody,
              null,
              t.createElement(f, { element: n, elementType: l }, t.createElement(Se, null)),
            ),
          );
        },
      }),
      ke = () => {
        const e = b(),
          t = h();
        return 1 === e.length && !!t?.[e[0].type]?.atomic_controls;
      },
      Te = () => {
        const { atomicDynamicTags: e } = (() => {
          const e = window;
          return e.elementor?.config ?? {};
        })();
        return e ? { tags: e.tags, groups: e.groups } : null;
      },
      Pe = p.z.object({ $$type: p.z.string(), value: p.z.any() }),
      ze = (e) => 'dynamic' === e.key,
      Le = (e) => {
        return (t = e), Pe.safeParse(t).success && 'dynamic' === e.$$type;
        var t;
      },
      Ve = (e) => {
        let n = [];
        const { elementType: l } = _(),
          a = l.propsSchema?.[e];
        if (a) {
          const e = a.additional_types.find(ze);
          n = e?.settings.categories || [];
        }
        return (0, t.useMemo)(() => De(n), [n.join()]);
      },
      De = (e) => {
        const t = Te();
        if (!e.length || !t?.tags) return [];
        const n = new Set(e);
        return Object.values(t.tags).filter((e) => e.categories.some((e) => n.has(e)));
      },
      $e = (e, n) => {
        const l = Ve(e);
        return (0, t.useMemo)(() => l.find((e) => e.name === n) ?? null, [l, n]);
      },
      Be = ({ bind: e, children: n }) => {
        const { value: l, setValue: a, bind: r } = v(),
          { name: o = '', settings: i } = l?.value ?? {},
          c = $e(r, o);
        if (!c) throw new Error(`Dynamic tag ${o} not found`);
        const m = c.props_schema[e]?.type.default,
          s = i?.[e] ?? m;
        return t.createElement(
          g.Provider,
          {
            value: {
              setValue: (t) => {
                a({
                  $$type: 'dynamic',
                  value: { name: o, settings: { ...i, [e]: t } },
                });
              },
              value: s,
              bind: e,
            },
          },
          n,
        );
      },
      Ae = 'elementor/dynamic/non-dynamic-values-history',
      Me = (e) => {
        const t = Ne(),
          { element: n } = _(),
          l = `${n.id}-${e}`;
        return [
          t[l] ?? null,
          (e) => {
            Oe({ ...t, [l]: e });
          },
        ];
      },
      Ne = () => JSON.parse(sessionStorage.getItem(Ae) || '{}'),
      Oe = (e) => {
        sessionStorage.setItem(Ae, JSON.stringify(e));
      },
      We = 'tiny',
      je = ({ onSelect: e }) => {
        const [n, l] = (0, t.useState)(''),
          { groups: a } = Te() || {},
          { bind: o, value: c, setValue: s } = v(),
          [, u] = Me(o),
          d = Le(c),
          p = Fe(o, n);
        return t.createElement(
          i.Stack,
          null,
          t.createElement(
            i.Box,
            { px: 1.5, pb: 1 },
            t.createElement(i.TextField, {
              fullWidth: !0,
              size: We,
              value: n,
              onChange: (e) => {
                l(e.target.value);
              },
              placeholder: (0, r.__)('Search dynamic tag', 'elementor'),
              InputProps: {
                startAdornment: t.createElement(
                  i.InputAdornment,
                  { position: 'start' },
                  t.createElement(m.SearchIcon, { fontSize: We }),
                ),
              },
            }),
          ),
          t.createElement(i.Divider, null),
          t.createElement(
            i.Box,
            { sx: { overflowY: 'auto', height: 260, width: 220 } },
            p.length > 0
              ? t.createElement(
                  i.MenuList,
                  { role: 'listbox', tabIndex: 0 },
                  p.map(([n, l], r) =>
                    t.createElement(
                      t.Fragment,
                      { key: r },
                      t.createElement(
                        i.ListSubheader,
                        {
                          sx: { typography: 'caption', color: 'text.tertiary' },
                        },
                        a?.[n]?.title || n,
                      ),
                      l.map(({ value: n, label: l }) => {
                        const a = d && n === c?.value?.name;
                        return t.createElement(
                          i.MenuItem,
                          {
                            key: n,
                            selected: a,
                            autoFocus: a,
                            sx: { typography: 'caption' },
                            onClick: () =>
                              ((t) => {
                                d || u(c), s({ $$type: 'dynamic', value: { name: t } }), e?.();
                              })(n),
                          },
                          l,
                        );
                      }),
                    ),
                  ),
                )
              : t.createElement(
                  i.Stack,
                  { alignItems: 'center', p: 2.5, gap: 1.5 },
                  t.createElement(m.PhotoIcon, { fontSize: 'large' }),
                  t.createElement(
                    i.Typography,
                    {
                      align: 'center',
                      variant: 'caption',
                      color: 'text.secondary',
                    },
                    (0, r.__)('Sorry, nothing matched', 'elementor'),
                    t.createElement('br', null),
                    '“',
                    n,
                    '”.',
                  ),
                  t.createElement(
                    i.Typography,
                    {
                      align: 'center',
                      variant: 'caption',
                      color: 'text.secondary',
                    },
                    t.createElement(
                      i.Link,
                      {
                        color: 'secondary',
                        variant: 'caption',
                        component: 'button',
                        onClick: () => l(''),
                      },
                      (0, r.__)('Clear the filters', 'elementor'),
                    ),
                    ' ',
                    (0, r.__)('and try again.', 'elementor'),
                  ),
                ),
          ),
        );
      },
      Fe = (e, t) => [
        ...Ve(e).reduce(
          (e, { name: n, label: l, group: a }) =>
            l.toLowerCase().includes(t.trim().toLowerCase())
              ? (e.has(a) || e.set(a, []), e.get(a)?.push({ label: l, value: n }), e)
              : e,
          new Map(),
        ),
      ],
      Ue = 'tiny',
      Re = ({ dynamicTag: e }) => {
        const n = (0, t.useId)(),
          l = (0, i.usePopupState)({ variant: 'popover', popupId: n });
        return e.atomic_controls.length
          ? t.createElement(
              t.Fragment,
              null,
              t.createElement(
                i.IconButton,
                {
                  size: Ue,
                  ...(0, i.bindTrigger)(l),
                  'aria-label': (0, r.__)('Settings', 'elementor'),
                },
                t.createElement(m.SettingsIcon, { fontSize: Ue }),
              ),
              t.createElement(
                i.Popover,
                {
                  disableScrollLock: !0,
                  anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                  ...(0, i.bindPopover)(l),
                },
                t.createElement(
                  i.Paper,
                  {
                    component: i.Stack,
                    sx: { minHeight: '300px', width: '220px' },
                  },
                  t.createElement(
                    i.Stack,
                    {
                      direction: 'row',
                      alignItems: 'center',
                      px: 1.5,
                      pt: 2,
                      pb: 1,
                    },
                    t.createElement(m.DatabaseIcon, {
                      fontSize: Ue,
                      sx: { mr: 0.5 },
                    }),
                    t.createElement(i.Typography, { variant: 'subtitle2' }, e.label),
                    t.createElement(
                      i.IconButton,
                      { sx: { ml: 'auto' }, size: Ue, onClick: l.close },
                      t.createElement(m.XIcon, { fontSize: Ue }),
                    ),
                  ),
                  t.createElement(He, { controls: e.atomic_controls }),
                ),
              ),
            )
          : null;
      },
      He = ({ controls: e }) => {
        const n = e.filter(({ type: e }) => 'section' === e),
          { getTabsProps: l, getTabProps: a, getTabPanelProps: r } = (0, i.useTabs)(0);
        return n.length
          ? t.createElement(
              t.Fragment,
              null,
              t.createElement(
                i.Tabs,
                { indicatorColor: 'secondary', textColor: 'secondary', ...l() },
                n.map(({ value: e }, n) =>
                  t.createElement(i.Tab, {
                    key: n,
                    label: e.label,
                    sx: { px: 1, py: 0.5 },
                    ...a(n),
                  }),
                ),
              ),
              t.createElement(i.Divider, null),
              n.map(({ value: e }, n) =>
                t.createElement(
                  i.TabPanel,
                  { key: n, sx: { flexGrow: 1 }, ...r(n) },
                  t.createElement(
                    i.Stack,
                    { gap: 1, px: 2 },
                    e.items.map((e) =>
                      'control' === e.type
                        ? t.createElement(Ge, {
                            key: e.value.bind,
                            control: e.value,
                          })
                        : null,
                    ),
                  ),
                ),
              ),
            )
          : null;
      },
      Ge = ({ control: e }) =>
        B(e.type)
          ? t.createElement(
              Be,
              { bind: e.bind },
              e.label ? t.createElement(S, null, e.label) : null,
              t.createElement(M, { type: e.type, props: e.props }),
            )
          : null;
    (0, a.__registerPanel)(xe),
      (0, o.__privateBlockDataCommand)({
        command: 'panel/editor/open',
        condition: ke,
      }),
      (0, d.injectIntoLogic)({
        id: 'editing-panel-hooks',
        component: () => (
          (() => {
            const { open: e } = Ie();
            (0, t.useEffect)(
              () =>
                (0, o.__privateListenTo)((0, o.commandStartEvent)('panel/editor/open'), () => {
                  ke() && e();
                }),
              [],
            );
          })(),
          null
        ),
      }),
      E({
        component: () => {
          const { bind: e, value: n, setValue: l } = v(),
            [a] = Me(e),
            { name: o = '' } = n?.value || {},
            c = (0, t.useId)(),
            s = (0, i.usePopupState)({ variant: 'popover', popupId: c }),
            u = $e(e, o);
          if (!u) throw new Error(`Dynamic tag ${o} not found`);
          return t.createElement(
            i.Box,
            { sx: { width: '100%' } },
            t.createElement(i.UnstableTag, {
              fullWidth: !0,
              showActionsOnHover: !0,
              label: u.label,
              startIcon: t.createElement(m.DatabaseIcon, { fontSize: Ue }),
              ...(0, i.bindTrigger)(s),
              actions: t.createElement(
                t.Fragment,
                null,
                t.createElement(Re, { dynamicTag: u }),
                t.createElement(
                  i.IconButton,
                  {
                    size: Ue,
                    onClick: () => {
                      l(a ?? null);
                    },
                    'aria-label': (0, r.__)('Remove dynamic value', 'elementor'),
                  },
                  t.createElement(m.XIcon, { fontSize: Ue }),
                ),
              ),
            }),
            t.createElement(
              i.Popover,
              {
                disablePortal: !0,
                disableScrollLock: !0,
                anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                ...(0, i.bindPopover)(s),
              },
              t.createElement(
                i.Stack,
                null,
                t.createElement(
                  i.Stack,
                  {
                    direction: 'row',
                    alignItems: 'center',
                    pl: 1.5,
                    pr: 0.5,
                    py: 1.5,
                  },
                  t.createElement(m.DatabaseIcon, {
                    fontSize: Ue,
                    sx: { mr: 0.5 },
                  }),
                  t.createElement(i.Typography, { variant: 'subtitle2' }, (0, r.__)('Dynamic Tags', 'elementor')),
                  t.createElement(
                    i.IconButton,
                    { size: Ue, sx: { ml: 'auto' }, onClick: s.close },
                    t.createElement(m.XIcon, { fontSize: Ue }),
                  ),
                ),
                t.createElement(je, { onSelect: s.close }),
              ),
            ),
          );
        },
        condition: ({ value: e }) => Le(e),
      });
  })(),
    ((window.elementorV2 = window.elementorV2 || {}).editorEditingPanel = l);
})();