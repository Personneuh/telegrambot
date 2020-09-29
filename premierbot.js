const Telegraf = require('telegraf')

const bot = new Telegraf("1397812196:AAHbVeU06i-cam9DQkKEiNhMHbys2UM3k70")

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log('Response time: %sms', ms)
  console.log(ctx.message)
})

bot.start((ctx) => ctx.reply("Bonjour "+ctx.message["chat"]["first_name"]+", bienvenue !"))

bot.hears("salut", (ctx)=>ctx.reply("salut à toi jeune entrepreneur !"))


bot.launch()