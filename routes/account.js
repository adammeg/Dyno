const express = require('express');
const router = express.Router();
const { accountCreation } = require("../controllers/web3.js");
const { contractCall } = require("../controllers/contractFunctions.js");

// Define the routes
router.route('/').get(accountCreation);
router.route('/decimal').get(contractCall);

module.exports = router;
