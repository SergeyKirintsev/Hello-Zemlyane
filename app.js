const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse application/json
app.use(bodyParser.json());

// app.use("/", function (request, response) {
//   response.send("<h1>Главная страница</h1>");
// });

app.use(express.static(__dirname + "/public"));

app.post("/about", async function (req, res) {
  // console.log("about:", req.query);
  console.log("about:", req.body);
  // res.sendStatus(200);
  res.status(404).send(`Ресурс не найден`);
  // res.send("about");
});

app.post("/create", function (req, res) {
  console.log("create:", req.query);
  res.send("create");
});

app.listen(8080, () => console.log("App is starteed..."));

// https://github.com/SergeyKirintsev/Hello-Zemlyane.git
