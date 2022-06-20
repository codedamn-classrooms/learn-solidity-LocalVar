const LocalVar = artifacts.require("LocalVar");

module.exports = function (deployer) {
  deployer.deploy(LocalVar);
};
