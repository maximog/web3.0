// https://eth-ropsten.alchemyapi.io/v2/kG5hFxdH5vWxhZP04cE-5tFJQRCpZG16

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/kG5hFxdH5vWxhZP04cE-5tFJQRCpZG16",
      accounts: [
        "663f87ed12e41024369308afc647c96aee4d718e868d0b0e21c9923e0f5e103b",
      ],
    },
  },
};
