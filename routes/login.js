const express = require('express');
const router = express.Router();
const {login_post} = require('../controllers/loginC');


router.route('/').post(login_post);

module.exports = router;