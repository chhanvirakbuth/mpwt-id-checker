const {Telegraf} = require('telegraf')
var express = require('express');
var app = express();
app.use(express.json())
app.get('/', function (req, res) {
    res.send('Hello World');
})

const bot = new Telegraf("5365433251:AAEoJwgYIG9QJd29rdiSJ9pShVlfe84seiI")
// start command
bot.start((ctx) => {
    ctx.reply('Welcome')
})

// help command
// bot.help((ctx) => {
//     ctx.reply('I can not help you , but you can send me a sticker ');
// })
//
// // when send sticker
// bot.on('sticker', (ctx) => ctx.reply('👍'))
//
// // when user type hi to bot
// bot.hears('hi', (ctx) => {
//
//     ctx.reply(`បាទជម្រាបសួរបង ${ctx.from.first_name} ហូបបាយនៅ?`)
// })
// //
// bot.command('oldschool', (ctx) => ctx.reply('Hello'))
// bot.command(['test', 'Test', 'TEST', 'test1'], (ctx) => {
//     console.log(ctx.from)
//     ctx.reply("Test what bro ? ")
// })

// when user type command id then return current chat id and title
bot.command('id', (ctx) => {
    const chat = ctx.update.message.chat;
    ctx.reply(`${chat.title ? chat.title : chat.first_name} ID: ${chat.id}`)
})
//
// // mention method
// bot.mention("botfather", (ctx) => {
//     ctx.reply("You method @botfather");
// })
//
// // phone method
// bot.phone('0969640495', (ctx) => {
//     ctx.reply("It's my boss number")
// })
//
// // hashtag method
// bot.hashtag("hash", (ctx) => {
//     ctx.reply("It's hashtag brother ");
// })
//
// // use method
// // this function is run every time
// bot.use((ctx, next) => {
//     // ctx.reply('The bot is on the board');
//     // state for store context
//     ctx.state.apple = 5;
//     next(ctx)
// })
//
// bot.hears('hello', (ctx) => {
//
//     ctx.reply(`បាទជម្រាបសួរបង ${ctx.from.first_name} ហូបបាយនៅ?`)
//     // console.log(ctx.state.apple)
//
//     // bot telegram send message
//     // bot.telegram.sendMessage(ctx.chat.id, "Hello world", {
//     //     parse_mode: "Markdown",
//     //     disable_notification: true
//     // })
//
//     // reply
//     // ctx.reply("Hello bong",
//     //     {
//     //         parse_mode: "Markdown",
//     //         disable_notification: true
//     //     }
//     // )
// })

bot.launch()

const port = process.env.PORT || 8081;
app.listen(port, function () {
  console.log("app is running on port "+port);
})
