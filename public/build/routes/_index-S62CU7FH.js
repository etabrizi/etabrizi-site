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
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1763402868435.0515";
}
var meta = () => [{
  title: "Home | Etabrizi - UI Engineer"
}, {
  name: "description",
  content: "Portfolio overview with selected work and ways to connect."
}];
function IndexRoute() {
  _s();
  const {
    featured
  } = useLoaderData();
  const bubbleRefs = (0, import_react2.useRef)([]);
  (0, import_react2.useEffect)(() => {
    const handlePointerMove = (event) => {
      const maxDist = 180;
      const maxPush = 16;
      bubbleRefs.current.forEach((bubble) => {
        if (!bubble)
          return;
        const rect = bubble.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = cx - event.clientX;
        const dy = cy - event.clientY;
        const dist = Math.hypot(dx, dy) || 1;
        const strength = Math.max(0, maxDist - dist) / maxDist;
        const pushX = dx / dist * strength * maxPush;
        const pushY = dy / dist * strength * maxPush;
        bubble.style.setProperty("--repel-x", `${pushX}px`);
        bubble.style.setProperty("--repel-y", `${pushY}px`);
      });
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bubble-group", "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bubble-wrap", ref: (el) => el && (bubbleRefs.current[0] = el), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bubble bubble-red", children: "HTML" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bubble-wrap", ref: (el) => el && (bubbleRefs.current[1] = el), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bubble bubble-green", children: "JS" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bubble-wrap", ref: (el) => el && (bubbleRefs.current[2] = el), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bubble bubble-blue", children: "CSS" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "hero", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Hi, I'm Emyr Tabrizi." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Specialising in creating intuitive, accessible, and inclusive digital experiences, I combine a deep understanding of accessibility standards with user-centred design principles and technical expertise to deliver impactful, high-quality solutions." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "button-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/work", prefetch: "intent", className: "button", children: "View projects \u2192" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/contact", prefetch: "intent", className: "button secondary", children: "Get in touch" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "flex",
        justifyContent: "space-between"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "section-title", children: "Featured work" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/work", className: "button secondary", prefetch: "intent", children: "See all" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      featured.map((project) => {
        const [primaryImage, ...restImages] = project.images;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "panel home-feature", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "home-media", children: primaryImage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: primaryImage, alt: project.title, className: "project-img", loading: "lazy" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 114,
            columnNumber: 33
          }, this) : null }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "home-copy", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "tag-row", children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pill", children: tag }, tag, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 118,
              columnNumber: 44
            }, this)) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 117,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
              margin: "0.35rem 0"
            }, children: project.title }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 122,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              color: "#666",
              fontWeight: 600
            }, children: project.subtitle }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 125,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              color: "#475569"
            }, children: project.summary }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 129,
              columnNumber: 17
            }, this),
            restImages.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "home-thumbs", children: restImages.map((src, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src, alt: `${project.title} visual ${idx + 2}`, className: "project-img", loading: "lazy" }, src + idx, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 133,
              columnNumber: 51
            }, this)) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 132,
              columnNumber: 38
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this)
        ] }, project.id, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 112,
          columnNumber: 16
        }, this);
      })
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "flex",
        justifyContent: "space-between"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "section-title", children: "Videos" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "video-grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "panel video-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "video-frame", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", { src: "https://www.youtube.com/embed/EfHhUHGawvo?start=2", title: "Demo video", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 150,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 149,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
              margin: "0 0 0.35rem"
            }, children: "Javascript for, forEach and map loops" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 153,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              margin: 0,
              color: "#5a5a5a"
            }, children: "Short video overview of Loops in JS." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 156,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 152,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 148,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "panel video-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "video-frame", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", { src: "https://www.youtube.com/embed/QUwB2o3Ak-w?start=18", title: "Demo video 2", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 166,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 165,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
              margin: "0 0 0.35rem"
            }, children: "Next.js Server Actions" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 169,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              margin: 0,
              color: "#5a5a5a"
            }, children: "Overview of Server Actions in Next.js" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 172,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 168,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 164,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "panel video-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "video-frame", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", { src: "https://www.youtube.com/embed/l35kog5Am40?start=25", title: "Demo video 3", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 182,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 181,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
              margin: "0 0 0.35rem"
            }, children: "Illustrator - Making a glossy button" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 185,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              margin: 0,
              color: "#5a5a5a"
            }, children: "How to create a glossy button in Adobe illustrator." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 188,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 184,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s(IndexRoute, "1R5XCp6hOSdv7UrydlvsM0Uj25w=", false, function() {
  return [useLoaderData];
});
_c = IndexRoute;
var _c;
$RefreshReg$(_c, "IndexRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  IndexRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-S62CU7FH.js.map
