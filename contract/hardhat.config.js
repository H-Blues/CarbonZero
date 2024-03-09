require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4", // For contracts/CZNFT.sol and contracts/CZToken.sol
      },
      {
        version: "0.8.20", // For contracts/interfaces/IERC404.sol
      },
    ],
  },
  networks: {
    hardhat: {
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    sepolia: {
      url: SEPOLIA_RPC_URL !== undefined ? SEPOLIA_RPC_URL : "",
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      // accounts: {
      //   mnemonic: MNEMONIC,
      // },
      chainId: 11155111,
    },
  },
};