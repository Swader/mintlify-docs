---
title: "IMultiSend"
description: "IMultiSend: This contract allows batching multiple transactions into a single transaction (Interface for the MultiSend contract on Katana)"
---

### Overview

- **name**: IMultiSend
- **path**: `IMultiSend.sol`
- **context**: general
- **title**: IMultiSend
- **notice**: This contract allows batching multiple transactions into a single transaction
- **dev**: Interface for the MultiSend contract on Katana

### Addresses

- **tatara**: `0x998739BFdAAdde7C933B942a68053933098f9EDa`
- **katana**: `null`
- **bokuto**: `null`

### Function signatures

```
multiSend(bytes)
```

### ABI

```json
[
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "transactions",
        "type": "bytes"
      }
    ],
    "name": "multiSend",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]
```
