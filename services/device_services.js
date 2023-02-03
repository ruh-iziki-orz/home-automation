const Device = require('../models/devices_module')

module.exports ={
    create_device: async function(newDevice){
        let device = await Device.create(newDevice)
        return device
    },
    find_device: async function(id){
        let device = await Device.findOne({mac_id:id})
        return device
    }
}

