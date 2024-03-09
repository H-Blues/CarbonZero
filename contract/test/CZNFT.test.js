const { expect } = require("chai");

describe("CZNFT", function () {
    let gameItem;
    let playerAddress;
    let player2;

    before(async function () {
        const GameItem = await ethers.getContractFactory("CZNFT");
        gameItem = await GameItem.deploy();

        [playerAddress, player2] = await ethers.getSigners();
    });

    it("Should award a new item and return its ID", async function () {
        const newItemId1 = await gameItem.awardItem(playerAddress.address, "tokenURI");
        const receipt1 = await newItemId1.wait();
        const newItemId2 = await gameItem.awardItem(playerAddress.address, "tokenURI");
        const receipt2 = await newItemId2.wait();
        expect(receipt1.events[0].args[1]).to.equal(playerAddress.address);
        expect(receipt1.events[0].args[2].toNumber()).to.equal(0);

        await gameItem.connect(playerAddress).approve(await player2.getAddress(), receipt1.events[0].args[2].toNumber());
    });
});
