const withImages = require("next-images");

const isProd = process.env.NODE_ENV === "production";

module.exports = withImages({
  esModule: true,
  assetPrefix: isProd
    ? "https://cdn.statically.io/gh/juniorboos.github.io/portfolio/"
    : "",
});
