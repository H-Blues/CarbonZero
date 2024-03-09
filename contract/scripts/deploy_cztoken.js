// scripts/deploy_cztoken.js

const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const CZToken = await hre.ethers.getContractFactory("CZToken");
    const czToken = await CZToken.deploy();
    await czToken.deployed();
    await czToken.initialize(18, "CZToken", "CZ", 100000000);

    console.log("CZToken deployed to:", czToken.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
