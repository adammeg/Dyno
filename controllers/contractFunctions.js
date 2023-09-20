/* const { Web3 } = require('web3');
const ABI = require("../contract/ABI.json");

// Replace "http://192.168.1.56:8545" with the actual URL of your Ethereum node.
const web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.1.56:8545"));

const contractAddress = "0x51Fe1C18d22027227418083179a12a8f84fD0F88"; // Replace with your contract address
const contract = new web3.eth.Contract(ABI, contractAddress);

exports.contractCall = async (req, res) => {
    const currentBlockNumber = await web3.eth.getBlockNumber();
    console.log('Current block number:', currentBlockNumber);
    try {
        const functionAbi = contract._jsonInterface.find((e) => {
            return e.name === "decimals";
            })  
            const functionParams = {
                to: address,
                data: functionAbi.signature,
                privateKey: fromPrivateKey,
                privateFrom: fromPublicKey,
                privateFor: [toPublicKey],
              };

        const decimal = await contract.methods.owner().call({ from: "0xa7eBAB361F4F40b27056245A0054Aea32F79b54a" });
        console.log(`Decimals: ${decimal}`);
        res.status(200).json({ res });  
    } catch (error) {
        console.error('Error calling getDecimals:', error);
        res.status(500).json({ error: 'An error occurred while calling getDecimals' });
    }
};
 */

const Web3Quorum = require("web3js-quorum");
const ABI = require("../contract/ABI.json")
const Web3 = require('web3');

// Replace with the URL of your Besu node's RPC endpoint (HTTP or WebSocket)
const besuRpcUrl = 'http://192.168.1.56:8545'; // Replace with your Besu RPC URL

// Create a Web3 instance
const web3 = new Web3(besuRpcUrl);
const contractAddress = "0x51Fe1C18d22027227418083179a12a8f84fD0F88"
// Create a contract instance
const contract = new web3.eth.Contract(contractAbi, contractAddress);

// Replace with your account's private key and address
const fromPrivateKey = '0xYourPrivateKey'; // Replace with your private key
const fromAddress = '0xYourAddress'; // Replace with your Ethereum address

// Function to interact with the smart contract
// ../controllers/contractFunctions.js

exports.contractCall = async (req, res) => {
    try {
        async function getValueAtAddress(nodeName="node", address, contractAbi, fromPrivateKey, fromPublicKey, toPublicKey) {
            const web3 = new Web3('http://192.168.1.56:8545')
            const web3quorum = new Web3Quorum(web3, 1399);
            const contractAbi = ABI
            const contract = new web3quorum.eth.Contract(contractAbi);
            // eslint-disable-next-line no-underscore-dangle
            const functionAbi = contract._jsonInterface.find(e => {
              return e.name === "get";
            });
            const functionParams = {
              to: "0x7F36C78727aB7DeF49D3e1B209d5de93db42c5A6",
              data: functionAbi.signature,
              privateKey: fromPrivateKey,
              privateFrom: fromPublicKey,
              privateFor: [toPublicKey]
            };
            const transactionHash = await web3quorum.priv.generateAndSendRawTransaction(functionParams);
            // console.log(`Transaction hash: ${transactionHash}`);
            const result = await web3quorum.priv.waitForTransactionReceipt(transactionHash);
            console.log("" + nodeName + " value from deployed contract is: " + result.output);
            return result;
          };

    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "An error occurred" });
    }
};

