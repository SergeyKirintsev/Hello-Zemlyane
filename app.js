const express = require("express");
const mongoose = require('mongoose')
const TelegramBot = require('node-telegram-bot-api');
const config = require('config');
const User = require('./models/User')

const token = config.get('tlgToken');
const chatId = config.get('chatId');
const PORT = config.get('port') || 5000

const bot = new TelegramBot(token, {polling: true});


// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   console.log(chatId)
//
//   bot.sendMessage(chatId, 'Привет землянин))');
// });

const app = express();

app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.post("/api/send", async function (req, res) {
  try {
    const { userName, userPhone } = req.body
    const status = 'new'
    const created = new Date()

    const user = new User({ userName, userPhone, status, created })

    await user.save()
    res.status(201).json({ message: 'Пользователь создан' })

    // bot.sendMessage(chatId, 'Хочу няню');
    bot.sendMessage(chatId, `Имя: ${userName}, тел.: ${userPhone}`);

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
});

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()