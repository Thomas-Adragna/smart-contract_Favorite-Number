// Contrat Migrations
pragma solidity ^0.8.9;

contract Migrations {
    address public owner;
    uint256 public last_completed_migration;

    constructor() {
        owner = msg.sender;
    }

    modifier restricted() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    function setCompleted(uint256 completed) public restricted {
        last_completed_migration = completed;
    }
}




// SPDX-License-Identifier: MIT
//pragma solidity 0.8.9;

//contract FavoriteNumber {
//  constructor() {
//  }
//}