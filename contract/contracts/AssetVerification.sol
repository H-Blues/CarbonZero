// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CZNFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {Chainlink, ChainlinkClient} from "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";

contract AssetVerification is ChainlinkClient, Ownable {
    using Chainlink for Chainlink.Request;
    
    CZNFT public czNFT; 
    uint256 private fee;
    bytes32 private jobId;
    address private oracle;

    mapping(bytes32 => address) private requestToSender;
    mapping(address => uint256) public userVotes;
    mapping(address => bool) public isVerified;

    event VerificationRequested(bytes32 indexed requestId, address indexed user);
    event VerificationCompleted(address indexed user, bool verified);
    event VoteCasted(address indexed user);
    event AirdropClaimed(address indexed user);

    constructor(address _oracle, bytes32 _jobId, address _czNFTAddress) {
        setChainlinkToken(0x779877A7B0D9E8603169DdbD7836e478b4624789);
        // setChainlinkOracle(0x6090149792dAAeE9D1D568c9f9a6F6B46AA29eFD); //Ethereum Sepolia
        // setChainJobId(c1c5e92880894eb6b27d3cae19670aa3);  // GET>bool
        oracle = _oracle;
        jobId = _jobId;
        fee = (1 * LINK_DIVISIBILITY) / 10;
        czNFT = CZNFT(_czNFTAddress);
    }

    // Function to request asset verification from the Chainlink oracle
    function verifyAsset(string memory matchCodeURL) public {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        req.add("get", matchCodeURL); 
        bytes32 requestId = sendChainlinkRequestTo(oracle, req, fee);

        requestToSender[requestId] = msg.sender;
        emit VerificationRequested(requestId, msg.sender);
    }

    // Callback function for Chainlink oracle responses
    function fulfill(bytes32 _requestId, bool _verified) public recordChainlinkFulfillment(_requestId) {
        address user = requestToSender[_requestId];
        isVerified[user] = _verified;
        emit VerificationCompleted(user, _verified);
    }

    // Function for users to cast a vote
    function castVote() public {
        require(isVerified[msg.sender], "User not verified");
        userVotes[msg.sender] += 1; 
        emit VoteCasted(msg.sender);

        if (userVotes[msg.sender] == 10) { 
            czNFT.awardItem(msg.sender, "uniqueTokenURI");
            emit AirdropClaimed(msg.sender);
        }
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
