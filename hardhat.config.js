require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Load variables from .env

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
};
