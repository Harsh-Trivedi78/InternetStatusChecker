// Import the 'http' module
const http = require('http');

// Create a server and define how it should respond to requests
const server = http.createServer((req, res) => {
  // Set the response header with a status code and content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send a simple message as the response body
  res.end('Hello, Node.js!');
  res.end("my name is harsh trivedi");


});

// Specify the port on which the server will listen for incoming requests
const port = 8888;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log("THIS IS RUNNIG");

});
