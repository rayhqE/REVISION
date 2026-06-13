const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(
  //   "reqURL: ",
  //   req.url,
  //   "\n",
  //   "reqMethod: ",
  //   req.method,
  //   "\n",
  //   "reqHeader: ",
  //   req.headers,
  // );
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Server</title></head>");
  if (req.url === "/") {
    res.write("<body><h1>Welcome to my server.</h1></body>");
    res.write("</html>");
    res.end();
  } else if (req.url.toLowerCase() === "/about") {
    res.write("<body><h1>About page</h1></body>");
    res.write("</html>");
    res.end();
  } else {
    res.write("<body><h1>Chutiye</h1></body>");
    res.write("</html>");
    res.end();
  }
  // res.write("<body><h1>Welcome to my server.</h1></body>");
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening at port http://localhost:${port}`);
});
