const express = require("express");
const reqRouter = express.Router();

reqRouter.use("/", (req, res, next) => {
  console.log(req.url);
  next();
});
reqRouter.use("/", (req, res, next) => {
  console.log(req.method);
  next();
});

module.exports = reqRouter;
