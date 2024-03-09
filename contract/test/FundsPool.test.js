const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ChallengePool", function () {
    let czToken, czNFT, challengePool;
    let owner, user1, user2;

    beforeEach(async function () {
        [owner, user1, user2] = await ethers.getSigners();

        const CZToken = await ethers.getContractFactory("CZToken");
        czToken = await CZToken.deploy();
        await czToken.initialize(18, "CZToken", "CZT", 10000);

        const CZNFT = await ethers.getContractFactory("CZNFT");
        czNFT = await CZNFT.deploy();
        await czNFT.deployed();

        const ChallengePool = await ethers.getContractFactory("ChallengePool");
        challengePool = await ChallengePool.deploy(czToken.address, czNFT.address);
        await challengePool.deployed();

        await czToken.connect(owner).mint(challengePool.address, 10000); // Ensure the pool has enough tokens for rewards
        await czToken.connect(owner).mint(user1.address, 1000);
        await czToken.connect(owner).mint(user2.address, 1000);

        await czToken.connect(user1).approve(challengePool.address, 1000);
        await czToken.connect(user2).approve(challengePool.address, 1000);
    });

    it("Should handle deposits correctly", async function () {
        await challengePool.connect(user1).deposit(500);
        await challengePool.connect(user2).deposit(500);

        // Assuming deposits mapping is public for testing or using event logs instead
        // Verify deposits through events or contract state checks
    });

    it("Should mark challenge completion", async function () {
        await challengePool.connect(user1).deposit(500);
        await challengePool.connect(owner).completeChallenge(user1.address);

        // Check challenge completion, e.g., via an event or a public mapping state if available
    });

    it("Should handle ERC20 rewards and deposit refunds", async function () {
        await challengePool.connect(user1).deposit(500);
        await challengePool.connect(owner).completeChallenge(user1.address);
        const initialBalance = await czToken.balanceOf(user1.address);

        await challengePool.connect(user1).claimRewardAndRefundDeposit(false, "");

        const finalBalance = await czToken.balanceOf(user1.address);
        expect(finalBalance).to.be.above(initialBalance); // Ensure final balance is greater due to reward
    });

    it("Should handle ERC721 rewards correctly", async function () {
        await challengePool.connect(user2).deposit(500);
        await challengePool.connect(owner).completeChallenge(user2.address);

        await challengePool.connect(user2).claimRewardAndRefundDeposit(true, "uniqueTokenURI");

        // Assuming the first minted NFT has ID 0, verify ownership
        expect(await czNFT.ownerOf(0)).to.equal(user2.address);
    });
});
