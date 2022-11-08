const main = async () => {
  const transactionFactory = await hre.ethers.getContractFactory('Transactions')
  const transactionContract = await transactionFactory.deploy()

  await transactionContract.deployed()

  console.log('Transactions deployed to:', transactionContract.address)

}

;(async () => {
  try {
    await main()
    ProcessingInstruction.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()