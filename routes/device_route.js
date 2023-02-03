const router=require('express').Router();


const validator_device = require('../validator/device_validator')
const controller_device = require('../controller/device_controller')


router.post('/register',validator_device,controller_device.create_device);

router.get('/view',validator_device,controller_device.view_device);


module.exports=router;

