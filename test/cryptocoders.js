const CryptoCoders = artifacts.require("./CryptoCoders.sol");

contract("CryptoCoders", (accounts) => {
  let contract;
  before(async () => {
    contract = await CryptoCoders.deployed();
  });

  it("...get deployed", async () => {
    assert.notEqual(contract, "");

    // // Set value of 89
    // await contract.set(89, { from: accounts[0] });

    // // Get stored value
    // const storedData = await contract.get.call();

    // assert.equal(storedData, 89, "The value 89 was not stored.");

    // console.log(contract);
  });

  it("...get's minted and added", async () => {
    const result = await contract.mint("Alex");
    let coder = await contract.coders(0);

    assert(coder, "Alex");
  });
});
