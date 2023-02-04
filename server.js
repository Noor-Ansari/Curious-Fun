const express = require("express");
const mongoose = require("mongoose");

const { setGlobalMiddlewares, setRouting } = require("./utils/global.utils");
const CONFIG = require("./config");

const app = express();

// setup view engine
app.set("view engine", "ejs");

// setup global middlewares
setGlobalMiddlewares(app);

// setup routing
setRouting(app);

(() => {
  mongoose
    .connect(CONFIG.DB_URI)
    .then(() => console.log("Database connected successfully"))
    .catch((error) =>
      console.log("Error occured while connecting database", error)
    );
  app.listen(CONFIG.PORT, () =>
    console.log(`Server running on PORT : ${CONFIG.PORT}`)
  );
})();
