const { expect } = require("chai");
const { ethers } = require("hardhat");
const { expectRevert } = require('@openzeppelin/test-helpers');

describe("Manager", function () {
    let contractManager;
    let owner, addr1;
    let czToken, czNFT;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        const CZToken = await ethers.getContractFactory("CZToken");
        czToken = await CZToken.deploy();
        await czToken.deployed();

        const CZNFT = await ethers.getContractFactory("CZNFT");
        czNFT = await CZNFT.deploy();
        await czNFT.deployed();

        const Manager = await ethers.getContractFactory("Manager");
        contractManager = await Manager.deploy(czToken.address, czNFT.address);
        await contractManager.deployed();
    });

    describe("Access Control", function () {
        it("should allow owner to create a CarbonProject", async function () {
            await expect(contractManager.createCarbonProject())
                .to.emit(contractManager, 'CarbonProjectCreated');
        });

        it("should allow owner to create a ChallengePool", async function () {
            await contractManager.createCarbonProject();
            const carbonProjectAddress = await contractManager.carbonProjects(0);

            await expect(contractManager.createChallengePool(carbonProjectAddress))
                .to.emit(contractManager, 'ChallengePoolCreated');
        });

    });
});
