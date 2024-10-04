const hre = require("hardhat");


async function main() {
  const chai = await hre.ethers.getContractFactory("chai");
  const contract = await chai.deploy(); //instance of contract

  // await contract.deployed();
  // await contract.waitForDeployment();
  console.log("Address of contract:", contract.target);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});