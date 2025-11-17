import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

import globalStyles from "./styles/global.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles }
];

export const meta: MetaFunction = () => [
  { charset: "utf-8" },
  { title: "ETabrizi / UI Engineer" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  {
    name: "description",
    content: "A simple Remix-powered portfolio with projects, bio, and contact info."
  }
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link${isActive ? " active" : ""}`;

export default function App() {
  return (
    <Document>
      <header>
        <nav className="nav">
          <div className="logo">ETabrizi — UI Engineer</div>
          <div className="nav-links">
            <NavLink to="/" prefetch="intent" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" prefetch="intent" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/work" prefetch="intent" className={navLinkClass}>
              Work
            </NavLink>
            <NavLink to="/contact" prefetch="intent" className={navLinkClass}>
              Contact
            </NavLink>
          </div>
        </nav>
      </header>
      <Outlet />
    </Document>
  );
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
