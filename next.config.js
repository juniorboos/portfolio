const withImages = require("next-images");
module.exports = withImages({ esModule: true });

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd
    ? "https://cdn.statically.io/gh/juniorboos.github.io/portfolio/"
    : "",
};
