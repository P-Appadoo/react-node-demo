const http = require("http");
const url = require("url");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Content-Type": "application/json",
  };

  if (reqUrl.pathname === "/" && req.method === "GET") {
    res.writeHead(200, headers);
    // res.setHeader("content-Type", "Application/json");
    return res.end(JSON.stringify({ home: true }));
  }

  if (reqUrl.pathname === "/users" && req.method === "GET") {
    res.writeHead(200, headers);
    return res.end(JSON.stringify({ success: true }));
  }

  res.writeHead(404, headers);
  res.end("failure");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
