
const mongoose = require('mongoose')

const Device_counter = new mongoose.Schema({
    purpose:{
        type:String,
        "default" : "update client id"
    },
    counter:{
        type:Number,
        default:1
    }
})

module.exports = mongoose.model('device_counter',Device_counter)