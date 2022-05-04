// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });

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
