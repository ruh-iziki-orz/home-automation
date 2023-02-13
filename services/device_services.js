const Device = require('../models/devices_module')
const Counter = require('../models/device_counter')

module.exports ={
    create_device: async function(newDevice){
        let first_use = await Counter.findOne({purpose:"update client id"})
        let id_generated = 1;
        if(first_use)
        {
            let count_update = await Counter.updateOne({ purpose:"update client id" },{$inc: { counter: 1 },})
            let temp = await Counter.findOne({purpose:"update client id"});    
            id_generated = temp.counter
        }
        else
        {
            let first_use_done = await Counter.create({})
        }
        newDevice.client_id = String(id_generated)
        let device = await Device.create(newDevice)
        return device
    },
    find_device: async function(id){
        let device = await Device.findOne({client_id:String(id)})
        return device
    },
    update_device: async function(client_id,user_id){
        let device = await Device.updateOne({client_id:client_id},{$addToSet: {connected_user:user_id}} )
        return device
    },
}