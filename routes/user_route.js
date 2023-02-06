const router=require('express').Router();

const validator_user = require('../validator/user_validator')
const controller_user = require('../controller/user_controller')
const user_error_handle = require('../middlewares/user_error_handle')


router.post('/create',validator_user,user_error_handle(controller_user.create_user));

router.get('/view_user',validator_user,user_error_handle(controller_user.view_user));

router.post('/add_compartment',validator_user,user_error_handle(controller_user.add_compartment));

router.post('/add_device',validator_user,user_error_handle(controller_user.add_device));


module.exports = router