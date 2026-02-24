const express = require("express");
const path = require("path");

const app = express();

// serve static files (css, js, images)
app.use(express.static(path.join(__dirname, "public")));

// routes for pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/destinations", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "destinations.html"));
});

app.get("/packages", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "packages.html"));
});

app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "gallery.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});