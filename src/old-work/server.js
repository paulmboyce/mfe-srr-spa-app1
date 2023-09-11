// Import the 'http' module
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with a status code and content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send a response back to the client
  res.end("<body><div>Hello, World!</div></body>");
});

// Set the port the server will listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
