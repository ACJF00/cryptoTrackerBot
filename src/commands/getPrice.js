module.exports = (bot) => {
    bot.command('price', async ctx => {

        let ticker = ctx.message.text;
        let tickerArray = ticker.split(" ")[1].toUpperCase();
        const axios = require("axios");
        const apikey = process.env.APIKEY 

    
        try {
            let res = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${tickerArray}&tsyms=USD&api_key=${apikey}`)
            let data = res.data.DISPLAY[tickerArray].USD
    
            let message = 
            `
            *Symbol:* ${tickerArray}
            *Price:* ${data.PRICE}
            *Open:* ${data.OPENDAY}
            *High:* ${data.HIGHDAY}
            *Low:* ${data.LOWDAY}
            *Last hour variation:* ${data.CHANGEPCTHOUR}%
            *24h variation:* ${data.CHANGEPCTDAY}%
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