---
title: "IBundler3"
description: "IBundler3: Interface for the Bundler3 contract, which enables batching multiple calls in a single transaction"
---

### Overview

- **name**: IBundler3
- **path**: `IBundler3.sol`
- **context**: morpho
- **tags**: morpho, bundler, batch, utility
- **title**: IBundler3
- **notice**: Interface for the Bundler3 contract, which enables batching multiple calls in a single transaction

### Addresses

- **tatara**: `0xD0bDf3E62F6750Bd83A50b4001743898Af287009`
- **katana**: `null`
- **bokuto**: `null`

### Function signatures

```
initiator()
multicall(tuple[])
reenter(tuple[])
reenterHash()
```

### ABI

```json
[
  {
    "inputs": [],
    "name": "initiator",
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
        "components": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "skipRevert",
            "type": "bool"
          },
          {
            "internalType": "bytes32",
            "name": "callbackHash",
            "type": "bytes32"
          }
        ],
        "internalType": "struct IBundler3.Call[]",
        "name": "bundle",
        "type": "tuple[]"
      }
    ],
    "name": "multicall",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "skipRevert",
            "type": "bool"
          },
          {
            "internalType": "bytes32",
            "name": "callbackHash",
            "type": "bytes32"
          }
        ],
        "internalType": "struct IBundler3.Call[]",
        "name": "bundle",
        "type": "tuple[]"
      }
    ],
    "name": "reenter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "reenterHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
```
