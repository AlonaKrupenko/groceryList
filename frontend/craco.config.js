const path = require("path");

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `@import "${path.resolve(
          __dirname,
          "src/styles/_variables.scss"
        )}"; @import "${path.resolve(
          __dirname,
          "src/styles/_mixins.scss"
        )}"; @import "${path.resolve(__dirname, "src/styles/_reset.scss")}";`,
      },
    },
  },
};
