const express = require("express");
const TelegramBot = require('node-telegram-bot-api');
const token = '712530451:AAGapNBnXSTsJdT7tnv9ZKyiY2HNUvSWyFU';

const bot = new TelegramBot(token, {polling: true});

const chatId = -563761405;

// bot.on('message', (msg) => {
  // const chatId = msg.chat.id;
  // console.log(chatId)

  // send a message to the chat acknowledging receipt of their message
  // bot.sendMessage(chatId, 'Привет землянин))');
// });

const app = express();

app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.post("/about", async function (req, res) {
  const { username, age } = req.body
  console.log("username:", username);
  console.log("age:", age);
  // res.sendStatus(200);
  // res.status(404).send(`Ресурс не найден`);
  res.send("about");
  // bot.sendMessage(chatId, 'Хочу няню');
  // bot.sendMessage(chatId, `Я ${username} и мне ${age}`);
});

app.listen(3000, () => console.log("App is starteed..."));

// https://github.com/SergeyKirintsev/Hello-Zemlyane.git
