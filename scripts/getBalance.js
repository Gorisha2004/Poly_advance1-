const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/music.sol/music.json");

const tokenAddress = "0x41c0332B5950875cf7601874A1DEb3a205B9Bed6"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x616333c9C09612bF40b044808805C7E6314C55b6"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
