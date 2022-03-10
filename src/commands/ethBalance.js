module.exports = (bot) => {
    bot.command('ethbalance', async ctx => {
        const axios = require("axios");
        const apiKeyEtherscan = process.env.ETHSCAN_API

        let addressMessage = ctx.message.text;
        let address = addressMessage.split(" ")[1];
        let ETHPriceData = await axios.get (`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${apiKeyEtherscan}`)
        let ETHPrice = ETHPriceData.data.result.ethusd
    
        try {
            let res = await axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKeyEtherscan}`)
            let result = res.data.result
            let resultETH = (result * Math.pow(10, (-18))).toFixed(2)
            let dollarAmount = (ETHPrice * resultETH).toFixed(2)
    
            let message = 
            `
            *ETH Balance:* ${resultETH} ETH (${dollarAmount}$)
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