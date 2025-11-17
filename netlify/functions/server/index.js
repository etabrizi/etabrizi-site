var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// server.ts
import { createRequestHandler } from "@remix-run/netlify";

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import ReactDOMServer from "react-dom/server";
import { PassThrough } from "stream";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let didError = !1;
  return new Promise((resolve, reject) => {
    let { pipe, abort } = ReactDOMServer.renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
      {
        onAllReady() {
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              status: didError ? 500 : responseStatusCode,
              headers: responseHeaders
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let didError = !1;
  return new Promise((resolve, reject) => {
    let { pipe, abort } = ReactDOMServer.renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
      {
        onShellReady() {
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              status: didError ? 500 : responseStatusCode,
              headers: responseHeaders
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/styles/global.css?url
var global_default = "/build/_assets/global-SJERZITO.css?url";

// app/root.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var links = () => [
  { rel: "stylesheet", href: global_default }
], meta = () => [
  { charSet: "utf-8" },
  { title: "ETabrizi / UI Engineer" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  {
    name: "description",
    content: "A simple Remix-powered portfolio with projects, bio, and contact info."
  }
], navLinkClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;
function App() {
  return /* @__PURE__ */ jsxs(Document, { children: [
    /* @__PURE__ */ jsx2("header", { children: /* @__PURE__ */ jsxs("nav", { className: "nav", children: [
      /* @__PURE__ */ jsx2("div", { className: "logo", children: "ETabrizi \u2014 UI Engineer" }),
      /* @__PURE__ */ jsxs("div", { className: "nav-links", children: [
        /* @__PURE__ */ jsx2(NavLink, { to: "/", prefetch: "intent", className: navLinkClass, end: !0, children: "Home" }),
        /* @__PURE__ */ jsx2(NavLink, { to: "/about", prefetch: "intent", className: navLinkClass, children: "About" }),
        /* @__PURE__ */ jsx2(NavLink, { to: "/work", prefetch: "intent", className: navLinkClass, children: "Work" }),
        /* @__PURE__ */ jsx2(NavLink, { to: "/contact", prefetch: "intent", className: navLinkClass, children: "Contact" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx2(Outlet, {})
  ] });
}
function Document({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {}),
      /* @__PURE__ */ jsx2(LiveReload, {})
    ] })
  ] });
}

// app/routes/api.projects.ts
var api_projects_exports = {};
__export(api_projects_exports, {
  loader: () => loader
});
import { json } from "@remix-run/node";

// app/data/projects.ts
var projects = [
  {
    id: "Livestock-Information-Design system",
    title: "DeveloperHub",
    subtitle: "A next-generation API portal for livestock data integration",
    summary: "I built the Developer Hub site for Livestock Information (LIS) using Next.js, providing a clean, accessible, and future-ready front-end platform for third-party developers to connect with LIS\u2019s livestock-data services. The portal guides users through registration, sandbox testing, API subscription, and go-live workflows, and includes comprehensive documentation, tutorials and best-practice resources.",
    tags: ["React", "Next.js", "Msal.js"],
    images: ["/images/project-1b.png"],
    link: "https://developers.livestockinformation.org.uk/"
  },
  {
    id: "moj",
    title: "MOJ Design System Website",
    subtitle: "A central design-system portal for MOJ services",
    summary: "I collaborated with a UX design team to build the Design System site for MOJ, the hub where components, patterns, pages, guidance and standards are published for MOJ digital teams. This platform supports cross-team reuse of UI building-blocks, prototyping guidance and production-ready front-end tooling.",
    tags: ["Nunjuks", "11ty", "JS", "CSS", "GDS toolkit"],
    images: ["/images/moj.png"],
    link: "https://design-patterns.service.justice.gov.uk/"
  },
  {
    id: "bcu",
    title: "Birmingham City University (BCU) Website",
    subtitle: "A central touchpoint for thousands of students and staff",
    summary: "I collaborated with a UX design team to help deliver the revamped main website of Birmingham City University (BCU). The project was focused on creating a modern, accessible, performance-optimised digital presence to better serve current/prospective students, staff, alumni and other key audiences.",
    tags: ["UI/UX", "JS", "CSS", "HTML"],
    images: ["/images/bcu2.png"],
    link: "https://www.bcu.ac.uk/"
  }
];

// app/routes/api.projects.ts
var loader = () => json({ projects });

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => ContactRoute,
  meta: () => meta2
});
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var meta2 = () => [
  { title: "Contact | ETabrizi \u2014 UI Engineer" },
  {
    name: "description",
    content: "Ways to reach Emyr, ask about collaborations, or say hello."
  }
];
function ContactRoute() {
  return /* @__PURE__ */ jsx3("main", { className: "page", children: /* @__PURE__ */ jsx3("section", { className: "panel contact-card", children: /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx3("h1", { className: "section-title", children: "Let's connect" }),
    /* @__PURE__ */ jsx3("p", { style: { color: "#475569", marginTop: 0 }, children: "I'm open to collaborations, consulting, and full-time opportunities. If you'd like to see a CV or chat about work, let's connect on LinkedIn." }),
    /* @__PURE__ */ jsx3("div", { className: "grid", style: { marginTop: "1rem" }, children: /* @__PURE__ */ jsxs2("div", { className: "panel card", children: [
      /* @__PURE__ */ jsx3("strong", { children: "LinkedIn" }),
      /* @__PURE__ */ jsx3(
        "a",
        {
          href: "https://www.linkedin.com",
          target: "_blank",
          rel: "noreferrer",
          style: { color: "#0ea5e9" },
          children: "linkedin.com/in/emyrtabrizi"
        }
      )
    ] }) })
  ] }) }) });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => IndexRoute,
  loader: () => loader2,
  meta: () => meta3
});
import { json as json2 } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var meta3 = () => [
  { title: "Home | Etabrizi - UI Engineer" },
  {
    name: "description",
    content: "Portfolio overview with selected work and ways to connect."
  }
];
async function loader2({ request }) {
  let data = await (await fetch(new URL("/api/projects", request.url))).json();
  return json2({ featured: data.projects.slice(0, 1) });
}
function IndexRoute() {
  let { featured } = useLoaderData(), bubbleRefs = useRef([]);
  return useEffect(() => {
    let handlePointerMove = (event) => {
      bubbleRefs.current.forEach((bubble) => {
        if (!bubble)
          return;
        let rect = bubble.getBoundingClientRect(), cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2, dx = cx - event.clientX, dy = cy - event.clientY, dist = Math.hypot(dx, dy) || 1, strength = Math.max(0, 180 - dist) / 180, pushX = dx / dist * strength * 16, pushY = dy / dist * strength * 16;
        bubble.style.setProperty("--repel-x", `${pushX}px`), bubble.style.setProperty("--repel-y", `${pushY}px`);
      });
    };
    return window.addEventListener("pointermove", handlePointerMove), () => window.removeEventListener("pointermove", handlePointerMove);
  }, []), /* @__PURE__ */ jsxs3("main", { className: "page", children: [
    /* @__PURE__ */ jsxs3("div", { className: "bubble-group", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx4(
        "div",
        {
          className: "bubble-wrap",
          ref: (el) => el && (bubbleRefs.current[0] = el),
          children: /* @__PURE__ */ jsx4("div", { className: "bubble bubble-red", children: "HTML" })
        }
      ),
      /* @__PURE__ */ jsx4(
        "div",
        {
          className: "bubble-wrap",
          ref: (el) => el && (bubbleRefs.current[1] = el),
          children: /* @__PURE__ */ jsx4("div", { className: "bubble bubble-green", children: "JS" })
        }
      ),
      /* @__PURE__ */ jsx4(
        "div",
        {
          className: "bubble-wrap",
          ref: (el) => el && (bubbleRefs.current[2] = el),
          children: /* @__PURE__ */ jsx4("div", { className: "bubble bubble-blue", children: "CSS" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx4("section", { className: "hero", children: /* @__PURE__ */ jsxs3("div", { children: [
      /* @__PURE__ */ jsx4("h1", { children: "Hi, I'm Emyr Tabrizi." }),
      /* @__PURE__ */ jsx4("p", { children: "Specialising in creating intuitive, accessible, and inclusive digital experiences, I combine a deep understanding of accessibility standards with user-centred design principles and technical expertise to deliver impactful, high-quality solutions." }),
      /* @__PURE__ */ jsxs3("div", { className: "button-row", children: [
        /* @__PURE__ */ jsx4(Link, { to: "/work", prefetch: "intent", className: "button", children: "View projects" }),
        /* @__PURE__ */ jsx4(Link, { to: "/contact", prefetch: "intent", className: "button secondary", children: "Get in touch" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs3("section", { className: "section", children: [
      /* @__PURE__ */ jsxs3("div", { style: { display: "flex", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsx4("h2", { className: "section-title", children: "Featured work" }),
        /* @__PURE__ */ jsx4(Link, { to: "/work", className: "button secondary", prefetch: "intent", children: "See all" })
      ] }),
      featured.map((project) => {
        let [primaryImage, ...restImages] = project.images;
        return /* @__PURE__ */ jsxs3("article", { className: "panel home-feature", children: [
          /* @__PURE__ */ jsx4("div", { className: "home-media", children: primaryImage ? /* @__PURE__ */ jsx4(
            "img",
            {
              src: primaryImage,
              alt: project.title,
              className: "project-img",
              loading: "lazy"
            }
          ) : null }),
          /* @__PURE__ */ jsxs3("div", { className: "home-copy", children: [
            /* @__PURE__ */ jsx4("div", { className: "tag-row", children: project.tags.map((tag) => /* @__PURE__ */ jsx4("span", { className: "pill", children: tag }, tag)) }),
            /* @__PURE__ */ jsx4("h3", { style: { margin: "0.35rem 0" }, children: project.title }),
            /* @__PURE__ */ jsx4("p", { style: { color: "#666", fontWeight: 600 }, children: project.subtitle }),
            /* @__PURE__ */ jsx4("p", { style: { color: "#475569" }, children: project.summary }),
            restImages.length ? /* @__PURE__ */ jsx4("div", { className: "home-thumbs", children: restImages.map((src, idx) => /* @__PURE__ */ jsx4(
              "img",
              {
                src,
                alt: `${project.title} visual ${idx + 2}`,
                className: "project-img",
                loading: "lazy"
              },
              src + idx
            )) }) : null
          ] })
        ] }, project.id);
      })
    ] }),
    /* @__PURE__ */ jsxs3("section", { className: "section", children: [
      /* @__PURE__ */ jsx4("div", { style: { display: "flex", justifyContent: "space-between" }, children: /* @__PURE__ */ jsx4("h2", { className: "section-title", children: "Videos" }) }),
      /* @__PURE__ */ jsxs3("div", { className: "video-grid", children: [
        /* @__PURE__ */ jsxs3("article", { className: "panel video-card", children: [
          /* @__PURE__ */ jsx4("div", { className: "video-frame", children: /* @__PURE__ */ jsx4(
            "iframe",
            {
              src: "https://www.youtube.com/embed/EfHhUHGawvo?start=2",
              title: "Demo video",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
              allowFullScreen: !0
            }
          ) }),
          /* @__PURE__ */ jsxs3("div", { children: [
            /* @__PURE__ */ jsx4("h3", { style: { margin: "0 0 0.35rem" }, children: "Javascript for, forEach and map loops" }),
            /* @__PURE__ */ jsx4("p", { style: { margin: 0, color: "#5a5a5a" }, children: "Short video overview of Loops in JS." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs3("article", { className: "panel video-card", children: [
          /* @__PURE__ */ jsx4("div", { className: "video-frame", children: /* @__PURE__ */ jsx4(
            "iframe",
            {
              src: "https://www.youtube.com/embed/QUwB2o3Ak-w?start=18",
              title: "Demo video 2",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
              allowFullScreen: !0
            }
          ) }),
          /* @__PURE__ */ jsxs3("div", { children: [
            /* @__PURE__ */ jsx4("h3", { style: { margin: "0 0 0.35rem" }, children: "Next.js Server Actions" }),
            /* @__PURE__ */ jsx4("p", { style: { margin: 0, color: "#5a5a5a" }, children: "Overview of Server Actions in Next.js" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs3("article", { className: "panel video-card", children: [
          /* @__PURE__ */ jsx4("div", { className: "video-frame", children: /* @__PURE__ */ jsx4(
            "iframe",
            {
              src: "https://www.youtube.com/embed/l35kog5Am40?start=25",
              title: "Demo video 3",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
              allowFullScreen: !0
            }
          ) }),
          /* @__PURE__ */ jsxs3("div", { children: [
            /* @__PURE__ */ jsx4("h3", { style: { margin: "0 0 0.35rem" }, children: "Illustrator - Making a glossy button" }),
            /* @__PURE__ */ jsx4("p", { style: { margin: 0, color: "#5a5a5a" }, children: "How to create a glossy button in Adobe illustrator." })
          ] })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => AboutRoute,
  meta: () => meta4
});
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var meta4 = () => [
  { title: "About | ETabrizi \u2014 UI Engineer" },
  {
    name: "description",
    content: "Background, values, and approach to product design and delivery."
  }
];
function AboutRoute() {
  return /* @__PURE__ */ jsx5("main", { className: "page", children: /* @__PURE__ */ jsxs4("section", { className: "panel", children: [
    /* @__PURE__ */ jsx5("h1", { className: "section-title", children: "About" }),
    /* @__PURE__ */ jsxs4("div", { className: "about-intro", children: [
      /* @__PURE__ */ jsx5(
        "img",
        {
          src: "/images/profile.jpg",
          alt: "Portrait of Emyr Tabrizi",
          className: "avatar"
        }
      ),
      /* @__PURE__ */ jsxs4("div", { className: "stack", style: { display: "grid", gap: "1.25rem", color: "#3a3a3a" }, children: [
        /* @__PURE__ */ jsx5("p", { style: { margin: 0 }, children: "Proficient in JavaScript, HTML, CSS, React, and Next.js, I develop accessible, visually consistent, and performant interfaces. Experienced in building and maintaining scalable UI design systems that improve development efficiency and enhance user experience." }),
        /* @__PURE__ */ jsx5("p", { style: { margin: 0 }, children: "Strong communication, presentation, and delivery management skills, with a genuine passion for crafting exceptional user interfaces." }),
        /* @__PURE__ */ jsx5("p", { style: { margin: 0 }, children: "Recent GOV.UK experience includes work with the DWP, MoJ, and Defra, applying the GDS Design System to ensure consistency, accessibility, and usability across government platforms." }),
        /* @__PURE__ */ jsx5("p", { style: { margin: 0 }, children: "Worked in both Azure DevOps and Java-based development environments." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "grid", style: { marginTop: "1.75rem" }, children: [
      /* @__PURE__ */ jsxs4("div", { className: "panel card", children: [
        /* @__PURE__ */ jsx5("h3", { style: { margin: "0 0 0.5rem" }, children: "UI technical skills" }),
        /* @__PURE__ */ jsx5("p", { style: { margin: 0, color: "#4b4b4b", lineHeight: 1.6 }, children: "TypeScript / JavaScript / Next.js / React / Router / Remix (SSR) / React Native / Capacitor / Storybook (npm design system package distribution) / GraphQL / PWA (progressive web apps) / Ag-Grid (data visualisation) / HTML / HTMX / Nunjucks / 11ty / MaterialUI / Jest / React testing library / Puppeteer e2e testing / Cypress e2e testing / TDD / BDD / Micro front-end Architecture (module federation pattern) / NX (scaffolding) / Webpack / Rollup / JQuery / AJAX / REST API integration / Swagger / OpenAPI / Postman / Insomnia / JSON / GIT / SourceTree / Accessibility (AA / AAA standards) / CSS / SASS / BEM / Tailwind / GSAP / CMS experience (contentful, strapi, prismic) / Screen reader tools - JAWS, NVDA & Equal Access Checker IBM / SendGrid (email marketing)" })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "panel card", children: [
        /* @__PURE__ */ jsx5("h3", { style: { margin: "0 0 0.5rem" }, children: "UX / UI / Prototyping skills" }),
        /* @__PURE__ */ jsx5("p", { style: { margin: 0, color: "#4b4b4b", lineHeight: 1.6 }, children: "Figma / Photoshop / Illustrator / InDesign / Prototyping / Wireframing / Sketching / Balsamiq / Miro storyboarding / Graphic Design / Illustration / Print Design (Worked as a Web / Graphic Designer in early career), GDS toolkit" })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "panel card", children: [
        /* @__PURE__ */ jsx5("h3", { style: { margin: "0 0 0.5rem" }, children: "Backend / Session / Authentication" }),
        /* @__PURE__ */ jsx5("p", { style: { margin: 0, color: "#4b4b4b", lineHeight: 1.6 }, children: "Node / Express / Superbase / Firebase / OAuth / Msal.js / Docker / Redis / JWT Web Tokens / Mongo" })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "panel card", children: [
        /* @__PURE__ */ jsx5("h3", { style: { margin: "0 0 0.5rem" }, children: "AI" }),
        /* @__PURE__ */ jsx5("p", { style: { margin: 0, color: "#4b4b4b", lineHeight: 1.6 }, children: "Codex / Claude / Midjourney / Github Spec-kit" })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "panel card", children: [
        /* @__PURE__ */ jsx5("h3", { style: { margin: "0 0 0.5rem" }, children: "Client list" }),
        /* @__PURE__ */ jsx5("p", { style: { margin: 0, color: "#4b4b4b", lineHeight: 1.6 }, children: "DWP, MoJ, Defra, EA, Superdry, CACI, Shell, First Utility, Npower, Wolverhampton Council, Leicester city council, Birmingham City university, UCAS" })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "panel card", children: [
        /* @__PURE__ */ jsx5("h3", { style: { margin: "0 0 0.5rem" }, children: "Career sector experience" }),
        /* @__PURE__ */ jsx5("p", { style: { margin: 0, color: "#4b4b4b", lineHeight: 1.6 }, children: "Government, Local Council, Energy, Retail, E-commerce, Digital agency, Education and GIS" })
      ] })
    ] })
  ] }) });
}

// app/routes/work.tsx
var work_exports = {};
__export(work_exports, {
  default: () => WorkRoute,
  loader: () => loader3,
  meta: () => meta5
});
import { json as json3 } from "@remix-run/node";
import { Link as Link2, useLoaderData as useLoaderData2 } from "@remix-run/react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var meta5 = () => [
  { title: "Work | ETabrizi \u2014 UI Engineer" },
  {
    name: "description",
    content: "A closer look at shipped projects and systems work."
  }
];
async function loader3({ request }) {
  let data = await (await fetch(new URL("/api/projects", request.url))).json();
  return json3({ projects: data.projects });
}
function WorkRoute() {
  let { projects: projects2 } = useLoaderData2();
  return /* @__PURE__ */ jsx6("main", { className: "page", children: /* @__PURE__ */ jsxs5("section", { className: "panel", children: [
    /* @__PURE__ */ jsx6("h1", { className: "section-title", children: "Selected work" }),
    /* @__PURE__ */ jsx6("p", { style: { marginTop: 0, color: "#475569" }, children: "Work that blends product thinking, UX craft, and front-end execution." }),
    /* @__PURE__ */ jsx6("div", { className: "work-list", children: projects2.map((project) => {
      let [primaryImage, ...restImages] = project.images;
      return /* @__PURE__ */ jsxs5("article", { className: "panel work-item", children: [
        /* @__PURE__ */ jsx6("div", { className: "work-media", children: primaryImage ? /* @__PURE__ */ jsx6(
          "img",
          {
            src: primaryImage,
            alt: `${project.title} visual`,
            className: "project-img",
            loading: "lazy"
          }
        ) : null }),
        /* @__PURE__ */ jsxs5("div", { className: "work-copy", children: [
          /* @__PURE__ */ jsx6("div", { className: "tag-row", children: project.tags.map((tag) => /* @__PURE__ */ jsx6("span", { className: "pill", children: tag }, tag)) }),
          /* @__PURE__ */ jsx6("h3", { style: { margin: "0.35rem 0" }, children: project.title }),
          /* @__PURE__ */ jsx6("p", { style: { color: "#666", fontWeight: 600 }, children: project.subtitle }),
          /* @__PURE__ */ jsx6("p", { style: { color: "#475569" }, children: project.summary }),
          restImages.length ? /* @__PURE__ */ jsx6("div", { className: "work-thumbs", children: restImages.map((src, idx) => /* @__PURE__ */ jsx6(
            "img",
            {
              src,
              alt: `${project.title} visual ${idx + 2}`,
              className: "project-img",
              loading: "lazy"
            },
            src + idx
          )) }) : null,
          project.link ? /* @__PURE__ */ jsx6(
            Link2,
            {
              to: project.link,
              className: "button secondary",
              target: "_blank",
              rel: "noreferrer",
              style: { width: "fit-content" },
              children: "View details"
            }
          ) : null
        ] })
      ] }, project.id);
    }) })
  ] }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-GJDVTIVN.js", imports: ["/build/_shared/chunk-E6XIF34M.js", "/build/_shared/chunk-4HXKWYDW.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FOTEFCI3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-VYLDADGV.js", imports: ["/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-ZGC6SHA4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.projects": { id: "routes/api.projects", parentId: "root", path: "api/projects", index: void 0, caseSensitive: void 0, module: "/build/routes/api.projects-OF3362T2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-7G2OBKR6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/work": { id: "routes/work", parentId: "root", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/work-CI7G7OVX.js", imports: ["/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "b573199c", hmr: void 0, url: "/build/manifest-B573199C.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !0, v3_relativeSplatPath: !0, v3_throwAbortReason: !0, v3_routeConfig: !1, v3_singleFetch: !0, v3_lazyRouteDiscovery: !0, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api.projects": {
    id: "routes/api.projects",
    parentId: "root",
    path: "api/projects",
    index: void 0,
    caseSensitive: void 0,
    module: api_projects_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/work": {
    id: "routes/work",
    parentId: "root",
    path: "work",
    index: void 0,
    caseSensitive: void 0,
    module: work_exports
  }
};

// server.ts
var handler = createRequestHandler({
  build: server_build_exports,
  mode: "production"
});
export {
  handler
};
