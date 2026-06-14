const http = require("http");
const fs = require("fs");
const { json } = require("stream/consumers");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Parsing Request</title></head>");
    res.write("<body><h1>Enter Your Details:</h1>");
    res.write('<form action="/submit-details" method = "POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br/>',
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type ="radio" id="male" name = "gender" value="male"/>');
    res.write('<label for="female">Female</label>');
    res.write(
      '<input type ="radio" id="female" name = "gender" value="female"/>',
    );
    res.write('<br/><input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      // const username = params.get("username");
      // const gender = params.get("gender");
      const bodyObject = Object.fromEntries(params);
      // console.log(bodyObject.username);
      // console.log(bodyObject.gender);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });
    res.setHeader("Location", "/");
    res.statusCode = 302;
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Parsing Request</title></head>");
  res.write("<body><h1>Parsing Request</h1></body>");
  res.write("</html>");
  res.end();

  // process.exit();
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listerning on Port:${PORT}`);
});
