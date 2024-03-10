const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const CZNFT = await hre.ethers.getContractFactory("CZNFT");
  const cznft = await CZNFT.deploy();
  await cznft.deployed();
  console.log("CZNFT deployed to:", cznft.address);

  const CZToken = await hre.ethers.getContractFactory("CZToken");
  const czToken = await CZToken.deploy();
  await czToken.deployed();
  console.log("CZToken deployed to:", czToken.address);

  const ContractManager = await hre.ethers.getContractFactory("Manager");
  const contractManager = await ContractManager.deploy(czToken.address, cznft.address);
  await contractManager.deployed();
  console.log("Manager deployed to:", contractManager.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
