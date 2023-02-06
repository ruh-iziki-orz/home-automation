const router=require('express').Router();


const validator_device = require('../validator/device_validator')
const controller_device = require('../controller/device_controller')
const device_controller_error_handle = require('../middlewares/device_controller_error_handle')


router.post('/register',validator_device.add,device_controller_error_handle(controller_device.create_device));

router.get('/view_connected_devices',validator_device.add,device_controller_error_handle(controller_device.viewDevicesRegisteredToUserController));

router.post('/update_devices',validator_device.add,device_controller_error_handle(controller_device.update_device));

router.post('/schedule',validator_device.add ,schedule_controller_error_handler(contro) )

module.exports=router;

