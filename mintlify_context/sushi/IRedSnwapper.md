---
title: "IRedSnwapper"
description: "IRedSnwapper: Interface for Sushi'sRedSnwapper (RedSnwapper is a facade for the execution router contracts (RouteProcessor), and handles single & multi token swaps.)"
---

### Overview

- **name**: IRedSnwapper
- **path**: `sushi/IRedSnwapper.sol`
- **context**: defi
- **tags**: sushi, swap, dex, defi
- **title**: IRedSnwapper
- **notice**: Interface for Sushi'sRedSnwapper
- **dev**: RedSnwapper is a facade for the execution router contracts (RouteProcessor), and handles single & multi token swaps.

### Addresses

- **tatara**: [`0xAC4c6e212A361c968F1725b4d055b47E63F80b75`](https://explorer.tatara.katana.network/address/0xAC4c6e212A361c968F1725b4d055b47E63F80b75)
- **katana**: [`0xAC4c6e212A361c968F1725b4d055b47E63F80b75`](https://katanascan.com/address/0xAC4c6e212A361c968F1725b4d055b47E63F80b75)

### Function signatures

```
safeExecutor()
snwap(address,uint256,address,address,uint256,address,bytes)
snwapMultiple(tuple[],tuple[],tuple[])
```

### ABI

```json
[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
      }
    ],
    "name": "MinimalOutputBalanceViolation",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "safeExecutor",
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
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
      },
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
    "name": "snwap",
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
        "components": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "transferTo",
            "type": "address"
          }
        ],
        "internalType": "struct InputToken[]",
        "name": "inputTokens",
        "type": "tuple[]"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
          }
        ],
        "internalType": "struct OutputToken[]",
        "name": "outputTokens",
        "type": "tuple[]"
      },
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
        "internalType": "struct Executor[]",
        "name": "executors",
        "type": "tuple[]"
      }
    ],
    "name": "snwapMultiple",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "amountOut",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  }
]
```
