const { network, getNamedAccounts, deployments, ethers } = require("hardhat")
const {
  developmentChains,
  INITIAL_SUPPLY,
} = require("../../helper-hardhat-config")
const { assert } = require("chai")

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("OurToken", () => {
      let ourToken, deployer, user1
      beforeEach(async function () {
        const accounts = await getNamedAccounts()
        deployer = accounts.deployer
        user1 = accounts.user1

        await deployments.fixture("all")
        ourToken = await ethers.getContract("OurToken", deployer)
      })
      it("was deployed", async () => {
        assert(ourToken.address)
      })
    })
