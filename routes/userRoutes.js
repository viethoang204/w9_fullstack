const express = require('express');
const { welcomeUser } = require('../controller/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/:id', authMiddleware, welcomeUser);

module.exports = router;
