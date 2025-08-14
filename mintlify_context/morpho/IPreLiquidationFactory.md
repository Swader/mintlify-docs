---
title: "IPreLiquidationFactory"
description: "IPreLiquidationFactory: Interface for the PreLiquidation Factory that creates pre-liquidation contracts for Morpho Blue markets"
---

### Overview

- **name**: IPreLiquidationFactory
- **path**: `morpho/IPreLiquidationFactory.sol`
- **context**: morpho
- **tags**: morpho, defi, liquidation, factory, preliquidation
- **title**: IPreLiquidationFactory
- **notice**: Interface for the PreLiquidation Factory that creates pre-liquidation contracts for Morpho Blue markets

### Function signatures

```
MORPHO()
createPreLiquidation(bytes32,tuple)
isPreLiquidation(address)
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
        "name": "preLiquidation",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "IMorphoBlue.Id",
        "name": "id",
        "type": "bytes32"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "preLltv",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "preLCF1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "preLCF2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "preLIF1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "preLIF2",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "preLiquidationOracle",
            "type": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct IPreLiquidation.PreLiquidationParams",
        "name": "params",
        "type": "tuple"
      }
    ],
    "name": "CreatePreLiquidation",
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
        "internalType": "IMorphoBlue.Id",
        "name": "id",
        "type": "bytes32"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "preLltv",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "preLCF1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "preLCF2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "preLIF1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "preLIF2",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "preLiquidationOracle",
            "type": "address"
          }
        ],
        "internalType": "struct IPreLiquidation.PreLiquidationParams",
        "name": "preLiquidationParams",
        "type": "tuple"
      }
    ],
    "name": "createPreLiquidation",
    "outputs": [
      {
        "internalType": "address",
        "name": "preLiquidation",
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
    "name": "isPreLiquidation",
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
