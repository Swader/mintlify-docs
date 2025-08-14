---
title: "IMigrationManager"
description: "IMigrationManager: Interface for the Migration Manager contract. This is deployed on the
   origin chain - for \"Katana\" this means Ethereum, for \"Bokuto\" this means
   Sepolia. The address for each context is different, and indicated in custom
   tags. Tatara does not have a MigrationManager."
---

### Overview

- **name**: IMigrationManager
- **path**: `vb/IMigrationManager.sol`
- **context**: vaultbridge
- **tags**: vaultbridge, migration, manager, bridge
- **title**: IMigrationManager
- **notice**: Interface for the Migration Manager contract. This is deployed on the
   origin chain - for "Katana" this means Ethereum, for "Bokuto" this means
   Sepolia. The address for each context is different, and indicated in custom
   tags. Tatara does not have a MigrationManager.

### Origin addresses

- **katana**: ethereum (katana) – [`0x417d01B64Ea30C4E163873f3a1f77b727c689e02`](https://etherscan.io/address/0x417d01B64Ea30C4E163873f3a1f77b727c689e02)
- **bokuto**: sepolia (bokuto) – [`0x16B46094cb1eE593181Ba2d997E77E88D7E9Ab8F`](https://sepolia.etherscan.io/address/0x16B46094cb1eE593181Ba2d997E77E88D7E9Ab8F)

### Function signatures

```
DEFAULT_ADMIN_ROLE()
PAUSER_ROLE()
configureNativeConverters(uint32[],address[],address)
getRoleAdmin(bytes32)
grantRole(bytes32,address)
hasRole(bytes32,address)
initialize(address,address)
lxlyBridge()
nativeConvertersConfiguration(uint32,address)
onMessageReceived(address,uint32,bytes)
pause()
paused()
renounceRole(bytes32,address)
revokeRole(bytes32,address)
supportsInterface(bytes4)
unpause()
version()
```

### ABI

```json
[
  {
    "inputs": [],
    "name": "AccessControlBadConfirmation",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "neededRole",
        "type": "bytes32"
      }
    ],
    "name": "AccessControlUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CannotWrapGasToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "EnforcedPause",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ExpectedPause",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newBalance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "expectedBalance",
        "type": "uint256"
      }
    ],
    "name": "InsufficientUnderlyingTokenBalanceAfterWrapping",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidInitialization",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidLayerYLxLyId",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidLxLyBridge",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidNativeConverter",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidOwner",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidUnderlyingToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidVbToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NonMatchingInputLengths",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotInitializing",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReentrancyGuardReentrantCall",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "SafeERC20FailedOperation",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "Unauthorized",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "version",
        "type": "uint64"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "layerYLxlyId",
        "type": "uint32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "nativeConverter",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "vbToken",
        "type": "address"
      }
    ],
    "name": "NativeConverterConfigured",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PAUSER_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32[]",
        "name": "layerYLxlyIds",
        "type": "uint32[]"
      },
      {
        "internalType": "address[]",
        "name": "nativeConverters",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "vbToken",
        "type": "address"
      }
    ],
    "name": "configureNativeConverters",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "lxlyBridge_",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lxlyBridge",
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
        "internalType": "uint32",
        "name": "layerYLxlyId",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "nativeConverter",
        "type": "address"
      }
    ],
    "name": "nativeConvertersConfiguration",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "vbToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "underlyingToken",
            "type": "address"
          }
        ],
        "internalType": "struct MigrationManager.TokenPair",
        "name": "tokenPair",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "originAddress",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "originNetwork",
        "type": "uint32"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "onMessageReceived",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "callerConfirmation",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "version",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]
```
