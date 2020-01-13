const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
const requestHandler = function(request, response) {
  if (request.url == "/") {
    response.end("Welcome to first mobile ordering pick up")
  } else if (request.url == "/urls") {
    response.end("www.lighthouselabs.ca\nwww.google.com")
  } else {
    response.statusCode = 404;
    response.end("404 page is not found")
  }
};

const server = http.createServer(requestHandler)

server.listen(PORT, () => {
  console.log(`Server is listening on: http://localhost:${PORT}`);
});
