// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract CZToken is ERC20Upgradeable, OwnableUpgradeable {
    mapping(address => bool) private hasClaimedLoginReward;

    function initialize(
        uint8 decimals_,
        string calldata name_,
        string calldata symbol_,
        uint256 initialLoginRewardAmount
    ) public initializer {
        __ERC20_init(name_, symbol_);
        _setupDecimals(decimals_);
        __Ownable_init();
        // Mint initial login reward amount for the contract itself
        _mint(address(this), initialLoginRewardAmount);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function claimLoginReward() public {
        require(!hasClaimedLoginReward[msg.sender], "Reward already claimed");
        // Ensure the contract has enough tokens to give as a reward
        require(balanceOf(address(this)) >= 10, "Insufficient balance in contract for login reward");
        _transfer(address(this), msg.sender, 10);
        hasClaimedLoginReward[msg.sender] = true;
    }

    function rewardUserForChallenge(address user, uint256 amount) public {
        // Ensure the contract has enough tokens to give as a reward
        require(balanceOf(address(this)) >= amount, "Insufficient balance in contract for challenge reward");
        _transfer(address(this), user, amount);
    }

    uint8 private _decimals;
    function _setupDecimals(uint8 decimals_) internal {
        _decimals = decimals_;
    }
    function decimals() public view override returns (uint8) {
        return _decimals;
    }
}
