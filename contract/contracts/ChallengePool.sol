// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./CZToken.sol";
import "./CZNFT.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract ChallengePool is ReentrancyGuard {
    CZToken public czToken;
    CZNFT public czNFT;

    mapping(address => uint256) private deposits;
    mapping(address => bool) private completedChallenges;
    uint256 public totalParticipants;

    constructor(CZToken _czToken, CZNFT _czNFT) {
        czToken = _czToken;
        czNFT = _czNFT;
    }

    function deposit(uint256 amount) external {
        require(amount > 0, "Deposit amount must be positive");
        require(czToken.transferFrom(msg.sender, address(this), amount), "Deposit transfer failed");
        
        if (deposits[msg.sender] == 0) {
            totalParticipants += 1;
        }
        deposits[msg.sender] += amount;
    }

    function completeChallenge(address participant) external {
        require(deposits[participant] > 0, "No deposit found for participant");
        completedChallenges[participant] = true;
    }

    function claimRewardAndRefundDeposit(bool wantERC721, string calldata tokenURI) external nonReentrant {
        require(completedChallenges[msg.sender], "Challenge not completed");
        uint256 depositAmount = deposits[msg.sender];
        require(depositAmount > 0, "No deposit to refund");
        
        uint256 rewardAmount = address(this).balance / totalParticipants; // 计算ERC20奖励金额

        // 退还押金
        require(czToken.transfer(msg.sender, depositAmount), "Refund transfer failed");

        if (wantERC721) {
            czNFT.awardItem(msg.sender, tokenURI);
        } else {
            require(czToken.transfer(msg.sender, rewardAmount), "Reward transfer failed");
        }

        // 重置用户状态
        deposits[msg.sender] = 0;
        completedChallenges[msg.sender] = false;
        totalParticipants -= 1;
    }
}
