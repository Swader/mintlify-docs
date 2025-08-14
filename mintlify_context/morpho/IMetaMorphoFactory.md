---
title: "IMetaMorphoFactory"
description: "IMetaMorphoFactory: Interface for MetaMorpho Factory, which creates MetaMorpho vaults for Morpho Blue"
---

### Overview

- **name**: IMetaMorphoFactory
- **path**: `morpho/IMetaMorphoFactory.sol`
- **context**: morpho
- **tags**: morpho, defi, factory, vault, metamorpho
- **title**: IMetaMorphoFactory
- **notice**: Interface for MetaMorpho Factory, which creates MetaMorpho vaults for Morpho Blue

### Addresses

- **tatara**: `0x505619071bdCDeA154f164b323B6C42Fc14257f7`
- **katana**: `null`
- **bokuto**: `null`

### Function signatures

```
MORPHO()
createMetaMorpho(address,uint256,address,string,string,bytes32)
isMetaMorpho(address)
```

### ABI

```json
[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "metaMorpho",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "initialOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "initialTimelock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      }
    ],
    "name": "CreateMetaMorpho",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "MORPHO",
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
        "name": "initialOwner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "initialTimelock",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      }
    ],
    "name": "createMetaMorpho",
    "outputs": [
      {
        "internalType": "address",
        "name": "metaMorpho",
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
        "name": "target",
        "type": "address"
      }
    ],
    "name": "isMetaMorpho",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
```
