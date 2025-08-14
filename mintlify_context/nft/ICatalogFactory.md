---
title: "ICatalogFactory"
description: "ICatalogFactory: Factory to create Catalog instances, necessary to configure composability and equippability of NFTs (ERC6220) (Interface for deploying and managing RMRK catalog contracts)"
---

### Overview

- **name**: ICatalogFactory
- **path**: `nft/ICatalogFactory.sol`
- **context**: nft
- **tags**: nft, erc721, rmrk, catalog, factory
- **title**: ICatalogFactory
- **notice**: Factory to create Catalog instances, necessary to configure composability and equippability of NFTs (ERC6220)
- **dev**: Interface for deploying and managing RMRK catalog contracts

### Addresses

- **katana**: [`0xC0137140B2D2a146d20dBbb0153e5Ac1048f30E3`](https://katanascan.com/address/0xC0137140B2D2a146d20dBbb0153e5Ac1048f30E3)
- **bokuto**: [`0xC0137140B2D2a146d20dBbb0153e5Ac1048f30E3`](https://explorer-bokuto.katanarpc.com/address/0xC0137140B2D2a146d20dBbb0153e5Ac1048f30E3)

### Function signatures

```
deployCatalog(string,string)
getDeployerCatalogAtIndex(address,uint256)
getDeployerCatalogs(address)
getLastDeployerCatalog(address)
getTotalDeployerCatalogs(address)
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
        "name": "deployer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "catalog",
        "type": "address"
      }
    ],
    "name": "CatalogDeployed",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "metadataURI",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "type_",
        "type": "string"
      }
    ],
    "name": "deployCatalog",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
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
        "name": "deployer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getDeployerCatalogAtIndex",
    "outputs": [
      {
        "internalType": "address",
        "name": "catalogAddress",
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
      }
    ],
    "name": "getDeployerCatalogs",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
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
      }
    ],
    "name": "getLastDeployerCatalog",
    "outputs": [
      {
        "internalType": "address",
        "name": "catalogAddress",
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
      }
    ],
    "name": "getTotalDeployerCatalogs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "total",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
```
