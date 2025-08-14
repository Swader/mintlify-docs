---
title: "ISafeExecutor"
description: "ISafeExecutor: Interface for the SafeExecutor contract used by SushiRouter"
---

### Overview

- **name**: ISafeExecutor
- **path**: `ISafeExecutor.sol`
- **context**: general
- **title**: ISafeExecutor
- **notice**: Interface for the SafeExecutor contract used by SushiRouter

### Function signatures

```
execute(address,bytes)
executeMultiple(tuple[])
```

### ABI

```json
[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "executor",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "executorData",
        "type": "bytes"
      }
    ],
    "name": "execute",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "executor",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct ISushiRouter.Executor[]",
        "name": "executors",
        "type": "tuple[]"
      }
    ],
    "name": "executeMultiple",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]
```
