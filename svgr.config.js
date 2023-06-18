/** @type {import('@svgr/webpack').Config} */
const defaultIndexTemplate = require("./scripts/icon-template");

module.exports = {
  icon: true,
  typescript: true,
  outDir: "./src/components/icons",
  indexTemplate: defaultIndexTemplate,
};
