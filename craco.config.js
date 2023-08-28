const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@entities": path.resolve(__dirname, "src/entities"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@app": path.resolve(__dirname, "src/app"),
    },
  },
};
