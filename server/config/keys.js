if (process.env.NODE_ENV === "production") {
  // IN PRODUCTION
  module.exports = require("./prod");
} else {
  // IN DEVELOPMENT
  module.exports = require("./dev");
}
