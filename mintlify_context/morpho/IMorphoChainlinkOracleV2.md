---
title: "IMorphoChainlinkOracleV2"
description: "IMorphoChainlinkOracleV2: Interface for Morpho's Chainlink Oracle V2, which combines ERC4626 vault assets with Chainlink price feeds"
---

### Overview

- **name**: IMorphoChainlinkOracleV2
- **path**: `morpho/IMorphoChainlinkOracleV2.sol`
- **context**: morpho
- **tags**: morpho, oracle, chainlink, defi
- **title**: IMorphoChainlinkOracleV2
- **notice**: Interface for Morpho's Chainlink Oracle V2, which combines ERC4626 vault assets with Chainlink price feeds

### Function signatures

```
BASE_FEED_1()
BASE_FEED_2()
BASE_VAULT()
BASE_VAULT_CONVERSION_SAMPLE()
QUOTE_FEED_1()
QUOTE_FEED_2()
QUOTE_VAULT()
QUOTE_VAULT_CONVERSION_SAMPLE()
SCALE_FACTOR()
price()
```

### ABI

```json
[
  {
    "inputs": [],
    "name": "BASE_FEED_1",
    "outputs": [
      {
        "internalType": "contract IAggregatorV3Interface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "BASE_FEED_2",
    "outputs": [
      {
        "internalType": "contract IAggregatorV3Interface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "BASE_VAULT",
    "outputs": [
      {
        "internalType": "contract IERC4626",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "BASE_VAULT_CONVERSION_SAMPLE",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "QUOTE_FEED_1",
    "outputs": [
      {
        "internalType": "contract IAggregatorV3Interface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "QUOTE_FEED_2",
    "outputs": [
      {
        "internalType": "contract IAggregatorV3Interface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "QUOTE_VAULT",
    "outputs": [
      {
        "internalType": "contract IERC4626",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "QUOTE_VAULT_CONVERSION_SAMPLE",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "SCALE_FACTOR",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "price",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
```
