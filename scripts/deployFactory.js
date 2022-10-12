const { ethers } = require("hardhat");

const main = async () => {
  const Factory = await ethers.getContractFactory("DeterministicDeployFactory");
  const factory = await Factory.deploy();
  await factory.deployed();
  const factoryAddress = factory.address
  console.log("Factory deployed to:", factoryAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});