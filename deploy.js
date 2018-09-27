const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {
    interface,
    bytecode
} = require('./compile');

const provider = new HDWalletProvider(
    'reveal envelope fame require risk pond erase nice neither city blind increase',
    'https://rinkeby.infura.io/v3/07fc0e55b4cc429fb9f6f2dc9cbee956'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log(`Attempting to deploy from account' ${accounts[0]}`);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode
        })
        .send({
            gas: '1000000',
            from: accounts[0]
        });

    console.log('Contract deployed to', result.options.address);

};

deploy();