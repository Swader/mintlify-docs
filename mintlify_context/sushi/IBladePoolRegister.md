---
title: "IBladePoolRegister"
description: "IBladePoolRegister: Interface for Sushi's Blade Pool Register (Blade is Sushi's RFQ (Request for Quote) trading protocol that provides better pricing through off-chain liquidity aggregation and on-chain settlement.)"
---

### Overview

- **name**: IBladePoolRegister
- **path**: `sushi/IBladePoolRegister.sol`
- **context**: defi
- **tags**: sushi, swap, dex, defi, rfq
- **title**: IBladePoolRegister
- **notice**: Interface for Sushi's Blade Pool Register
- **dev**: Blade is Sushi's RFQ (Request for Quote) trading protocol that provides better pricing through off-chain liquidity aggregation and on-chain settlement.

### Addresses

- **katana**: [`0xe56a524F7F35d39E5d5C34428De497da29D4B88b`](https://katanascan.com/address/0xe56a524F7F35d39E5d5C34428De497da29D4B88b)

### Function signatures

```
bladeVerifiedImplementation()
createBladePermitRouter(address,address)
createBladeVerifiedExchange(address,address,address[],address[],uint256[],address,address)
createLPTransfer(address,address,address)
isRegistered(address)
lpTransferImplementation()
owner()
permitRouterImplementation()
renounceOwnership()
setLPTransferImplementation(address)
setPermitRouterImplementation(address)
setVerifiedImplementation(address)
transferOwnership(address)
```

### ABI

```json
[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "oldExchange",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newExchange",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "lpTransferAddress",
        "type": "address"
      }
    ],
    "name": "BladeLPTransferCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "permitRouterAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "exchangeAddress",
        "type": "address"
      }
    ],
    "name": "BladePermitRouterCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "exchangeAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address[]",
        "name": "tokens",
        "type": "address[]"
      },
      {
        "indexed": false,
        "internalType": "address[]",
        "name": "oracles",
        "type": "address[]"
      }
    ],
    "name": "BladeVerifiedExchangeCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "bladeVerifiedImplementation",
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
        "internalType": "address",
        "name": "bladeExchange",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "permitRouterAddress",
        "type": "address"
      }
    ],
    "name": "createBladePermitRouter",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
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
        "name": "theSigner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "theWrapper",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "tokens",
        "type": "address[]"
      },
      {
        "internalType": "address[]",
        "name": "oracles",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "minTimeTolerances",
        "type": "uint256[]"
      },
      {
        "internalType": "address",
        "name": "initialOwner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "exchangeAddress",
        "type": "address"
      }
    ],
    "name": "createBladeVerifiedExchange",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
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
        "name": "oldExchange",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "newExchange",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "lpTransferAddress",
        "type": "address"
      }
    ],
    "name": "createLPTransfer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
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
        "name": "",
        "type": "address"
      }
    ],
    "name": "isRegistered",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lpTransferImplementation",
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
    "inputs": [],
    "name": "owner",
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
    "inputs": [],
    "name": "permitRouterImplementation",
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
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImpl",
        "type": "address"
      }
    ],
    "name": "setLPTransferImplementation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImpl",
        "type": "address"
      }
    ],
    "name": "setPermitRouterImplementation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImpl",
        "type": "address"
      }
    ],
    "name": "setVerifiedImplementation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```
