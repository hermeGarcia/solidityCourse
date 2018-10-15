const path = require('path');
const fs = require('fs');
const solc = require('solc');

//nos proporciona el path a los archivos que necesitamos
const LotteryPath = path.resolve(__dirname,'contracts','Lottery.sol');
const source = fs.readFileSync(LotteryPath,'utf8');

module.exports = solc.compile(source,1).contracts[':Lottery'];
