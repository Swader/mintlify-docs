---
title: "IConduit"
description: "IConduit: Interface for OpenSea's Conduit contracts that enable transferring approved tokens (Conduits are deployed by the ConduitController and can transfer ERC20/721/1155 tokens)"
---

### Overview

- **name**: IConduit
- **path**: `opensea/IConduit.sol`
- **context**: opensea
- **tags**: opensea, nft, marketplace, conduit
- **title**: IConduit
- **notice**: Interface for OpenSea's Conduit contracts that enable transferring approved tokens
- **dev**: Conduits are deployed by the ConduitController and can transfer ERC20/721/1155 tokens

### Function signatures

```
execute(tuple[])
executeBatch1155(address,address,address,uint256[],uint256[])
updateChannel(address,bool)
```

### ABI

```json
[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum IConduit.ItemType",
            "name": "itemType",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "identifier",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "internalType": "struct IConduit.TransferItem[]",
        "name": "transferItems",
        "type": "tuple[]"
      }
    ],
    "name": "execute",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "name": "executeBatch1155",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "channel",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isOpen",
        "type": "bool"
      }
    ],
    "name": "updateChannel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```
