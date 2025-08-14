---
title: "IMultiSendCallOnly"
description: "IMultiSendCallOnly: This contract allows batching multiple transactions into a single transaction, but only allows CALL operations (no delegatecall) (Interface for the MultiSendCallOnly contract on Katana)"
---

### Overview

- **name**: IMultiSendCallOnly
- **path**: `IMultiSendCallOnly.sol`
- **context**: general
- **title**: IMultiSendCallOnly
- **notice**: This contract allows batching multiple transactions into a single transaction, but only allows CALL operations (no delegatecall)
- **dev**: Interface for the MultiSendCallOnly contract on Katana

### Addresses

- **tatara**: [`0xA1dabEF33b3B82c7814B6D82A79e50F4AC44102B`](https://explorer.tatara.katana.network/address/0xA1dabEF33b3B82c7814B6D82A79e50F4AC44102B)

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
