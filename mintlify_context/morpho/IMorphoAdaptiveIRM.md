---
title: "IMorphoAdaptiveIRM"
description: "IMorphoAdaptiveIRM: Interface for Morpho's Adaptive Curve Interest Rate Model (IRM) (This IRM dynamically adjusts interest rates based on market utilization)"
---

### Overview

- **name**: IMorphoAdaptiveIRM
- **path**: `morpho/IMorphoAdaptiveIRM.sol`
- **context**: morpho
- **tags**: morpho, defi, irm, interest-rate, adaptive
- **title**: IMorphoAdaptiveIRM
- **notice**: Interface for Morpho's Adaptive Curve Interest Rate Model (IRM)
- **dev**: This IRM dynamically adjusts interest rates based on market utilization

### Addresses

- **tatara**: `0x9eB6d0D85FCc07Bf34D69913031ade9E16BD5dB0`
- **katana**: `null`
- **bokuto**: `null`

### Function signatures

```
MORPHO()
borrowRate(tuple,tuple)
borrowRateView(tuple,tuple)
rateAtTarget(bytes32)
```

### ABI

```json
[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "IMorphoBlue.Id",
        "name": "id",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "avgBorrowRate",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "rateAtTarget",
        "type": "uint256"
      }
    ],
    "name": "BorrowRateUpdate",
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
        "components": [
          {
            "internalType": "address",
            "name": "loanToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "collateralToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "oracle",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "irm",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "lltv",
            "type": "uint256"
          }
        ],
        "internalType": "struct IMorphoBlue.MarketParams",
        "name": "marketParams",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint128",
            "name": "totalSupplyAssets",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "totalSupplyShares",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "totalBorrowAssets",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "totalBorrowShares",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "lastUpdate",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "fee",
            "type": "uint128"
          }
        ],
        "internalType": "struct IMorphoBlue.Market",
        "name": "market",
        "type": "tuple"
      }
    ],
    "name": "borrowRate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "loanToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "collateralToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "oracle",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "irm",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "lltv",
            "type": "uint256"
          }
        ],
        "internalType": "struct IMorphoBlue.MarketParams",
        "name": "marketParams",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint128",
            "name": "totalSupplyAssets",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "totalSupplyShares",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "totalBorrowAssets",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "totalBorrowShares",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "lastUpdate",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "fee",
            "type": "uint128"
          }
        ],
        "internalType": "struct IMorphoBlue.Market",
        "name": "market",
        "type": "tuple"
      }
    ],
    "name": "borrowRateView",
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
        "internalType": "IMorphoBlue.Id",
        "name": "id",
        "type": "bytes32"
      }
    ],
    "name": "rateAtTarget",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
```
