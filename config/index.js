const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === "production") {
  module.exports = require("./production");
} else {
  module.exports = require("./development");
}
