// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * FreePeng (FPG)
 * Fixed-supply BEP-20/ERC-20 compatible token template.
 * Test on BSC Testnet before any mainnet deployment.
 */
contract FreePeng is ERC20, Ownable {
    uint256 public constant TOTAL_SUPPLY = 1_000_000_000 * 10 ** 18;

    constructor() ERC20("FreePeng", "FPG") Ownable(msg.sender) {
        _mint(msg.sender, TOTAL_SUPPLY);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}
