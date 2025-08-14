---
title: "IUSDTNativeConverter"
description: "IUSDTNativeConverter: Interface for the USDT Native Converter (Converts between USDT and its bridged representation across networks)"
---

### Overview

- **name**: IUSDTNativeConverter
- **path**: `vb/converters/IUSDTNativeConverter.sol`
- **context**: vaultbridge
- **tags**: vaultbridge, converter, usdt, native
- **title**: IUSDTNativeConverter
- **notice**: Interface for the USDT Native Converter
- **dev**: Converts between USDT and its bridged representation across networks

### Addresses

- **tatara**: `0x8f3a47e64d3AD1fBdC5C23adD53183CcCD05D8a4`
- **katana**: `0x053FA9b934b83E1E0ffc7e98a41aAdc3640bB462`
- **bokuto**: `0x1bd455C30ad8E2b8dF40df44A2eF923d67B33Feb`

### Function signatures

```
DEFAULT_ADMIN_ROLE()
MIGRATOR_ROLE()
PAUSER_ROLE()
backingOnLayerY()
convert(uint256,address)
convertWithPermit(uint256,address,bytes)
customToken()
deconvert(uint256,address)
deconvertAndBridge(uint256,address,uint32,bool)
getRoleAdmin(bytes32)
grantRole(bytes32,address)
hasRole(bytes32,address)
initialize(address,uint8,address,address,address,uint32,uint256,address)
layerXLxlyId()
lxlyBridge()
lxlyId()
maxDeconvert(address)
migratableBacking()
migrateBackingToLayerX(uint256)
migrationManager()
nonMigratableBackingPercentage()
pause()
paused()
renounceRole(bytes32,address)
revokeRole(bytes32,address)
setNonMigratableBackingPercentage(uint256)
supportsInterface(bytes4)
underlyingToken()
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "availableAssets",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "requestedAssets",
        "type": "uint256"
      }
    ],
    "name": "AssetsTooLarge",
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
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumAmount",
        "type": "uint256"
      }
    ],
    "name": "InvalidAmountInERC20Permit",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidAssets",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidCustomToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidDestinationNetworkId",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidInitialization",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidLayerXLxlyId",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidLxLyBridge",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidMigrationManager",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidNonMigratableBackingPercentage",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "expectedOwner",
        "type": "address"
      }
    ],
    "name": "InvalidOwnerInERC20Permit",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidPermitData",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "selector",
        "type": "bytes4"
      }
    ],
    "name": "InvalidSelectorInERC20Permit",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidShares",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "expectedSpender",
        "type": "address"
      }
    ],
    "name": "InvalidSpenderInERC20Permit",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidUnderlyingToken",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "customTokenDecimals",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "originalUnderlyingTokenDecimals",
        "type": "uint8"
      }
    ],
    "name": "NonMatchingCustomTokenDecimals",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "underlyingTokenDecimals",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "originalUnderlyingTokenDecimals",
        "type": "uint8"
      }
    ],
    "name": "NonMatchingUnderlyingTokenDecimals",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotInitializing",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OnlyMigrator",
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
        "internalType": "uint256",
        "name": "mintedCustomToken",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "migratedBacking",
        "type": "uint256"
      }
    ],
    "name": "MigrationStarted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "nonMigratableBackingPercentage",
        "type": "uint256"
      }
    ],
    "name": "NonMigratableBackingPercentageSet",
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
    "name": "MIGRATOR_ROLE",
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
    "inputs": [],
    "name": "backingOnLayerY",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "assets",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "convert",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "assets",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "permitData",
        "type": "bytes"
      }
    ],
    "name": "convertWithPermit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "customToken",
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
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "deconvert",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "assets",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "destinationNetworkId",
        "type": "uint32"
      },
      {
        "internalType": "bool",
        "name": "forceUpdateGlobalExitRoot",
        "type": "bool"
      }
    ],
    "name": "deconvertAndBridge",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "assets",
        "type": "uint256"
      }
    ],
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
        "internalType": "uint8",
        "name": "originalUnderlyingTokenDecimals_",
        "type": "uint8"
      },
      {
        "internalType": "address",
        "name": "customToken_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "underlyingToken_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "lxlyBridge_",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "layerXLxlyId_",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "nonMigratableBackingPercentage_",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "migrationManager_",
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
    "name": "layerXLxlyId",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
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
    "inputs": [],
    "name": "lxlyId",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "maxDeconvert",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "maxShares",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "migratableBacking",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "assets",
        "type": "uint256"
      }
    ],
    "name": "migrateBackingToLayerX",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "migrationManager",
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
    "inputs": [],
    "name": "nonMigratableBackingPercentage",
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
        "internalType": "uint256",
        "name": "nonMigratableBackingPercentage_",
        "type": "uint256"
      }
    ],
    "name": "setNonMigratableBackingPercentage",
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
    "name": "underlyingToken",
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
  }
]
```
