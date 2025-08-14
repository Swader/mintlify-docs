---
title: "IPreLiquidationCallback"
description: "IPreLiquidationCallback: Interface that pre-liquidators must implement to receive callbacks during pre-liquidation"
---

### Overview

- **name**: IPreLiquidationCallback
- **path**: `morpho/IPreLiquidationCallback.sol`
- **context**: morpho
- **tags**: morpho, defi, liquidation, callback, preliquidation
- **title**: IPreLiquidationCallback
- **notice**: Interface that pre-liquidators must implement to receive callbacks during pre-liquidation

### Function signatures

```
onPreLiquidate(uint256,bytes)
```

### ABI

```json
[
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "repaidAssets",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "onPreLiquidate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```
