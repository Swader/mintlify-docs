---
title: "ILxLyBridge"
description: "ILxLyBridge: Interface for Polygon LxLy Bridge contract (Provides cross-chain bridging functionality)"
---

### Overview

- **name**: ILxLyBridge
- **path**: `ILxLyBridge.sol`
- **context**: bridge
- **tags**: bridge, polygon, crosschain
- **title**: ILxLyBridge
- **notice**: Interface for Polygon LxLy Bridge contract
- **dev**: Provides cross-chain bridging functionality

### Function signatures

```
bridgeAsset(uint32,address,uint256,address,bool,bytes)
bridgeMessage(uint32,address,bool,bytes)
claimAsset(bytes32[32],bytes32[32],uint256,bytes32,bytes32,uint32,address,uint32,address,uint256,bytes)
claimMessage(bytes32[32],bytes32[32],uint256,bytes32,bytes32,uint32,address,uint32,address,uint256,bytes)
networkID()
wrappedAddressIsNotMintable(address)
```

### ABI

```json
[
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "destinationNetwork",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "destinationAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "forceUpdateGlobalExitRoot",
        "type": "bool"
      },
      {
        "internalType": "bytes",
        "name": "permitData",
        "type": "bytes"
      }
    ],
    "name": "bridgeAsset",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "destinationNetwork",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "destinationAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "forceUpdateGlobalExitRoot",
        "type": "bool"
      },
      {
        "internalType": "bytes",
        "name": "metadata",
        "type": "bytes"
      }
    ],
    "name": "bridgeMessage",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32[32]",
        "name": "smtProofLocalExitRoot",
        "type": "bytes32[32]"
      },
      {
        "internalType": "bytes32[32]",
        "name": "smtProofRollupExitRoot",
        "type": "bytes32[32]"
      },
      {
        "internalType": "uint256",
        "name": "globalIndex",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "mainnetExitRoot",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "rollupExitRoot",
        "type": "bytes32"
      },
      {
        "internalType": "uint32",
        "name": "originNetwork",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "originTokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "destinationNetwork",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "destinationAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "metadata",
        "type": "bytes"
      }
    ],
    "name": "claimAsset",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32[32]",
        "name": "smtProofLocalExitRoot",
        "type": "bytes32[32]"
      },
      {
        "internalType": "bytes32[32]",
        "name": "smtProofRollupExitRoot",
        "type": "bytes32[32]"
      },
      {
        "internalType": "uint256",
        "name": "globalIndex",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "mainnetExitRoot",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "rollupExitRoot",
        "type": "bytes32"
      },
      {
        "internalType": "uint32",
        "name": "originNetwork",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "originAddress",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "destinationNetwork",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "destinationAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "metadata",
        "type": "bytes"
      }
    ],
    "name": "claimMessage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "networkID",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "wrappedAddress",
        "type": "address"
      }
    ],
    "name": "wrappedAddressIsNotMintable",
    "outputs": [
      {
        "internalType": "bool",
        "name": "isNotMintable",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
```
