const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use("/", (req, res, next) => {
  console.log(req.url);
  next();
});
app.use("/", (req, res, next) => {
  console.log(req.method);
  next();
});

// app.use("/", (req, res, next) => {
//   res.send(`
//     <p>Welcome to my Practice Project</p>
//     <a href="/contact-us">Contact Us!</a>
//     `);
//   next();
// });

app.get("/", (req, res, next) => {
  res.send(`
    <p>Welcome to my Practice Project</p>
    <a href="/contact-us">Contact Us!</a>
    `);
});
app.get("/contact-us", (req, res, next) => {
  res.send(`
    <h2>Contact Us Page!</h2>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter Name" />
      <br /><br />
      <input type="email" name="email" placeholder="Enter Email" />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.send("<h2>Form Submitted Succesfully! :)</h2>");
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on Port:${PORT}`);
});
