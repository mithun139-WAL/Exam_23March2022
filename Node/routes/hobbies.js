const express = require('express');
const router = express.Router();
var hobbyController = require('../controllers/hobbies');
router.get('/', hobbyController.getHobbies);
router.post('/', hobbyController.createHobby);
router.delete('/:_id', hobbyController.deleteHobby);

module.exports = router;
