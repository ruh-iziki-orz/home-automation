const router=require('express').Router();


const validator_device = require('../validator/device_validator')
const controller_device = require('../controller/device_controller')
const {device_controller_error_handle, schedule_controller_error_handler} = require('../middlewares/device_controller_error_handle')


router.post('/register_or_update',validator_device.add,device_controller_error_handle(controller_device.create_or_update_device));

router.get('/view_connected_devices',validator_device.add,device_controller_error_handle(controller_device.view_device_data));


router.post('/schedule',validator_device.add ,schedule_controller_error_handler(controller_device.scheduleTaskController) );

module.exports=router;

