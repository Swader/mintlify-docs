---
title: "ISenderCreator"
description: "ISenderCreator Interface (v0.6.0): Helper contract for creating sender accounts (Used by the EntryPoint to deploy new accounts using the \"initCode\")"
---

### Overview

- **name**: ISenderCreator
- **path**: `AAv0.6.0/ISenderCreator.sol`
- **context**: account-abstraction
- **tags**: account-abstraction, erc4337, creator, v0.6.0
- **title**: ISenderCreator Interface (v0.6.0)
- **notice**: Helper contract for creating sender accounts
- **dev**: Used by the EntryPoint to deploy new accounts using the "initCode"

### Addresses

- **tatara**: [`0xEFC2c1444eBCC4Db75e7613d20C6a62fF67A167C`](https://explorer.tatara.katana.network/address/0xEFC2c1444eBCC4Db75e7613d20C6a62fF67A167C)

### Function signatures

```
createSender(bytes)
```

### ABI

```json
[
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      }
    ],
    "name": "createSender",
    "outputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```
