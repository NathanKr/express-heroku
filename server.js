console.log("app is loading");
const express = require("express");
const process = require("process");

const port = process.env.PORT || 3000;

// --- create an app
const app = express();

// --- handle request to /
app.get("/", (req, res) => {
  res.send({ hello: "express" });
});

// --- handle request to /about
app.get("/about", (req, res) => {
  res.send("<h1>This is about!!!</h1>");
});


console.log(`port is : ${port}`);

// --- listen for requests on this port
app.listen(port);
