---
title: "ICreate2Deployer"
description: "ICreate2Deployer: Helper contract for using CREATE2 opcode with additional safety features and utilities (Interface for the Create2Deployer contract on Katana)"
---

### Overview

- **name**: ICreate2Deployer
- **path**: `ICreate2Deployer.sol`
- **context**: utility
- **title**: ICreate2Deployer
- **notice**: Helper contract for using CREATE2 opcode with additional safety features and utilities
- **dev**: Interface for the Create2Deployer contract on Katana

### Addresses

- **tatara**: [`0x13b0D85CcB8bf860b6b79AF3029fCA081AE9beF2`](https://explorer.tatara.katana.network/address/0x13b0D85CcB8bf860b6b79AF3029fCA081AE9beF2)

### Function signatures

```
computeAddress(bytes32,bytes32)
computeAddressWithDeployer(bytes32,bytes32,address)
deploy(uint256,bytes32,bytes)
deployERC1820Implementer(uint256,bytes32)
pause()
unpause()
```

### ABI

```json
[
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "codeHash",
        "type": "bytes32"
      }
    ],
    "name": "computeAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "codeHash",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "deployer",
        "type": "address"
      }
    ],
    "name": "computeAddressWithDeployer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "code",
        "type": "bytes"
      }
    ],
    "name": "deploy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      }
    ],
    "name": "deployERC1820Implementer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```
