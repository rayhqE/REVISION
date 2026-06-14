const http = require("http");
const handleRequest = require("./user");
const server = http.createServer(handleRequest);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listerning on Port:${PORT}`);
});
