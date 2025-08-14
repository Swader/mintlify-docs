---
title: "IProxyAdmin"
description: "IProxyAdmin: Interface for the ProxyAdmin contract which manages transparent proxy contracts"
---

### Overview

- **name**: IProxyAdmin
- **path**: `agglayer/IProxyAdmin.sol`
- **context**: agglayer
- **tags**: agglayer, polygon, proxy, admin, governance
- **title**: IProxyAdmin
- **notice**: Interface for the ProxyAdmin contract which manages transparent proxy contracts

### Addresses

- **tatara**: [`0x85cEB41028B1a5ED2b88E395145344837308b251`](https://explorer.tatara.katana.network/address/0x85cEB41028B1a5ED2b88E395145344837308b251)

### Function signatures

```
changeProxyAdmin(address,address)
getProxyAdmin(address)
getProxyImplementation(address)
owner()
pendingOwner()
renounceOwnership()
transferOwnership(address)
upgrade(address,address)
upgradeAndCall(address,address,bytes)
```

### ABI

```json
[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "proxy",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "newAdmin",
        "type": "address"
      }
    ],
    "name": "changeProxyAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "proxy",
        "type": "address"
      }
    ],
    "name": "getProxyAdmin",
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
        "name": "proxy",
        "type": "address"
      }
    ],
    "name": "getProxyImplementation",
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
    "name": "pendingOwner",
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
        "name": "newOwner",
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
        "name": "proxy",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "upgrade",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "proxy",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "upgradeAndCall",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]
```
