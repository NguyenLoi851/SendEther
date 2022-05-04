require('@nomiclabs/hardhat-waffle');
const fs = require("fs");
const priKey = fs.readFileSync('.secret').toString();
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/6xJ1bS6gSlpm3_FThTWQZO_DB84wfXRt',
      accounts: [priKey]
    }
  }
}