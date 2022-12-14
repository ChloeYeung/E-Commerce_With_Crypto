const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, evm } = require("./compile");
const provider = new HDWalletProvider(
  //replace with your Mnemonic (12-words phrase)
  "magic guitar reject tiger fish museum plus fatigue radio fever wool nut",
  // replace with your blockchain APIs (can generate from infura)
  "https://goerli.infura.io/v3/6ba05ddd9f2449d526e8708b04ed"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ gas: "1000000", from: accounts[0] });

  console.log(JSON.stringify(abi));
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();

//current deploy address: 0xD9279a79a78e491D17A574001be204A90062e771
