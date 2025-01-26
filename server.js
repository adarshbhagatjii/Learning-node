const http = require("node:http");

const server = http.createServer((req, res) => {
    if(req.url==="/data"){
        res.end("there is no data");
    }
  
  res.end("Hello World");
});
server.listen(7777);