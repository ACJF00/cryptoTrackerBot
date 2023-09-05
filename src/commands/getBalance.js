module.exports = (bot => {
    bot.command('balance', async ctx => {

        const axios = require("axios");
        let addressMessage = ctx.message.text;
        let address = addressMessage.split(" ")[1];
    
        try {
            let res = await axios.get(`https://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`)
            let tokens = res.data.tokens
            let tokenInfo = []
            let tokenBalance = []
            let tokenDecimals = []
            let tokenBalanceToken = []
            let tokenBalanceAmount = []
            let tokenDollarValue = []
            let BalanceDollarValue = []
            let tokenAddress = []

                let token = tokens.forEach(function(token) {
                    tokenInfo.push(token.tokenInfo.symbol);
                    tokenDecimals.push(parseInt(token.balance * Math.pow(10, (-token.tokenInfo.decimals)))) 
                    tokenDollarValue.push(token.tokenInfo.price.rate)
                    tokenAddress.push(token.tokenInfo.address)
        })
    
        function compare(x, y) {
            return x - y;
        }
        for(var i = 0; i < tokenInfo.length; i++){                  
            tokenBalanceToken.push(tokenInfo[i])
            BalanceDollarValue.push(tokenDollarValue[i] * tokenDecimals[i])
        }


        for(var i = 0; i < tokenInfo.length; i++){ 
            if (tokenDollarValue[i] == undefined) {
                void(0)
            } else {
                const sorted = (a,b) => b-a || isNaN(a)-isNaN(b);
                tokenBalanceAmount.push("<b>" + "<a href = \"https://etherscan.io/address/" + tokenAddress[i] + "\">" + tokenInfo[i] + "</a>" + "</b>" + ":" + " " + tokenDecimals[i] + " " + "(" + "<i>" + BalanceDollarValue[i].toFixed(2) + "</i>"  + "$" + ")")
            }               
        }



console.log(BalanceDollarValue)
    
            let message = 
            `
            <b>Tokens balance:</b>
            ${tokenBalanceAmount.join('\n')}
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