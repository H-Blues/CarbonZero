const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CZToken", function () {
  let CZToken;
  let czToken;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    CZToken = await ethers.getContractFactory("CZToken");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    czToken = await CZToken.deploy();
    await czToken.initialize(18, "CZToken", "CZ", 1000);
  });

  describe("Claim Login Reward", function () {
    it("Should mint 10 tokens as login reward for a new user", async function () {
      await czToken.connect(addr1).claimLoginReward();
      expect(await czToken.balanceOf(addr1.address)).to.equal(10);
    });

    it("Should not allow claiming login reward more than once", async function () {
      await czToken.connect(addr1).claimLoginReward();
      await expect(czToken.connect(addr1).claimLoginReward()).to.be.revertedWith("Reward already claimed");
    });

  });

  describe("Transfer tokens", function () {
    it("Should allow sending tokens after challenge completion", async function () {
      const rewardAmount = 50;
      await czToken.rewardUserForChallenge(addr1.address, rewardAmount);
      expect(await czToken.balanceOf(addr1.address)).to.equal(rewardAmount);

      await czToken.connect(addr1).transfer(addr2.address, rewardAmount);
      expect(await czToken.balanceOf(addr2.address)).to.equal(rewardAmount);
    });
  });
});
