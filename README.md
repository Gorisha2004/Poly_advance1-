# My NFT collection project
This project is part of the Polygon-Advanced module, where I was tasked with deploying an NFT collection on the Ethereum blockchain, mapping it to Polygon, and transferring assets using the Polygon Bridge.
## Getting Started
### 1. Clone the repository
First, clone this repository to your local machine to access all the project files:
```
git clone https://github.com/Gorisha2004/Poly_advance1-.git
```
### 2. Install Dependencies
Navigate to the project directory and install all necessary dependencies by running:
```
npm install
```
### 3. Run Tests
After installing the dependencies, you can run the test suite using Hardhat:
```
npx hardhat test
```
## Deploying the ERC721 Contract
Before deploying the ERC721 contract to the Goerli Ethereum Testnet, make sure to:<br />
1. Rename `.env. example` to `.env`<br />
2. Add your wallet’s private key to the `.env` file<br />
```
PRIVATE_KEY='your-wallet-private-key'
```
To deploy the contract, run:
```
npx hardhat run scripts/deploy.js --network goerli

```
Note: After deployment, a contract address will be generated. Copy this address into:

* `contractAddress.js` (found in the `metadata` folder)
* `batchMint.js` (found in the `scripts` folder)
## Batch Mint NFTs
Once the contract is deployed, you can batch mint NFTs by running the following command:
```
npx hardhat run scripts/batchMint.js --network goerli
```
This will mint the specified number of NFTs and assign them to your address.
## Approve and Deposit NFTs to Polygon
To move the minted NFTs from Ethereum to the Polygon Mumbai Testnet, use the FxPortal Bridge. Run the following command to approve and deposit the NFTs:
```
npx hardhat run scripts/approveDeposit.js --network goerli
```
## License
This project is licensed under the MIT License. You are free to use and modify the project for your own purposes.



































