const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

// Public static path
const static_path = path.join(__dirname, "../public");

// Set view engine to hbs
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));

// Middleware to serve static files
app.use(express.static(static_path));

// Routes
app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.send("Welcome to weather page");
});

app.get("*", (req, res) => {
  res.status(404).render("404", {
    errorMsg: "Page Not Found"
  });
});

// Start server
app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
