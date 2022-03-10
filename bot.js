const { Telegraf } = require("telegraf");
const { Pagination } =  require('telegraf-pagination');
require('dotenv').config()

const bot = new Telegraf (process.env.BOT_TOKEN);


//code

/////////////////////////////////////   START   /////////////////////////////////////

const startCommand = require('./src/commands/start');
startCommand(bot);

/////////////////////////////////////   PRICE   /////////////////////////////////////
const getPriceCommand = require('./src/commands/getPrice');
getPriceCommand(bot);

/////////////////////////////////////   MARKETCAP   /////////////////////////////////////

const marketcapCommand = require('./src/commands/marketcap');
marketcapCommand(bot);

/////////////////////////////////////   SENTIMENT   /////////////////////////////////////
const sentimentCommand = require('./src/commands/sentiment');
sentimentCommand(bot);


/////////////////////////////////////   ETH BALANCE   /////////////////////////////////////
const ethBalanceCommand = require('./src/commands/ethBalance');
ethBalanceCommand(bot);


/////////////////////////////////////   GET BALANCE ETH   /////////////////////////////////////
const getBalanceCommand = require('./src/commands/getBalance');
getBalanceCommand(bot);

/////////////////////////////////////   GET BALANCE BSC   /////////////////////////////////////
const getBalanceSOLCommand = require('./src/commands/getBalanceSOL');
getBalanceSOLCommand(bot);
  


/////////////////////////////////////   INFOS BOT   /////////////////////////////////////
const infoCommand = require('./src/commands/info');
infoCommand(bot);



bot.launch()