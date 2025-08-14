---
title: "IBulkWriter"
description: "IBulkWriter: Utility batch methods to interact with ERCs 7401 (Nestable NFTs) and 6220 (Equippable NFTs) (Interface for bulk operations on RMRK NFT collections)"
---

### Overview

- **name**: IBulkWriter
- **path**: `nft/IBulkWriter.sol`
- **context**: nft
- **tags**: nft, erc721, rmrk, bulk, utility
- **title**: IBulkWriter
- **notice**: Utility batch methods to interact with ERCs 7401 (Nestable NFTs) and 6220 (Equippable NFTs)
- **dev**: Interface for bulk operations on RMRK NFT collections

### Addresses

- **katana**: [`0xcd891c3de90dcdF99549E9B6402BFAa695DEc69B`](https://katanascan.com/address/0xcd891c3de90dcdF99549E9B6402BFAa695DEc69B)
- **bokuto**: [`0xA681A7BE7A87bDA505c1a947b172b8A1988E329A`](https://explorer-bokuto.katanarpc.com/address/0xA681A7BE7A87bDA505c1a947b172b8A1988E329A)

### Function signatures

```
bulkEquip(address,uint256,tuple[],tuple[])
bulkTransferAllChildren(address,uint256,address,uint256)
bulkTransferChildren(address,uint256,uint256[],address,uint256)
replaceEquip(address,tuple)
```

### ABI

```json
[
  {
    "inputs": [],
    "name": "RMRKCanOnlyDoBulkOperationsOnOwnedTokens",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "RMRKCanOnlyDoBulkOperationsWithOneTokenAtATime",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "collection",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint64",
            "name": "assetId",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "slotPartId",
            "type": "uint64"
          }
        ],
        "internalType": "struct RMRKBulkWriter.IntakeUnequip[]",
        "name": "unequips",
        "type": "tuple[]"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "childIndex",
            "type": "uint256"
          },
          {
            "internalType": "uint64",
            "name": "assetId",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "slotPartId",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "childAssetId",
            "type": "uint64"
          }
        ],
        "internalType": "struct IERC6220.IntakeEquip[]",
        "name": "equips",
        "type": "tuple[]"
      }
    ],
    "name": "bulkEquip",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "collection",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "destinationId",
        "type": "uint256"
      }
    ],
    "name": "bulkTransferAllChildren",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "collection",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "childrenIndexes",
        "type": "uint256[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "destinationId",
        "type": "uint256"
      }
    ],
    "name": "bulkTransferChildren",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "collection",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "childIndex",
            "type": "uint256"
          },
          {
            "internalType": "uint64",
            "name": "assetId",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "slotPartId",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "childAssetId",
            "type": "uint64"
          }
        ],
        "internalType": "struct IERC6220.IntakeEquip",
        "name": "data",
        "type": "tuple"
      }
    ],
    "name": "replaceEquip",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```
