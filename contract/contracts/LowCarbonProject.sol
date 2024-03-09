// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CarbonProject {
    enum VerificationStatus { Pending, Verified, Failed }

    struct Project {
        uint256 id;
        address owner;
        string serialNumber;
        uint256 carbonAmount;
        VerificationStatus verificationStatus;
        bool carbonCreditRecorded;
    }

    uint256 private nextProjectId = 1;
    mapping(uint256 => Project) public projects;
    address private admin;

    event ProjectCreated(uint256 indexed id, address owner, string serialNumber, uint256 carbonAmount);
    event CarbonCreditVerified(uint256 indexed projectId, VerificationStatus status);
    event CarbonCreditRecorded(uint256 indexed projectId, uint256 carbonAmount);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier projectExists(uint256 projectId) {
        require(projectId < nextProjectId && projects[projectId].id != 0, "Project does not exist");
        _;
    }

    function isValidSerialNumberFormat(string memory serialNumber) internal pure returns (bool) {
        bytes memory serialBytes = bytes(serialNumber);
        uint256 expectedSegments = 12;
        uint256 segmentCount = 1;
        for(uint256 i = 0; i < serialBytes.length; i++) {
            if (serialBytes[i] == '-') {
                segmentCount++;
            }
        }
        return segmentCount == expectedSegments;
    }

    function createProject(string memory serialNumber, uint256 carbonAmount) public {
        require(isValidSerialNumberFormat(serialNumber), "Invalid serial number format");
        uint256 projectId = nextProjectId++;
        projects[projectId] = Project(projectId, msg.sender, serialNumber, carbonAmount, VerificationStatus.Pending, false);
        emit ProjectCreated(projectId, msg.sender, serialNumber, carbonAmount);
    }


    // Function to verify a carbon credit; if verified, record it
    function verifyCarbonCredit(uint256 projectId, bool isVerified) public onlyAdmin projectExists(projectId) {
        Project storage project = projects[projectId];
        project.verificationStatus = isVerified ? VerificationStatus.Verified : VerificationStatus.Failed;
        emit CarbonCreditVerified(projectId, project.verificationStatus);

        if (isVerified) {
            recordCarbonCredit(projectId);
        }
    }

    // Internal function to record a verified carbon credit
    function recordCarbonCredit(uint256 projectId) internal {
        Project storage project = projects[projectId];
        require(!project.carbonCreditRecorded, "Carbon credit already recorded");
        project.carbonCreditRecorded = true;
        emit CarbonCreditRecorded(projectId, project.carbonAmount);
    }

}
