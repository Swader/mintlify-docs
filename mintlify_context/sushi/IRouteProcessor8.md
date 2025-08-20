---
title: "IRouteProcessor8"
description: "IRouteProcessor8: Interface for Sushi's RouteProcessor8 (Processes the route generated off-chain. Includes an option to take a portion of any surplus.)"
---

### Overview

- **name**: IRouteProcessor8
- **path**: `sushi/IRouteProcessor8.sol`
- **context**: defi
- **tags**: sushi, swap, dex, defi
- **title**: IRouteProcessor8
- **notice**: Interface for Sushi's RouteProcessor8
- **dev**: Processes the route generated off-chain. Includes an option to take a portion of any surplus.

### Addresses

- **katana**: [`0x2905d7e4D048d29954F81b02171DD313F457a4a4`](https://katanascan.com/address/0x2905d7e4D048d29954F81b02171DD313F457a4a4)

### Function signatures

```
processRoute(address,uint256,address,uint256,address,bytes,bool,uint32)
processRouteWithTransferValueInput(address,uint256,address,uint256,address,uint256,address,bytes,bool,uint32)
processRouteWithTransferValueOutput(address,uint256,address,uint256,address,uint256,address,bytes,bool,uint32)
transferValueAndprocessRoute(address,uint256,address,uint256,address,uint256,address,bytes,bool,uint32)
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
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "tokenIn",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "slippage",
        "type": "int256"
      },
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "referralCode",
        "type": "uint32"
      }
    ],
    "name": "Route",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenIn",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountOutQuote",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "route",
        "type": "bytes"
      },
      {
        "internalType": "bool",
        "name": "takeSurplus",
        "type": "bool"
      },
      {
        "internalType": "uint32",
        "name": "referralCode",
        "type": "uint32"
      }
    ],
    "name": "processRoute",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "transferValueTo",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountValueTransfer",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "tokenIn",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountOutQuote",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "route",
        "type": "bytes"
      },
      {
        "internalType": "bool",
        "name": "takeSurplus",
        "type": "bool"
      },
      {
        "internalType": "uint32",
        "name": "referralCode",
        "type": "uint32"
      }
    ],
    "name": "processRouteWithTransferValueInput",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "transferValueTo",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountValueTransfer",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "tokenIn",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountOutQuote",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "route",
        "type": "bytes"
      },
      {
        "internalType": "bool",
        "name": "takeSurplus",
        "type": "bool"
      },
      {
        "internalType": "uint32",
        "name": "referralCode",
        "type": "uint32"
      }
    ],
    "name": "processRouteWithTransferValueOutput",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "transferValueTo",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountValueTransfer",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "tokenIn",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountOutQuote",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "route",
        "type": "bytes"
      },
      {
        "internalType": "bool",
        "name": "takeSurplus",
        "type": "bool"
      },
      {
        "internalType": "uint32",
        "name": "referralCode",
        "type": "uint32"
      }
    ],
    "name": "transferValueAndprocessRoute",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  }
]
```
