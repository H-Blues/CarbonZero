const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CarbonProject", function () {
    let CarbonProject, carbonProject;
    let owner, addr1, addr2;

    beforeEach(async function () {
        CarbonProject = await ethers.getContractFactory("CarbonProject");
        [owner, addr1, addr2] = await ethers.getSigners();
        carbonProject = await CarbonProject.deploy();
    });

    describe("Project Creation", function () {
        it("allows a valid project to be created", async function () {
            const serialNumber = "0001-000001-000100-VCS-VCU-003-VER-US-0003-01012020-31122020-1";
            const carbonAmount = 100;
            await expect(carbonProject.createProject(serialNumber, carbonAmount))
                .to.emit(carbonProject, 'ProjectCreated');
        });

        it("rejects project creation with invalid serial number format", async function () {
            const invalidSerialNumber = "123";
            const carbonAmount = 100;
            await expect(carbonProject.createProject(invalidSerialNumber, carbonAmount))
                .to.be.revertedWith("Invalid serial number format");
        });
    });

    describe("Carbon Credit Verification", function () {
        it("allows admin to verify a project's carbon credit", async function () {
            const serialNumber = "0001-000001-000100-VCS-VCU-003-VER-US-0003-01012020-31122020-1";
            const carbonAmount = 100;
            await carbonProject.createProject(serialNumber, carbonAmount);
            const projectId = 1;

            await expect(carbonProject.verifyCarbonCredit(projectId, true))
                .to.emit(carbonProject, "CarbonCreditVerified")
                .withArgs(projectId, 1);
        });

        it("prevents non-admin from verifying carbon credits", async function () {
            const projectId = 1;
            await expect(carbonProject.connect(addr1).verifyCarbonCredit(projectId, true))
                .to.be.revertedWith("Only admin can perform this action");
        });
    });

    describe("Recording Carbon Credits", function () {
        it("records carbon credits upon successful verification", async function () {
            const serialNumber = "0001-000001-000100-VCS-VCU-003-VER-US-0003-01012020-31122020-1";
            const carbonAmount = 100;
            await carbonProject.createProject(serialNumber, carbonAmount);
            const projectId = 1;

            await carbonProject.verifyCarbonCredit(projectId, true);
            const project = await carbonProject.projects(projectId);

            expect(project.carbonCreditRecorded).to.be.true;
        });

        it("does not record carbon credits if verification fails", async function () {
            const serialNumber = "0001-000001-000100-VCS-VCU-003-VER-US-0003-01012020-31122020-1";
            const carbonAmount = 100;
            await carbonProject.createProject(serialNumber, carbonAmount);
            const projectId = 1;

            await carbonProject.verifyCarbonCredit(projectId, false);
            const project = await carbonProject.projects(projectId);

            expect(project.verificationStatus).to.equal(2);
            expect(project.carbonCreditRecorded).to.be.false;
        });
    });
});
