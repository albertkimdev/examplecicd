const express = require("express");
var router = express.Router();

const startServer = () => {
  console.log("Starting server...");
  const app = express();

  router.get("/", (req, res) => {
    res.json({
      name: "Obama",
      lastname: "Kim",
      isPresident: false
    });
  });

  router.get("/hello", (req, res) => {
    res.json({
      name: "Trump",
      lastname: "Donald",
      isPresident: true
    });
  });

  app.use("/", router);

  return app;
};

module.exports = startServer;
