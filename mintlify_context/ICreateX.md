---
title: "ICreateX"
description: "CreateX Factory Interface Definition: Advanced contract deployment factory supporting CREATE, CREATE2, and CREATE3 deployment patterns (Deployed at the same address across all EVM chains: 0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)"
---

### Overview

- **name**: ICreateX
- **path**: `ICreateX.sol`
- **context**: utility
- **tags**: deployment, factory, create2, create3, utility
- **title**: CreateX Factory Interface Definition
- **notice**: Advanced contract deployment factory supporting CREATE, CREATE2, and CREATE3 deployment patterns
- **dev**: Deployed at the same address across all EVM chains: 0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed

### Addresses

- **tatara**: `0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed`
- **katana**: `null`
- **bokuto**: `null`

### Function signatures

```
computeCreate2Address(bytes32,bytes32)
computeCreate2Address(bytes32,bytes32,address)
computeCreate3Address(bytes32,address)
computeCreate3Address(bytes32)
computeCreateAddress(uint256)
computeCreateAddress(address,uint256)
deployCreate(bytes)
deployCreate2(bytes32,bytes)
deployCreate2(bytes)
deployCreate2AndInit(bytes32,bytes,bytes,tuple,address)
deployCreate2AndInit(bytes,bytes,tuple)
deployCreate2AndInit(bytes,bytes,tuple,address)
deployCreate2AndInit(bytes32,bytes,bytes,tuple)
deployCreate2Clone(bytes32,address,bytes)
deployCreate2Clone(address,bytes)
deployCreate3(bytes)
deployCreate3(bytes32,bytes)
deployCreate3AndInit(bytes32,bytes,bytes,tuple)
deployCreate3AndInit(bytes,bytes,tuple)
deployCreate3AndInit(bytes32,bytes,bytes,tuple,address)
deployCreate3AndInit(bytes,bytes,tuple,address)
deployCreateAndInit(bytes,bytes,tuple)
deployCreateAndInit(bytes,bytes,tuple,address)
deployCreateClone(address,bytes)
```

### ABI

```json
[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "emitter",
        "type": "address"
      }
    ],
    "name": "FailedContractCreation",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "emitter",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "revertData",
        "type": "bytes"
      }
    ],
    "name": "FailedContractInitialisation",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "emitter",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "revertData",
        "type": "bytes"
      }
    ],
    "name": "FailedEtherTransfer",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "emitter",
        "type": "address"
      }
    ],
    "name": "InvalidNonceValue",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "emitter",
        "type": "address"
      }
    ],
    "name": "InvalidSalt",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      }
    ],
    "name": "ContractCreation",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "name": "ContractCreation",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      }
    ],
    "name": "Create3ProxyContractCreation",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "initCodeHash",
        "type": "bytes32"
      }
    ],
    "name": "computeCreate2Address",
    "outputs": [
      {
        "internalType": "address",
        "name": "computedAddress",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "initCodeHash",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "deployer",
        "type": "address"
      }
    ],
    "name": "computeCreate2Address",
    "outputs": [
      {
        "internalType": "address",
        "name": "computedAddress",
        "type": "address"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "deployer",
        "type": "address"
      }
    ],
    "name": "computeCreate3Address",
    "outputs": [
      {
        "internalType": "address",
        "name": "computedAddress",
        "type": "address"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      }
    ],
    "name": "computeCreate3Address",
    "outputs": [
      {
        "internalType": "address",
        "name": "computedAddress",
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
        "name": "nonce",
        "type": "uint256"
      }
    ],
    "name": "computeCreateAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "computedAddress",
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
        "name": "deployer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
      }
    ],
    "name": "computeCreateAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "computedAddress",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      }
    ],
    "name": "deployCreate",
    "outputs": [
      {
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      }
    ],
    "name": "deployCreate2",
    "outputs": [
      {
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      }
    ],
    "name": "deployCreate2",
    "outputs": [
      {
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "constructorAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "initCallAmount",
            "type": "uint256"
          }
        ],
        "internalType": "struct ICreateX.Values",
        "name": "values",
        "type": "tuple"
      },
      {
        "internalType": "address",
        "name": "refundAddress",
        "type": "address"
      }
    ],
    "name": "deployCreate2AndInit",
    "outputs": [
      {
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "constructorAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "initCallAmount",
            "type": "uint256"
          }
        ],
        "internalType": "struct ICreateX.Values",
        "name": "values",
        "type": "tuple"
      }
    ],
    "name": "deployCreate2AndInit",
    "outputs": [
      {
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "constructorAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "initCallAmount",
            "type": "uint256"
          }
        ],
        "internalType": "struct ICreateX.Values",
        "name": "values",
        "type": "tuple"
      },
      {
        "internalType": "address",
        "name": "refundAddress",
        "type": "address"
      }
    ],
    "name": "deployCreate2AndInit",
    "outputs": [
      {
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "constructorAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "initCallAmount",
            "type": "uint256"
          }
        ],
        "internalType": "struct ICreateX.Values",
        "name": "values",
        "type": "tuple"
      }
    ],
    "name": "deployCreate2AndInit",
    "outputs": [
      {
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "deployCreate2Clone",
    "outputs": [
      {
        "internalType": "address",
        "name": "proxy",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "deployCreate2Clone",
    "outputs": [
      {
        "internalType": "address",
        "name": "proxy",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      }
    ],
    "name": "deployCreate3",
    "outputs": [
      {
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      }
    ],
    "name": "deployCreate3",
    "outputs": [
      {
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "constructorAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "initCallAmount",
            "type": "uint256"
          }
        ],
        "internalType": "struct ICreateX.Values",
        "name": "values",
        "type": "tuple"
      }
    ],
    "name": "deployCreate3AndInit",
    "outputs": [
      {
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "constructorAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "initCallAmount",
            "type": "uint256"
          }
        ],
        "internalType": "struct ICreateX.Values",
        "name": "values",
        "type": "tuple"
      }
    ],
    "name": "deployCreate3AndInit",
    "outputs": [
      {
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "constructorAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "initCallAmount",
            "type": "uint256"
          }
        ],
        "internalType": "struct ICreateX.Values",
        "name": "values",
        "type": "tuple"
      },
      {
        "internalType": "address",
        "name": "refundAddress",
        "type": "address"
      }
    ],
    "name": "deployCreate3AndInit",
    "outputs": [
      {
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "constructorAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "initCallAmount",
            "type": "uint256"
          }
        ],
        "internalType": "struct ICreateX.Values",
        "name": "values",
        "type": "tuple"
      },
      {
        "internalType": "address",
        "name": "refundAddress",
        "type": "address"
      }
    ],
    "name": "deployCreate3AndInit",
    "outputs": [
      {
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "constructorAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "initCallAmount",
            "type": "uint256"
          }
        ],
        "internalType": "struct ICreateX.Values",
        "name": "values",
        "type": "tuple"
      }
    ],
    "name": "deployCreateAndInit",
    "outputs": [
      {
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "initCode",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "constructorAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "initCallAmount",
            "type": "uint256"
          }
        ],
        "internalType": "struct ICreateX.Values",
        "name": "values",
        "type": "tuple"
      },
      {
        "internalType": "address",
        "name": "refundAddress",
        "type": "address"
      }
    ],
    "name": "deployCreateAndInit",
    "outputs": [
      {
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "deployCreateClone",
    "outputs": [
      {
        "internalType": "address",
        "name": "proxy",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  }
]
```
