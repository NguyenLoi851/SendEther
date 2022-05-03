require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/6xJ1bS6gSlpm3_FThTWQZO_DB84wfXRt',
      accounts: ['825aeb4ef63ec8361d180dabbff5006166c749b08dcb8d31aced385522c4704b']
    }
  }
}