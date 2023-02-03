const express = require('express')
const router = express.Router()
const validator_user = require('../validator/user_validator')
const controller_user = require('../controller/user_controller')

const validator_device = require('../validator/device_validator')
const controller_device = require('../controller/device_controller')

router.get('/create_user',validator_user,controller_user.create_user);

router.get('/view_user',validator_user,controller_user.view_user);


router.get('/create_device',validator_device,controller_device.create_device);

router.get('/view_device',validator_device,controller_device.view_device);




module.exports = router