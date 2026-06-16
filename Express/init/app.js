//Core Module
// const http = require("http");

//External Module
const express = require("express");

//Local Module
const handleRequest = require("./user");

const app = express();

app.use((req, res, next) => {
  console.log("Came in First middleware: ", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Came in Second middleware: ", req.url, req.method);
  res.send("<p>Welcome to Express.js</p>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on Port:${PORT}`);
});
