require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4", // For contracts/CZNFT.sol and contracts/CZToken.sol
      },
      {
        version: "0.8.20", // For contracts/interfaces/IERC404.sol
      },
      {
        version: "0.8.1", // For @openzeppelin/contracts/utils/Address.sol and @openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol
      },
      {
        version: "0.8.2", // For @openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol
      },
    ],
  },
};