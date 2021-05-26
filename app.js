const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.post("/about", async function (req, res) {
  const { username, age } = req.body
  console.log("username:", username);
  console.log("age:", age);
  // res.sendStatus(200);
  // res.status(404).send(`Ресурс не найден`);
  res.send("about");
});

app.listen(8080, () => console.log("App is starteed..."));

// https://github.com/SergeyKirintsev/Hello-Zemlyane.git
