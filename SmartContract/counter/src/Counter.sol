// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Counter {
    uint256 private count = 0;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function increment() public {
        require(msg.sender == owner, "Only owner can increment");
        count += 1;
    }

    function decrement() public {
        require(msg.sender == owner, "Only owner can decrement");
        require(count > 0, "Counter cannot go below zero");
        count -= 1;
    }

    function getCount() public view returns (uint256) {
        return count;
    }

    function setCount(uint256 _count) public {
        require(msg.sender == owner, "Only owner can set count");
        count = _count;
    }
}