module.exports = (bot) => {

    bot.command('start', ctx => {
        sendStartmessage(ctx)
    })
    
    bot.action("start", ctx => {
        ctx.deleteMessage();
        sendStartmessage(ctx)
    })
    
    function sendStartmessage(ctx){
        let startMessage = 
        `
    *Welcome ${ctx.from.first_name}, this bot gives you cryptocurrency information*\n
    👉 /price \`<ticker>\` - Get the price of a cryptocurrency
    👉 /marketcap \`<ticker>\` - Get the marketcap of a cryptocurrency
    👉 /sentiment \`<ticker>\` - Get the market sentiment about a cryptocurrency
    👉 /ethbalance \`<address>\` - Get your ETH balance
    👉 /balance \`<address>\` - Get your tokens balance
    `;
        bot.telegram.sendMessage(ctx.chat.id, startMessage, 
            {
                parse_mode: "markdown",
            })
    }

}