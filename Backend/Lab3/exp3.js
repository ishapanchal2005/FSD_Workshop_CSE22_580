import http from "http";

// Create HTTP server
const server = http.createServer((req, res) => {

    // Status Code
    res.statusCode = 200;

    // Response Headers
    res.setHeader("Content-Type", "text/plain");

    // Response
    res.end("Hello World");
});

// Start server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});