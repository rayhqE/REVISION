const path = require("path");
const express = require("express");
const adminRouter = express.Router();
const rootDir = require("../utils/pathUtils");

adminRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addContact.html"));
});

adminRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "contactSent.html"));
});
module.exports = adminRouter;
