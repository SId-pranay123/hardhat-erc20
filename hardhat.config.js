require("hardhat-deploy")
require("@nomiclabs/hardhat-waffle")
require("@nomicfoundation/hardhat-verify")
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */

const ETHERSCAN_API_KEY =
  process.env.ETHERSCAN_API_KEY || "Your etherscan API key"
const PRIVATE_KEY = process.env.PRIVATE_KEY
const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL ||
  "https://eth-sepolia.g.alchemy.com/v2/YOUR-API-KEY"

module.exports = {
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      //accounts: {
      //     mnemonic: MNEMONIC,
      // },
      saveDeployments: true,
      chainId: 11155111,
      blockConfirmation: 6,
    },
  },
  solidity: {
    compilers: [{ version: "0.8.20" }, { version: "0.8.7" }],
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
  etherscan: {
    // npx hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    },
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true,
  },
}
