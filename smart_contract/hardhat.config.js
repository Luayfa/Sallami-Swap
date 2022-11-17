require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-.g.alchemy.com/v2/xZEi9CyaBt7f0XP7R8GAgPN4ORzebZ3m',
      accounts: [
        '779e02d8153dbc7b2d037a6bd4bebd544961846331ccfe9849aa8f66f864e34b'
      ],
    },
  },
};
