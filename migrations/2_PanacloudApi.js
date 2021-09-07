var PanacloudApi = artifacts.require("PanacloudApi");

module.exports = function(deployer) {
  deployer.deploy(PanacloudApi);
};