module.exports = (bot) => {
    bot.command('info', ctx => {
        bot.telegram.sendMessage(ctx.chat.id, "Bot infos", {
            reply_markup: {
                keyboard: [
                    [
                        {text: "Accueil"},
                        {text: "Credits"},
                        {text: "API"}
                    ]
                ],
                resize_keyboard: true,
                one_time_keyboard: true
            }
        })
    })
    
    
    bot.hears("Credits", ctx => {
        ctx.reply('This bot was made by Charly')
    })
    
    bot.hears("API", ctx => {
        ctx.reply('This bot uses Crypto Compare API')
    })
    
    bot.hears("Accueil", ctx => {
        ctx.reply('/start')
    })
}