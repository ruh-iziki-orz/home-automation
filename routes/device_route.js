const router=require('express').Router();


const validator_device = require('../validator/device_validator')
const controller_device = require('../controller/device_controller')


router.post('/create_device',validator_device,controller_device.create_device);

router.get('/view_device',validator_device,controller_device.view_device);


module.exports=router;

