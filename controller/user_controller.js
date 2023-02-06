
const user_services = require('../services/user_services')

module.exports ={
    create_user: async function(req, res,next){
    
        const newUser = {
            user_id:req.body.user_id,
            name:req.body.name,
            number:req.body.number,
            email:req.body.email,
            image_url:req.body.image_url,
            compartment_data:req.body.compartment_data
        }

            let user = await user_services.find_user(req.body.user_id)
            if(user)
            {
                console.log("already present")
                res.send(user)
            }
            else
            {
                user = await user_services.create_user(newUser)
                console.log("created new")
                res.send(user)
            }
    },
    view_user: async function(req, res,next){
            let user = await user_services.find_user(req.body.user_id)
            if(user)
            {
                res.send(user)
            }
            else
            {
                res.send("No user found")
            }
    },
    add_compartment: async function(req, res,next){

        let id_generated = String(req.body.user_id)
        id_generated = id_generated.concat('$')
        id_generated = id_generated.concat(String(req.body.compartment_name))
        
        const newDevice = {
            compartment_id:id_generated,
            compartment_name:req.body.compartment_name,
            connected_device_data:[]
        }
            let user = await user_services.find_user(req.body.user_id)
            if(user)
            {
                let user_updated = await user_services.add_compartment(newDevice,req.body.user_id)
                res.send(user_updated)
            }
            else
            {
                res.send({success:false,message:"No user found"})
            }
    },

    add_device: async function(req, res,next){
        const newDevice = {
            mac_id:req.body.mac_id,
            mac_name:req.body.mac_name
        }
            let user = await user_services.find_user(req.body.user_id)
            if(user)
            {
                let user_updated = await user_services.add_device(newDevice,req.body.user_id,req.body.compartment_id)
                res.send(user_updated)
            }
            else
            {
                res.send({success:false,message:"No user found"})
            }
    },
};


