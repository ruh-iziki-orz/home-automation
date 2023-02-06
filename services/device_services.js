const Device = require('../models/devices_module')

module.exports ={
    create_device: async function(newDevice){
        let device = Device.create(newDevice)
        return device
    },
    find_device: async function(id){
        let device = await Device.findOne({mac_id:id})
        return device
    },
    update_device: async function(mac_id,user_id){
        let device = await Device.updateOne({mac_id:mac_id},{$addToSet: {connected_user:user_id}} )
        return device
    },
}