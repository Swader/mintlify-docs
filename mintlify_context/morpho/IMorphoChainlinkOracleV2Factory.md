---
title: "IMorphoChainlinkOracleV2Factory"
description: "IMorphoChainlinkOracleV2Factory: Interface for the factory that creates Morpho Chainlink Oracle V2 instances"
---

### Overview

- **name**: IMorphoChainlinkOracleV2Factory
- **path**: `morpho/IMorphoChainlinkOracleV2Factory.sol`
- **context**: morpho
- **tags**: morpho, oracle, chainlink, factory, defi
- **title**: IMorphoChainlinkOracleV2Factory
- **notice**: Interface for the factory that creates Morpho Chainlink Oracle V2 instances

### Addresses

- **tatara**: [`0xe795DD345aD7E1bC9e8F6B4437a21704d731F9E0`](https://explorer.tatara.katana.network/address/0xe795DD345aD7E1bC9e8F6B4437a21704d731F9E0)

### Function signatures

```
createMorphoChainlinkOracleV2(address,uint256,address,address,uint256,address,uint256,address,address,uint256,bytes32)
isMorphoChainlinkOracleV2(address)
```

### ABI

```json
[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "caller",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "oracle",
        "type": "address"
      }
    ],
    "name": "CreateMorphoChainlinkOracleV2",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC4626",
        "name": "baseVault",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "baseVaultConversionSample",
        "type": "uint256"
      },
      {
        "internalType": "contract IAggregatorV3Interface",
        "name": "baseFeed1",
        "type": "address"
      },
      {
        "internalType": "contract IAggregatorV3Interface",
        "name": "baseFeed2",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "baseTokenDecimals",
        "type": "uint256"
      },
      {
        "internalType": "contract IERC4626",
        "name": "quoteVault",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "quoteVaultConversionSample",
        "type": "uint256"
      },
      {
        "internalType": "contract IAggregatorV3Interface",
        "name": "quoteFeed1",
        "type": "address"
      },
      {
        "internalType": "contract IAggregatorV3Interface",
        "name": "quoteFeed2",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "quoteTokenDecimals",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      }
    ],
    "name": "createMorphoChainlinkOracleV2",
    "outputs": [
      {
        "internalType": "contract IMorphoChainlinkOracleV2",
        "name": "oracle",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "target",
        "type": "address"
      }
    ],
    "name": "isMorphoChainlinkOracleV2",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
```
