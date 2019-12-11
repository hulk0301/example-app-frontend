const express = require("express");
const proxy = require("http-proxy-middleware");
const path = require("path");

const BACKEND_URL = process.env.API_URL || "http://localhost:8080";

const app = express();

app.use(
  "/api",
  proxy({
    target: BACKEND_URL,
    changeOrigin: true
  })
);

app.use(express.static(path.join(__dirname, "/build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
  console.log(__dirname + "/build/index.html");
});

app.listen(3000, () => {
  console.log("Server is running on localhost:3000");
});
