// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CZToken is ERC20, Ownable {

    mapping(address => bool) private _hasClaimed;

    constructor() ERC20("CZToken", "CZ") {
        _mint(msg.sender, 1000000 * 10**18);
    }

    function claimTokens() public {
        require(!_hasClaimed[msg.sender], "Tokens already claimed!");

        uint256 amount = 5 * 10**18;
        _mint(msg.sender, amount);

        _hasClaimed[msg.sender] = true;
    }
}
