---
title: "IBridgeL2SovereignChain"
description: "IBridgeL2SovereignChain: Interface for the BridgeL2SovereignChain contract which handles cross-chain message passing (Proxy. Implementation address tatara: 0x8BD36ca1A55e389335004872aA3C3Be0969D3aA7)"
---

### Overview

- **name**: IBridgeL2SovereignChain
- **path**: `agglayer/IBridgeL2SovereignChain.sol`
- **context**: agglayer
- **tags**: agglayer, bridge, polygon, crosschain, sovereign
- **title**: IBridgeL2SovereignChain
- **notice**: Interface for the BridgeL2SovereignChain contract which handles cross-chain message passing
- **dev**: Proxy. Implementation address tatara: 0x8BD36ca1A55e389335004872aA3C3Be0969D3aA7

### Addresses

- **tatara**: `0x528e26b25a34a4A5d0dbDa1d57D318153d2ED582`
- **katana**: `null`
- **bokuto**: `null`

### Function signatures

```
bridgeAsset(uint32,address,uint256,address,bytes,bytes)
bridgeMessage(uint32,address,bytes)
claimMessage(bytes32[],uint32,bytes32,bytes32,uint32,address,uint32,address,uint256,bytes)
depositCount()
globalExitRootManager()
initialize(uint32,address,address)
isClaimed(uint32,address,uint32,address,uint256,bytes,uint32)
networkID()
polygonZkEVMaddress()
```

### ABI

```json
[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "originNetwork",
        "type": "uint32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "originAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "destinationNetwork",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "destinationAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "metadata",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "depositCount",
        "type": "uint32"
      }
    ],
    "name": "BridgeEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "originNetwork",
        "type": "uint32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "originAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "destinationNetwork",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "destinationAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "metadata",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "depositCount",
        "type": "uint32"
      }
    ],
    "name": "ClaimEvent",
    "type": "event"
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
        "internalType": "bytes",
        "name": "permitData",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "metadata",
        "type": "bytes"
      }
    ],
    "name": "bridgeAsset",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
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
        "internalType": "bytes",
        "name": "metadata",
        "type": "bytes"
      }
    ],
    "name": "bridgeMessage",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32[]",
        "name": "smtProof",
        "type": "bytes32[]"
      },
      {
        "internalType": "uint32",
        "name": "index",
        "type": "uint32"
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
    "name": "depositCount",
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
    "inputs": [],
    "name": "globalExitRootManager",
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
        "internalType": "uint32",
        "name": "_networkID",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "_globalExitRootManager",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_polygonZkEVMaddress",
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
      },
      {
        "internalType": "uint32",
        "name": "depositCount",
        "type": "uint32"
      }
    ],
    "name": "isClaimed",
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
    "inputs": [],
    "name": "polygonZkEVMaddress",
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
