const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const CONFIG = require("./config");

const app = express();

// setup global middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// database connection

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
