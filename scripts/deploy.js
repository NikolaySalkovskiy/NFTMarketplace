const { ethers } = require("hardhat");

async function main() {
  const Collection = await ethers.getContractFactory("Collection");

  const contract = await Collection.deploy();

  await contract.deployed();

  console.log("Contract deployed to address:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
