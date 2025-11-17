import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-CMZP5U5L.js";
import "/build/_shared/chunk-U4FRFQSK.js";
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

// app/routes/work.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/work.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/work.tsx"
  );
  import.meta.hot.lastModified = "1763402274122.3855";
}
var meta = () => [{
  title: "Work | ETabrizi \u2014 UI Engineer"
}, {
  name: "description",
  content: "A closer look at shipped projects and systems work."
}];
function WorkRoute() {
  _s();
  const {
    projects
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "panel", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "section-title", children: "Selected work" }, void 0, false, {
      fileName: "app/routes/work.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
      marginTop: 0,
      color: "#475569"
    }, children: "Work that blends product thinking, UX craft, and front-end execution." }, void 0, false, {
      fileName: "app/routes/work.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "work-list", children: projects.map((project) => {
      const [primaryImage, ...restImages] = project.images;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "panel work-item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "work-media", children: primaryImage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: primaryImage, alt: `${project.title} visual`, className: "project-img", loading: "lazy" }, void 0, false, {
          fileName: "app/routes/work.tsx",
          lineNumber: 58,
          columnNumber: 35
        }, this) : null }, void 0, false, {
          fileName: "app/routes/work.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "work-copy", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "tag-row", children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pill", children: tag }, tag, false, {
            fileName: "app/routes/work.tsx",
            lineNumber: 62,
            columnNumber: 46
          }, this)) }, void 0, false, {
            fileName: "app/routes/work.tsx",
            lineNumber: 61,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
            margin: "0.35rem 0"
          }, children: project.title }, void 0, false, {
            fileName: "app/routes/work.tsx",
            lineNumber: 66,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            color: "#666",
            fontWeight: 600
          }, children: project.subtitle }, void 0, false, {
            fileName: "app/routes/work.tsx",
            lineNumber: 69,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            color: "#475569"
          }, children: project.summary }, void 0, false, {
            fileName: "app/routes/work.tsx",
            lineNumber: 73,
            columnNumber: 19
          }, this),
          restImages.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "work-thumbs", children: restImages.map((src, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src, alt: `${project.title} visual ${idx + 2}`, className: "project-img", loading: "lazy" }, src + idx, false, {
            fileName: "app/routes/work.tsx",
            lineNumber: 77,
            columnNumber: 53
          }, this)) }, void 0, false, {
            fileName: "app/routes/work.tsx",
            lineNumber: 76,
            columnNumber: 40
          }, this) : null,
          project.link ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: project.link, className: "button secondary", target: "_blank", rel: "noreferrer", style: {
            width: "fit-content"
          }, children: "View details \u2192" }, void 0, false, {
            fileName: "app/routes/work.tsx",
            lineNumber: 79,
            columnNumber: 35
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/work.tsx",
          lineNumber: 60,
          columnNumber: 17
        }, this)
      ] }, project.id, true, {
        fileName: "app/routes/work.tsx",
        lineNumber: 56,
        columnNumber: 18
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/work.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/work.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/work.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s(WorkRoute, "DZowJppIVR2fz7wqEJxMGbGJ2Is=", false, function() {
  return [useLoaderData];
});
_c = WorkRoute;
var _c;
$RefreshReg$(_c, "WorkRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  WorkRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/work-4A4MY5IT.js.map
