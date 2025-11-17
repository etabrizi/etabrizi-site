import {
  createHotContext
} from "/build/_shared/chunk-ZYYEHGAO.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/contact.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/contact.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/contact.tsx"
  );
  import.meta.hot.lastModified = "1763402264926.9133";
}
var meta = () => [{
  title: "Contact | ETabrizi \u2014 UI Engineer"
}, {
  name: "description",
  content: "Ways to reach Emyr, ask about collaborations, or say hello."
}];
function ContactRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "panel contact-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "section-title", children: "Let's connect" }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
      color: "#475569",
      marginTop: 0
    }, children: "I'm open to collaborations, consulting, and full-time opportunities. If you'd like to see a CV or chat about work, let's connect on LinkedIn." }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", style: {
      marginTop: "1rem"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "panel card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "LinkedIn" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 44,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.linkedin.com", target: "_blank", rel: "noreferrer", style: {
        color: "#0ea5e9"
      }, children: "linkedin.com/in/emyrtabrizi" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 45,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = ContactRoute;
var _c;
$RefreshReg$(_c, "ContactRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ContactRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/contact-BFDUXC5N.js.map
