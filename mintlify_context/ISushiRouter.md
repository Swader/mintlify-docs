---
title: "ISushiRouter"
description: "ISushiRouter: Interface for SushiSwap's router contract (Provides functions for swapping tokens through SushiSwap's liquidity pools The address 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE is used to represent the native token (ETH))"
---

### Overview

- **name**: ISushiRouter
- **path**: `ISushiRouter.sol`
- **context**: defi
- **tags**: sushi, defi, amm, router, swap
- **title**: ISushiRouter
- **notice**: Interface for SushiSwap's router contract
- **dev**: Provides functions for swapping tokens through SushiSwap's liquidity pools The address 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE is used to represent the native token (ETH)

### Addresses

- **tatara**: `0xAC4c6e212A361c968F1725b4d055b47E63F80b75`
- **katana**: `null`
- **bokuto**: `null`

### Function signatures

```
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
    "inputs": [
      {
        "internalType": "contract IERC20",
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
        "internalType": "contract IERC20",
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
            "internalType": "contract IERC20",
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
        "internalType": "struct ISushiRouter.InputToken[]",
        "name": "inputTokens",
        "type": "tuple[]"
      },
      {
        "components": [
          {
            "internalType": "contract IERC20",
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
        "internalType": "struct ISushiRouter.OutputToken[]",
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
        "internalType": "struct ISushiRouter.Executor[]",
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
