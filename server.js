import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// recreate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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