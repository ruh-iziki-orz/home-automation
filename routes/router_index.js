const express = require('express');
const router = express.Router();

const userRouter =require('./user_route');
const deviceRouter =require('./device_route');

router.use('/user', userRouter);
router.use('/device', deviceRouter);

module.exports = router