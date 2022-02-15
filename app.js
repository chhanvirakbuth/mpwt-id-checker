const { Telegraf } = require('telegraf')

const bot = new Telegraf("5241694116:AAGVPOIfvkEtZY3Y9BoVUtN65F020OVuSrE")

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('hipster', Telegraf.reply('λ'))
bot.command('id',(ctx) => {
    const chat = ctx.update.message.chat;
    ctx.reply(`${chat.title} ID: ${chat.id}`)
})
bot.launch()
