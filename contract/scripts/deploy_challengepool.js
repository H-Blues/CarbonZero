// scripts/deploy_challengepool.js

const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const CZToken = await hre.ethers.getContractFactory("CZToken");
    const czToken = await CZToken.deploy();
    await czToken.deployed();

    const CZNFT = await hre.ethers.getContractFactory("CZNFT");
    const czNFT = await CZNFT.deploy();
    await czNFT.deployed();

    console.log("Deploying contracts with the account:", deployer.address);

    const ChallengePool = await hre.ethers.getContractFactory("ChallengePool");
    const challengePool = await ChallengePool.deploy(czToken.address, czNFT.address);

    await challengePool.deployed();

    console.log("ChallengePool deployed to:", challengePool.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
