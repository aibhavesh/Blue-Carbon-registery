const { ethers } = require("hardhat");

async function main() {
  const BCC = await ethers.getContractFactory("BlueCarbonCredit");
  const bcc = await BCC.deploy();
  await bcc.waitForDeployment();
  console.log("BlueCarbonCredit deployed at:", await bcc.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
