const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/create-test-user', userController.createTestUser);
router.post('/generate-token', userController.generateToken);

module.exports = router;
