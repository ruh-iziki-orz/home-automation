const router=require('express').Router();


const validator_device = require('../validator/device_validator')
const controller_device = require('../controller/device_controller')
const device_controller_error_handle = require('../middlewares/device_controller_error_handle')

router.post('/register',validator_device,device_controller_error_handle(controller_device.create_device));

router.get('/view',validator_device,device_controller_error_handle(controller_device.view_device));

router.post('/update_devices',validator_device,device_controller_error_handle(controller_device.update_device));

// router.get('/getDevices',getAllDevicesRegisteredToUserValidator,  );

module.exports=router;

