// scripts/deploy_cznft.js

const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const CZNFT = await hre.ethers.getContractFactory("CZNFT");
    const cznft = await CZNFT.deploy();

    await cznft.deployed();

    console.log("CZNFT deployed to:", cznft.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
