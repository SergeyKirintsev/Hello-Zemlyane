const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello Zemlyane!!!");
});

app.listen(3000, () => console.log("App is starteed..."));
