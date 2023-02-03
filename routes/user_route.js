const express = require('express')
const router = express.Router()
const validator_user = require('../validator/user_validator')
const controller_user = require('../controller/user_controller')


router.get('/create_user',validator_user,controller_user.create_user);

router.get('/view_user',validator_user,controller_user.view_user);





module.exports = router