
const device_services = require('../services/device_services')

module.exports ={
    create_device: async function(req, res,next){
    
        const newDevice = {
            mac_id:req.body.mac_id,
            name:req.body.name,
            user_id:req.body.user_id
        }
            let device = await device_services.find_device(req.body.mac_id)
            if(device)
            {
                console.log("already present")
                res.send(device)
            }
            else
            {
                device = await device_services.create_device(newDevice)
                console.log("created new")
                res.send(device)
            }
    },
    view_device: async function(req, res,next){
            
            let device = await device_services.find_device(req.query.mac_id)
            if(device)
            {
                res.send(device)
            }
            else
            {
                res.send("No user found")
            }
    },
    viewDevicesRegisteredToUserController: async function(req, res, next){

        
    }
};


