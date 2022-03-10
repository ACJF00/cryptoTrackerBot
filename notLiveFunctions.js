/*bot.action('price', ctx => {
    let priceMessage = `Get Price Information, Select one of the crypto below`
    ctx.deleteMessage();

    
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "BTC", callback_data: "price-BTC"},
                    {text: "ETH", callback_data: "price-ETH"},
                ],
                [
                    {text: "BCH", callback_data: "price-BCH"},
                    {text: "LTC", callback_data: "price-LTC"},
                ],
                [
                    {text: "Back to menu", callback_data: "start"}
                ]
            ]
        }
    })
})*/



// let priceActionList = ['price-BTC', 'price-ETH', 'price-BCH', 'price-LTC']

/*bot.action(priceActionList, async ctx => {
    let symbol = ctx.match.input.split('-')[1];

    try {
        let res = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD&api_key=${apikey}`)
        let data = res.data.DISPLAY[symbol].USD

        console.log(data)

        let message = 
        `
        **Symbol** : ${symbol}
        Price: ${data.PRICE}
        Open: ${data.OPENDAY}
        High: ${data.HIGHDAY}
        Low: ${data.LOWDAY}
        Supply: ${data.SUPPLY}
        Marketcap: ${data.MKTCAP}
        `;

        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.chat.id, message, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: 'Back to prices', callback_data: 'price'}
                    ]
                ]
            }
        })

    } catch(err){
        console.log(err)
        ctx.reply('Error encountered')
    }
})*/