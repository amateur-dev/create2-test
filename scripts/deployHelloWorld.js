const { ethers } = require("hardhat");

const main = async () => {
  const Factory = await ethers.getContractFactory("DeterministicDeployFactory");
  const factory = await Factory.attach("0x40c6B76309a23fD3A9eE1E61469d45b3961e4Bf0");
  const HW = await ethers.getContractFactory("HelloWorld");
  const byteCode = HW.bytecode;

  const create2Tx = await factory.deployUsingCreate2(byteCode,"buildbear");
  factory.once("Deploy", (address) => {
    console.log(address);
  })

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});