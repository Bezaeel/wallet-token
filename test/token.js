const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

describe("token", function () {
  it("Should return correct total supply of token", async function () {
    const TalabiToken = await ethers.getContractFactory("TalabiToken");
    const token = await TalabiToken.deploy();
    await token.deployed();

    expect(await token.symbol()).to.equal("TAL");

    expect(await token.totalSupply()).to.equal(
      BigNumber.from("31000000000000000000000000")
    );
  });

  it.only("Should return send token correctly", async function() {
    const [addr1, addr2] = await ethers.getSigners();

    const TalabiToken = await ethers.getContractFactory("TalabiToken");
    const token = await TalabiToken.deploy();
    await token.deployed();

    const balanceBefore = await token.balanceOf(addr1.address);
    console.log(BigNumber.from(balanceBefore.toString()));

    const balanceBefore2 = await token.balanceOf(addr2.address);
    console.log(BigNumber.from(balanceBefore2.toString()));

    await token.transfer(addr2.address, 30000);

    const balanceBefore3 = await token.balanceOf(addr2.address);
    console.log(BigNumber.from(balanceBefore3.toString()));

    const balanceBefore4 = await token.balanceOf(addr1.address);
    console.log(BigNumber.from(balanceBefore4.toString()));

    expect(await token.balanceOf(addr2.address)).to.equal(30000);
  });
});
