const express = require('express');
const router = express.Router();
const{signup_get,signup_post} = require('../controllers/signUpC');

router.route('/').get(signup_get);
router.route('/').post(signup_post);
module.exports = router;