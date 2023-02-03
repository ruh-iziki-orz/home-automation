const router=require('express').Router();

const validator_user = require('../validator/user_validator')
const controller_user = require('../controller/user_controller')


router.post('/create',validator_user,controller_user.create_user);

router.get('/login',validator_user,controller_user.view_user);




module.exports = router