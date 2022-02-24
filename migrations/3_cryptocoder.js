var CryptoCoder = artifacts.require("./CryptoCoders.sol");

module.exports = function (deployer) {
  deployer.deploy(CryptoCoder);
};
