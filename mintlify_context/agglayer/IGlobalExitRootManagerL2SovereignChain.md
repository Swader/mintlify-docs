---
title: "IGlobalExitRootManagerL2SovereignChain"
description: "IGlobalExitRootManagerL2SovereignChain: Interface for the GlobalExitRootManagerL2SovereignChain contract which manages exit roots (Proxy. Implementation address: 0x282a631D9F3Ef04Bf1A44B4C9e8bDC8EB278917f)"
---

### Overview

- **name**: IGlobalExitRootManagerL2SovereignChain
- **path**: `agglayer/IGlobalExitRootManagerL2SovereignChain.sol`
- **context**: agglayer
- **tags**: agglayer, bridge, polygon, exit-root, sovereign
- **title**: IGlobalExitRootManagerL2SovereignChain
- **notice**: Interface for the GlobalExitRootManagerL2SovereignChain contract which manages exit roots
- **dev**: Proxy. Implementation address: 0x282a631D9F3Ef04Bf1A44B4C9e8bDC8EB278917f

### Addresses

- **tatara**: [`0xa40D5f56745a118D0906a34E69aeC8C0Db1cB8fA`](https://explorer.tatara.katana.network/address/0xa40D5f56745a118D0906a34E69aeC8C0Db1cB8fA)

### Function signatures

```
bridgeAddress()
getLastGlobalExitRoot()
getLastGlobalExitRootAndTimestamp()
globalExitRootMap(uint256)
globalExitRootMapTimestamp(bytes32)
initialize(address,address)
isGlobalExitRoot(bytes32)
mainnetExitRoot()
rollupAddress()
rollupExitRoot()
updateExitRoot(bytes32)
```

### ABI

```json
[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "mainnetExitRoot",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "rollupExitRoot",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "globalExitRoot",
        "type": "bytes32"
      }
    ],
    "name": "UpdateGlobalExitRoot",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "bridgeAddress",
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
    "name": "getLastGlobalExitRoot",
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
    "name": "getLastGlobalExitRootAndTimestamp",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
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
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "globalExitRootMap",
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
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "globalExitRoot",
        "type": "bytes32"
      }
    ],
    "name": "globalExitRootMapTimestamp",
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
        "name": "_bridgeAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_rollupAddress",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "globalExitRoot",
        "type": "bytes32"
      }
    ],
    "name": "isGlobalExitRoot",
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
    "name": "mainnetExitRoot",
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
    "name": "rollupAddress",
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
    "name": "rollupExitRoot",
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
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "newRoot",
        "type": "bytes32"
      }
    ],
    "name": "updateExitRoot",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```
