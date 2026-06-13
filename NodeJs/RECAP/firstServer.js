const http = require("http");
const server = http.createServer((req, res) => {
  res.end(() => {
    console.log("Welcome to my server");
    process.exit();
  });
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening at port http://localhost:${port}`);
});
