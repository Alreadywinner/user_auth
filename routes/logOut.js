const express = require('express');
const router = express.Router();
const{logout_get} = require('../controllers/logOutC');

router.route('/').get(logout_get);

module.exports = router;