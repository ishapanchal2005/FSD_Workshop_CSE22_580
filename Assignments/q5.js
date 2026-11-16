const express = require("express");
const path = require("path");

const app = express();

const pages = path.join(__dirname, "pages");

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(pages, "home.html"));
});

// Menu page
app.get("/menu", (req, res) => {
    res.sendFile(path.join(pages, "menu.html"));
});

// Contact page
app.get("/contact", (req, res) => {
    res.sendFile(path.join(pages, "contact.html"));
});

app.listen(3000, () => {
    console.log("Bakery website running at http://localhost:3000");
});