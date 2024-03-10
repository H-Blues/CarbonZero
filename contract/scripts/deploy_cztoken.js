const hre = require("hardhat");

async function main() {
    const CustomERC20 = await hre.ethers.getContractFactory("CZToken");
    const customERC20 = await CustomERC20.deploy("CZToken", "CZ");

    await customERC20.deployed();
    console.log("CZToken deployed to:", customERC20.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
