const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Family", function () {
  it.only("Should create family correctly", async function () {
    const [owner] = await ethers.getSigners();
    const TalabiToken = await ethers.getContractFactory("TalabiToken");
    const token = await TalabiToken.deploy();
    await token.deployed();

    const FamilyStore = await ethers.getContractFactory("FamilyStore");
    const familyStore = await FamilyStore.deploy();
    await familyStore.deployed();

    const FamilyController = await ethers.getContractFactory(
      "FamilyController"
    );
    const familyController = await FamilyController.deploy(familyStore.address);
    await familyController.deployed();

    await familyController.createFamily(
      "https://talabi.co",
      "TalabiOpe",
      token.address,
      owner.address
    );

    const expected = await familyController.getFamilyById(0);
    expect(expected).to.equal("TalabiOpe");
  });
});
