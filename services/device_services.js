const Device = require('../models/devices_module')
const Counter = require('../models/device_counter')

module.exports ={
    generate_device_id: async function(){
        let first_use = await Counter.findOne({purpose:"update client id"})
        let id_generated = 1;
        if(first_use)
        {
            id_generated = first_use.counter + 1
            let count_update = await Counter.updateOne({ purpose:"update client id" },{$inc: { counter: 1 }})
        }
        else
        {
            let first_use_done = await Counter.create({})
        }
        return id_generated
    },
    create_device:async function(client_id,mac_id)
    {
        let device = Device.create({client_id:client_id,mac_id:mac_id})
        return device;
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