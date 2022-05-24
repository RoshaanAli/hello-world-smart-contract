const { ethers } = require("hardhat");
async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  const hw = await HelloWorld.deploy("Hello World! Bingo");

  console.log("Contract Deployed to:", hw.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//Contract address : 0x6348187Bbd5A15d5ae0Ed9BE1f2D1d46173069E2