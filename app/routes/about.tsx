import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "About | ETabrizi — UI Engineer" },
  {
    name: "description",
    content: "Background, values, and approach to product design and delivery."
  }
];

export default function AboutRoute() {
  return (
    <main className="page">
      <section className="panel">
        <h1 className="section-title">About</h1>
        <div className="about-intro">
          <img
            src="/images/profile.jpg"
            alt="Portrait of Emyr Tabrizi"
            className="avatar"
          />
          <div className="stack" style={{ display: "grid", gap: "1.25rem", color: "#3a3a3a" }}>
            <p style={{ margin: 0 }}>
              Proficient in JavaScript, HTML, CSS, React, and Next.js, I develop accessible,
              visually consistent, and performant interfaces. Experienced in building and
              maintaining scalable UI design systems that improve development efficiency and
              enhance user experience.
            </p>
            <p style={{ margin: 0 }}>
              Strong communication, presentation, and delivery management skills, with a
              genuine passion for crafting exceptional user interfaces.
            </p>
            <p style={{ margin: 0 }}>
              Recent GOV.UK experience includes work with the DWP, MoJ, and Defra, applying
              the GDS Design System to ensure consistency, accessibility, and usability across
              government platforms.
            </p>
            <p style={{ margin: 0 }}>
              Worked in both Azure DevOps and Java-based development environments.
            </p>
          </div>
        </div>

        <div className="grid" style={{ marginTop: "1.75rem" }}>
          <div className="panel card">
            <h3 style={{ margin: "0 0 0.5rem" }}>UI technical skills</h3>
            <p style={{ margin: 0, color: "#4b4b4b", lineHeight: 1.6 }}>
              TypeScript / JavaScript / Next.js / React / Router / Remix (SSR) / React Native /
              Capacitor / Storybook (npm design system package distribution) / GraphQL / PWA
              (progressive web apps) / Ag-Grid (data visualisation) / HTML / HTMX / Nunjucks /
              11ty / MaterialUI / Jest / React testing library / Puppeteer e2e testing /
              Cypress e2e testing / TDD / BDD / Micro front-end Architecture (module federation
              pattern) / NX (scaffolding) / Webpack / Rollup / JQuery / AJAX / REST API
              integration / Swagger / OpenAPI / Postman / Insomnia / JSON / GIT / SourceTree /
              Accessibility (AA / AAA standards) / CSS / SASS / BEM / Tailwind / GSAP / CMS
              experience (contentful, strapi, prismic) / Screen reader tools - JAWS, NVDA &
              Equal Access Checker IBM / SendGrid (email marketing)
            </p>
          </div>

          <div className="panel card">
            <h3 style={{ margin: "0 0 0.5rem" }}>UX / UI / Prototyping skills</h3>
            <p style={{ margin: 0, color: "#4b4b4b", lineHeight: 1.6 }}>
              Figma / Photoshop / Illustrator / InDesign / Prototyping / Wireframing /
              Sketching / Balsamiq / Miro storyboarding / Graphic Design / Illustration /
              Print Design (Worked as a Web / Graphic Designer in early career), GDS toolkit
            </p>
          </div>

          <div className="panel card">
            <h3 style={{ margin: "0 0 0.5rem" }}>Backend / Session / Authentication</h3>
            <p style={{ margin: 0, color: "#4b4b4b", lineHeight: 1.6 }}>
              Node / Express / Superbase / Firebase / OAuth / Msal.js / Docker / Redis / JWT
              Web Tokens / Mongo
            </p>
          </div>

          <div className="panel card">
            <h3 style={{ margin: "0 0 0.5rem" }}>AI</h3>
            <p style={{ margin: 0, color: "#4b4b4b", lineHeight: 1.6 }}>
              Codex / Claude / Midjourney / Github Spec-kit
            </p>
          </div>
          <div className="panel card">
            <h3 style={{ margin: "0 0 0.5rem" }}>Client list</h3>
            <p style={{ margin: 0, color: "#4b4b4b", lineHeight: 1.6 }}>
              DWP, MoJ, Defra, EA, Superdry, CACI, Shell, First Utility, Npower, Wolverhampton Council, Leicester city council, Birmingham City university, UCAS
            </p>
          </div>

          <div className="panel card">
            <h3 style={{ margin: "0 0 0.5rem" }}>Career sector experience</h3>
            <p style={{ margin: 0, color: "#4b4b4b", lineHeight: 1.6 }}>
              Government, Local Council, Energy, Retail, E-commerce, Digital agency,
              Education and GIS
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
