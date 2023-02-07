const Device = require('../models/devices_module')

module.exports ={
    create_device: async function(newDevice){
        let device = await Device.create(newDevice)
        
        let document_count = await Device.countDocuments({})
        document_count = document_count + 1
        id_to_set = String(document_count)
        let device_updated = await Device.updateOne({_id:device._id},{$set: {client_id:id_to_set}})
        return {
            success:true,
            client_id:String(id_to_set)
        }
    },
    find_device: async function(id){
        let device = await Device.findOne({client_id:id})
        return device
    },
    update_device: async function(client_id,user_id){
        let device = await Device.updateOne({client_id:client_id},{$addToSet: {connected_user:user_id}} )
        return device
    },
}