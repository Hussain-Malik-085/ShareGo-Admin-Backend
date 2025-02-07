const express = require('express');
const router = express.Router();
const rejectDriverController = require('../Controller/RejectControl'); // New controller for rejection

// Reject driver for verification
router.put('/rejectVerification/:id', rejectDriverController.rejectDriverVerification);

module.exports = router;
