---
title: "IAgoraFaucet"
description: "IAgoraFaucet: Interface for Agora test token faucet (Provides testnet token distribution functionality)"
---

### Overview

- **name**: IAgoraFaucet
- **path**: `IAgoraFaucet.sol`
- **context**: utility
- **tags**: testnet, faucet, utility
- **title**: IAgoraFaucet
- **notice**: Interface for Agora test token faucet
- **dev**: Provides testnet token distribution functionality

### Addresses

- **tatara**: [`0xba804DF5c476E8EaeF87BF8085F295300ccE2a49`](https://explorer.tatara.katana.network/address/0xba804DF5c476E8EaeF87BF8085F295300ccE2a49)

### Function signatures

```
AGORA_FAUCET_STORAGE_SLOT()
faucetDripAmount()
initialize(tuple)
lastDripTimestamp()
maxAmountToOwn()
maxDripFrequency()
requestFunds(address)
token()
```

### ABI

```json
[
  {
    "inputs": [],
    "name": "InsufficientFunds",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidInitialization",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MaxAllowedExceeded",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MaxFrequencyExceeded",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotInitializing",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "SafeERC20FailedOperation",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "FundsRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "version",
        "type": "uint64"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_lastDripTimestamp",
        "type": "uint256"
      }
    ],
    "name": "SetLastDripTime",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "faucetDripAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "maxAmountToOwn",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "maxDripFrequency",
        "type": "uint256"
      }
    ],
    "name": "configureFaucet",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "AGORA_FAUCET_STORAGE_SLOT",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "faucetDripAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
            "name": "tokenToDistribute",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "faucetDripAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxAmountToOwn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxDripFrequency",
            "type": "uint256"
          }
        ],
        "internalType": "struct InitializeParams",
        "name": "_params",
        "type": "tuple"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lastDripTimestamp",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxAmountToOwn",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxDripFrequency",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
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
        "name": "_receiver",
        "type": "address"
      }
    ],
    "name": "requestFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
```
