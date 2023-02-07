
const mongoose = require('mongoose')

const DeviceSchema = new mongoose.Schema({
    client_id:{
        type:String,
        required:true
    },
    mac_id:{
        type:String,
        required:true
    },
    connected_user:{ type : Array ,
         "default" : [] 
    },
    cron_scheduled:{ type : Array , 
        "default" : [] 
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Device',DeviceSchema)