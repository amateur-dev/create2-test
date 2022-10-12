// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.9;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract HelloWorld {

    function hi() public pure returns (string memory) {
        return "Hello World!";
    }
}