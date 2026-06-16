const http = require("http");
const testingSyntax = require("./syntax.js");
const runTimeError = require("./runtime.js");
const logicalError = require("./logical.js");
const handleRequest = require("./user");
const server = http.createServer(handleRequest);

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   // testingSyntax();
//   // runTimeError();
//   logicalError();
// });

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on Port:${PORT}`);
});
