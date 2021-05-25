const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.use("/", function (request, response) {
  response.send("<h1>Главная страница</h1>");
});
// app.get("/", function (req, res) {
//   res.send("Hello Zemlyane!");
// });

app.listen(8080, () => console.log("App is starteed..."));

// https://github.com/SergeyKirintsev/Hello-Zemlyane.git
