const Device = require('../models/devices_module')

module.exports ={
    create_device: async function(newDevice,id){
        let device = Device.create(
            { "user_id": String(id) ,  "data": newDevice  }
         )
        return device
    },
    update_device: async function(newDevice,id){
        let device = Device.updateOne(
            { "user_id": String(id) }, 
            { $push: { data: newDevice } }
        )
        return device
    },
    find_device: async function(id){
        let device = await Device.findOne({user_id:id})
        return device
    }
}