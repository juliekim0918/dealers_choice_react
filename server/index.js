const express = require("express");
const app = express();
const path = require("path");
const volleyball = require("volleyball");
module.exports = app;

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/public', express.static('public'))
app.use(express.static(path.join(__dirname, "../public")));

//api routes
app.use("/api", require("./api"));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "internal server error");
});
