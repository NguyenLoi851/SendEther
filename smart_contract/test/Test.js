const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions contract", function () {
  let Transactions;
  let transactions;
  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    Transactions = await ethers.getContractFactory("Transactions");
    transactions = await Transactions.deploy();
    await transactions.deployed();
  });
  describe("Transactions", function () {
    it("Should return 0 transaction when initial", async function () {
      expect(await transactions.getTransactionCount()).to.equal(0);
    });
    it("Should return 1 transactions when do a transaction", async function () {
      const newTrx = await transactions
        .connect(owner)
        .addToBlockchain(addr1.address, 50, "Hello", "Test");

      await newTrx.wait();
      expect(await transactions.getTransactionCount()).to.equal(1);
    });
  });
});
