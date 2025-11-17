/** @type {import('@remix-run/dev').AppConfig} */
const config = {
  ignoredRouteFiles: ["**/.*"],
  server: "./server.ts",
  serverBuildTarget: "netlify",
  serverBuildPath: "netlify/functions/server/index.js",
  serverModuleFormat: "esm",
  future: {
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_singleFetch: true,
    v3_throwAbortReason: true
  }
};

export default config;
