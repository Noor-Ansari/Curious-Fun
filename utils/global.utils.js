const bodyParser = require("body-parser");
const ejsLayout = require("express-ejs-layouts");

const postRouter = require("../routes/post.route");

function setGlobalMiddlewares(serverInstance) {
  serverInstance.use(bodyParser.json());
  serverInstance.use(bodyParser.urlencoded({ extended: false }));
  serverInstance.use(ejsLayout)
}

function setRouting(serverInstance) {
  serverInstance.use("/post", postRouter);
}

module.exports = { setGlobalMiddlewares, setRouting };
