/* const {Web3} = require('web3');

// Replace "http://192.168.1.56:8545" with the actual URL of your Ethereum node.
const web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.1.56:8545"));

exports.accountCreation = async (req, res) => {
    try {
      const account = await web3.eth.accounts.create();
      res.status(200).json({ account });
    } catch (error) {
      console.error('Error creating Ethereum account:', error);
      res.status(500).json({ error: 'An error occurred while creating the Ethereum account' });
    }
  };
  
 */