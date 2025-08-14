---
title: "IDeterministicDeploymentProxy"
description: "IDeterministicDeploymentProxy: This contract enables deploying other contracts at the same address across different EVM chains (Interface for Deterministic Deployment Proxy on Katana)"
---

### Overview

- **name**: IDeterministicDeploymentProxy
- **path**: `IDeterministicDeploymentProxy.sol`
- **context**: utility
- **title**: IDeterministicDeploymentProxy
- **notice**: This contract enables deploying other contracts at the same address across different EVM chains
- **dev**: Interface for Deterministic Deployment Proxy on Katana

### Addresses

- **tatara**: `0x4e59b44847b379578588920cA78FbF26c0B4956C`
- **katana**: `null`
- **bokuto**: `null`

### Function signatures

```
deploy(bytes)
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
    "name": "deploy",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  }
]
```
