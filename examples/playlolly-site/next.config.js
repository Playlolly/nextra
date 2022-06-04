const withNextra = require("nextra")({
  theme: "@playlolly/nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: {
    codeblocks: true,
  },
  unstable_staticImage: true,
});

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

module.exports = withNextra({
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  reactStrictMode: true,
  experiments: {
    swcLoader: true,
    swcMinify: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
