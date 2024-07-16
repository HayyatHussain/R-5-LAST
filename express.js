const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Kuch bhi likho, ye url se pehle chale ga
app.use(function (req, res, next) {
  console.log("Challow!");
  next();
});

// Default page pe ye chale ga
app.get("/", function (req, res) {
  res.send("champion");
});

// Profile page pe ye chale ga
app.get("/profile", function (req, res, next) {
  return next(new Error("Something went wrong"));
});

// Kuch bhi likho, ye url se pehle chale ga/ For error handling (sb se last me lagana h)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Kuch to toot gya bro!");
});

app.listen(3000);
