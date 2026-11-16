import express from "express";

const app = express();

// Middleware 1: Logger
app.use((req, res, next) => {
    console.log(`${req.method} request received at ${req.url}`);
    next();
});

// Middleware 2: Add custom message
app.use((req, res, next) => {
    req.message = "Welcome to Express.js!";
    next();
});

// Home route
app.get("/", (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <p>${req.message}</p>
    `);
});

// About route
app.get("/about", (req, res) => {
    res.send(`
        <h1>About Page</h1>
        <p>This page demonstrates Express Middleware.</p>
    `);
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});