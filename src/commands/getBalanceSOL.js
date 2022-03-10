module.exports = (bot => {
    bot.command('balanceSOL', async ctx => {

        const axios = require("axios");
        let addressMessage = ctx.message.text;
        let address = addressMessage.split(" ")[1];
    
        try {
            let res = await axios.get(`https://public-api.solscan.io/account/tokens?account=${address}`)
            let tokens = res.data
            let tokenSymbol = []
            let tokenBalanceSymbol = []
            let tokenBalance = []
            let tokenBalanceAmount = []
            let tokenDollarValue = []
            let BalanceDollarValue = []
            let tokenAddress = []
    
    
                let token = tokens.forEach(function(token) {
                    tokenSymbol.push(token.tokenSymbol)
                    tokenBalanceAmount.push(token.tokenAmount.amount)
                    tokenBalance.push(parseInt(token.tokenAmount.amount * Math.pow(10, (-token.tokenAmount.decimals)))) 
                    tokenDollarValue.push(parseInt(token.priceUsdt * (token.tokenAmount.amount * Math.pow(10, (-token.tokenAmount.decimals)))))
                    tokenAddress.push(token.tokenAddress)
        })
    
        for(var i = 0; i < tokenSymbol.length; i++){ 
            if (tokenSymbol[i] == undefined) {
                void(0)
            } else if (tokenBalanceAmount[i] == '0') {
                void(0)
            } else {
                tokenBalanceSymbol.push("<a href= \"https://solscan.io/token/" + tokenAddress[i] + "\">" + "<b>" + tokenSymbol[i] + "</b>" + "</a>" + ":" + " " + tokenBalance[i] + " " + "(" + tokenDollarValue[i] + "$" + ")")

            }               
        }
    
        //for(var i = 0; i < tokenInfo.length; i++){                  
            //tokenBalanceAmount.push("*" + tokenInfo[i] + "*" + ":" + " " + tokenDecimals[i] + " " + "(" + "_" + BalanceDollarValue[i].toFixed(2) + "_"  + "$" + ")")
        //}
    
            let message = 
            `
            <b>Tokens balance:</b>\n

            ${tokenBalanceSymbol.join('\n')}
            `;
    
            bot.telegram.sendMessage(ctx.chat.id, message, {
                parse_mode: "HTML",
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

})
