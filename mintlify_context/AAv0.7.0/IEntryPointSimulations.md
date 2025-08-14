---
title: "IEntryPointSimulations"
description: "IEntryPointSimulations Interface (v0.7.0): Extended simulation interface for EntryPoint"
---

### Overview

- **name**: IEntryPointSimulations
- **path**: `AAv0.7.0/IEntryPointSimulations.sol`
- **context**: account-abstraction
- **tags**: account-abstraction, erc4337, simulation, v0.7.0
- **title**: IEntryPointSimulations Interface (v0.7.0)
- **notice**: Extended simulation interface for EntryPoint

### Addresses

- **tatara**: [`0x0000000071727De22E5E9d8BAf0edAc6f37da032`](https://explorer.tatara.katana.network/address/0x0000000071727De22E5E9d8BAf0edAc6f37da032)

### Function signatures

```
simulateHandleOp(tuple,address,bytes)
simulateValidation(tuple)
```

### ABI

```json
[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "initCode",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "callData",
            "type": "bytes"
          },
          {
            "internalType": "bytes32",
            "name": "accountGasLimits",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "preVerificationGas",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "gasFees",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "paymasterAndData",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "internalType": "struct PackedUserOperation",
        "name": "op",
        "type": "tuple"
      },
      {
        "internalType": "address",
        "name": "target",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "targetCallData",
        "type": "bytes"
      }
    ],
    "name": "simulateHandleOp",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "preOpGas",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "paid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "accountValidationData",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "paymasterValidationData",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "targetSuccess",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "targetResult",
            "type": "bytes"
          }
        ],
        "internalType": "struct IEntryPointSimulations.ExecutionResult",
        "name": "executionResult",
        "type": "tuple"
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
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "initCode",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "callData",
            "type": "bytes"
          },
          {
            "internalType": "bytes32",
            "name": "accountGasLimits",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "preVerificationGas",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "gasFees",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "paymasterAndData",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "internalType": "struct PackedUserOperation",
        "name": "userOp",
        "type": "tuple"
      }
    ],
    "name": "simulateValidation",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "preOpGas",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "prefund",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "actualAggregator",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "paymasterContext",
        "type": "bytes"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```
