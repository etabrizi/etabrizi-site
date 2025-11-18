import { createRequestHandler as createNetlifyRequestHandler } from "@netlify/remix-adapter";
import { createRequestHandler as createNodeRequestHandler } from "@remix-run/node";
import * as build from "@remix-run/dev/server-build";

// Netlify handler (for deploy)
export const handler = createNetlifyRequestHandler({
  build,
  mode: process.env.NODE_ENV
});

// Default export for local dev / remix-serve (expects a Node-style handler)
export default createNodeRequestHandler(build, process.env.NODE_ENV);

// Re-export build metadata so tools like remix-serve can read it.
export * from "@remix-run/dev/server-build";
