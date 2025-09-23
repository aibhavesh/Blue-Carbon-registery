// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BlueCarbonCredit is ERC20, Ownable {
    constructor() ERC20("BlueCarbonCredit", "BCC") Ownable(msg.sender) {}

    function mintCredit(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * 10 ** decimals());
    }
}
