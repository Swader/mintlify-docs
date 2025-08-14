---
title: "IBatchDistributor"
description: "IBatchDistributor: Allows gas-efficient distribution of ETH and ERC-20 tokens to multiple recipients in one transaction (Interface for the native and ERC-20 token batch distribution contract)"
---

### Overview

- **name**: IBatchDistributor
- **path**: `IBatchDistributor.sol`
- **context**: erc20
- **tags**: utility, batch, distribution, erc20
- **title**: IBatchDistributor
- **notice**: Allows gas-efficient distribution of ETH and ERC-20 tokens to multiple recipients in one transaction
- **dev**: Interface for the native and ERC-20 token batch distribution contract

### Addresses

- **tatara**: [`0x36C38895A20c835F9A6A294821D669995eB2265E`](https://explorer.tatara.katana.network/address/0x36C38895A20c835F9A6A294821D669995eB2265E)
- **katana**: [`0x66C0499B1Df146dbaf4B1DEa1df436ba26DAfF21`](https://katanascan.com/address/0x66C0499B1Df146dbaf4B1DEa1df436ba26DAfF21)
- **bokuto**: [`0x2A6fd05d3C6A373FBb073dea12bCee7C174AE606`](https://explorer-bokuto.katanarpc.com/address/0x2A6fd05d3C6A373FBb073dea12bCee7C174AE606)

### Function signatures

```
distributeEther(tuple)
distributeToken(address,tuple)
```

### ABI

```json
[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "emitter",
        "type": "address"
      }
    ],
    "name": "EtherTransferFail",
    "type": "error"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "internalType": "struct IBatchDistributor.Transaction[]",
            "name": "txns",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct IBatchDistributor.Batch",
        "name": "batch",
        "type": "tuple"
      }
    ],
    "name": "distributeEther",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "token",
        "type": "address"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "internalType": "struct IBatchDistributor.Transaction[]",
            "name": "txns",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct IBatchDistributor.Batch",
        "name": "batch",
        "type": "tuple"
      }
    ],
    "name": "distributeToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```
