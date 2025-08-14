---
title: "IConduitController"
description: "IConduitController: Interface for OpenSea's Conduit Controller system that enables deploying and managing conduits (Conduits allow registered callers (channels) to transfer approved ERC20/721/1155 tokens on their behalf)"
---

### Overview

- **name**: IConduitController
- **path**: `opensea/IConduitController.sol`
- **context**: opensea
- **tags**: opensea, nft, marketplace, conduit, controller
- **title**: IConduitController
- **notice**: Interface for OpenSea's Conduit Controller system that enables deploying and managing conduits
- **dev**: Conduits allow registered callers (channels) to transfer approved ERC20/721/1155 tokens on their behalf

### Addresses

- **tatara**: [`0x00000000F9490004C11Cef243f5400493c00Ad63`](https://explorer.tatara.katana.network/address/0x00000000F9490004C11Cef243f5400493c00Ad63)
- **katana**: [`0x00000000F9490004C11Cef243f5400493c00Ad63`](https://katanascan.com/address/0x00000000F9490004C11Cef243f5400493c00Ad63)
- **bokuto**: [`0x00000000F9490004C11Cef243f5400493c00Ad63`](https://explorer-bokuto.katanarpc.com/address/0x00000000F9490004C11Cef243f5400493c00Ad63)

### Function signatures

```
acceptOwnership(address)
cancelOwnershipTransfer(address)
createConduit(bytes32,address)
getChannel(address,uint256)
getChannelStatus(address,address)
getChannels(address)
getConduit(bytes32)
getConduitCodeHashes()
getKey(address)
getPotentialOwner(address)
getTotalChannels(address)
ownerOf(address)
transferOwnership(address,address)
updateChannel(address,address,bool)
```

### ABI

```json
[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "conduit",
        "type": "address"
      }
    ],
    "name": "acceptOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "conduit",
        "type": "address"
      }
    ],
    "name": "cancelOwnershipTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "conduitKey",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "initialOwner",
        "type": "address"
      }
    ],
    "name": "createConduit",
    "outputs": [
      {
        "internalType": "address",
        "name": "conduit",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "conduit",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "channelIndex",
        "type": "uint256"
      }
    ],
    "name": "getChannel",
    "outputs": [
      {
        "internalType": "address",
        "name": "channel",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "conduit",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "channel",
        "type": "address"
      }
    ],
    "name": "getChannelStatus",
    "outputs": [
      {
        "internalType": "bool",
        "name": "isOpen",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "conduit",
        "type": "address"
      }
    ],
    "name": "getChannels",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "channels",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "conduitKey",
        "type": "bytes32"
      }
    ],
    "name": "getConduit",
    "outputs": [
      {
        "internalType": "address",
        "name": "conduit",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "exists",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getConduitCodeHashes",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "creationCodeHash",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "runtimeCodeHash",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "conduit",
        "type": "address"
      }
    ],
    "name": "getKey",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "conduitKey",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "conduit",
        "type": "address"
      }
    ],
    "name": "getPotentialOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "potentialOwner",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "conduit",
        "type": "address"
      }
    ],
    "name": "getTotalChannels",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "totalChannels",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "conduit",
        "type": "address"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "conduit",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "newPotentialOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "conduit",
        "type": "address"
      },
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
