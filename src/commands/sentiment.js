module.exports = (bot) => {
    bot.command('sentiment', async ctx => {

        const axios = require("axios");
        const apikey = process.env.APIKEY 
        let ticker = ctx.message.text;
        let tickerArray = ticker.split(" ")[1];
    
    
        try {
            let res = await axios.get(`https://min-api.cryptocompare.com/data/tradingsignals/intotheblock/latest?fsym=${tickerArray}&api_key=${apikey}`)
            let data = res.data
    
            let message = 
            `
            *Symbol* : ${tickerArray}\n
            *Market sentiment:* ${data.Data.inOutVar.sentiment}
            `;
    
            bot.telegram.sendMessage(ctx.chat.id, message, {
                parse_mode: "markdown",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {text: 'Back to menu', callback_data: 'start'}
                        ]
                    ]
                }
            })
        } catch(err){
            console.log(err)
            ctx.reply('Ticker not found')
        }
    
    })
}