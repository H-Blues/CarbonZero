// scripts/deploy_carbonproject.js

const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const CarbonProject = await hre.ethers.getContractFactory("CarbonProject");
    const carbonProject = await CarbonProject.deploy();

    await carbonProject.deployed();

    console.log("CarbonProject deployed to:", carbonProject.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
