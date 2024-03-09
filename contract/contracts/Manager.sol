// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./CZToken.sol";
import "./CZNFT.sol";
import "./LowCarbonProject.sol";
import "./ChallengePool.sol";

contract Manager is Ownable {
    CZToken public czToken;
    CZNFT public czNFT;
    address[] public carbonProjects;
    mapping(address => address) public challengePools;

    event CarbonProjectCreated(address indexed carbonProjectAddress);
    event ChallengePoolCreated(address indexed carbonProjectAddress, address indexed challengePoolAddress);

    function createCarbonProject() public onlyOwner {
        CarbonProject newCarbonProject = new CarbonProject();
        carbonProjects.push(address(newCarbonProject));
        emit CarbonProjectCreated(address(newCarbonProject));
    }

    function createChallengePool(address carbonProjectAddress) public onlyOwner {
        require(carbonProjectAddress != address(0), "Invalid CarbonProject address.");
        bool exists = false;
        for (uint i = 0; i < carbonProjects.length; i++) {
            if (carbonProjects[i] == carbonProjectAddress) {
                exists = true;
                break;
            }
        }
        require(exists, "CarbonProject does not exist.");
        ChallengePool newChallengePool = new ChallengePool(czToken, czNFT);
        challengePools[carbonProjectAddress] = address(newChallengePool);
        emit ChallengePoolCreated(carbonProjectAddress, address(newChallengePool));
    }
}
