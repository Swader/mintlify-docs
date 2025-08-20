---
title: "ISushiTickLens"
description: "ISushiTickLens: Interface for Sushi's Tick Lens which provides functions for fetching chunks of tick data for a pool (This avoids the waterfall of fetching the tick bitmap, parsing the bitmap to know which ticks to fetch, and then sending additional multicalls to fetch the tick data)"
---

### Overview

- **name**: ISushiTickLens
- **path**: `sushi/ISushiTickLens.sol`
- **context**: defi
- **tags**: sushi, swap, dex, defi, v3
- **title**: ISushiTickLens
- **notice**: Interface for Sushi's Tick Lens which provides functions for fetching chunks of tick data for a pool
- **dev**: This avoids the waterfall of fetching the tick bitmap, parsing the bitmap to know which ticks to fetch, and then sending additional multicalls to fetch the tick data

### Addresses

- **tatara**: [`0xb46e319390de313b8cc95ea5aa30c7bbfd79da94`](https://explorer.tatara.katana.network/address/0xb46e319390de313b8cc95ea5aa30c7bbfd79da94)
- **katana**: [`0x35dc3e13469e980c37b6f288bbb9822b1f9bd435`](https://katanascan.com/address/0x35dc3e13469e980c37b6f288bbb9822b1f9bd435)

### Function signatures

```
getPopulatedTicksInWord(address,int16)
```

### ABI

```json
[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "pool",
        "type": "address"
      },
      {
        "internalType": "int16",
        "name": "tickBitmapIndex",
        "type": "int16"
      }
    ],
    "name": "getPopulatedTicksInWord",
    "outputs": [
      {
        "components": [
          {
            "internalType": "int24",
            "name": "tick",
            "type": "int24"
          },
          {
            "internalType": "int128",
            "name": "liquidityNet",
            "type": "int128"
          },
          {
            "internalType": "uint128",
            "name": "liquidityGross",
            "type": "uint128"
          }
        ],
        "internalType": "struct ITickLens.PopulatedTick[]",
        "name": "populatedTicks",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
```
