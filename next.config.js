const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  compiler: {
    styledComponents: true
  }
});
