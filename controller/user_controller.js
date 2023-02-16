
const user_services = require('../services/user_services')
const device_services = require('../services/device_services')
module.exports ={
    create_user: async function(req, res,next){
        const newUser = {
            user_id:"to be updated",
            name:req.body.name,
            number:req.body.number,
            email:req.body.email,
            image_url:req.body.image_url,
        }
        user = await user_services.create_user(newUser)
        
        let id_generated_all_compartment = String(user.user_id)
        
        id_generated_all_compartment = id_generated_all_compartment.concat('$ALL_COMPARTMENT')
        
        
        const newCompartment = {
            compartment_id:id_generated_all_compartment,
            compartment_name:'ALL_COMPARTMENT',
            connected_device_data:[]
        }        

        let user_updated = await user_services.add_compartment(newCompartment,user.user_id)
        console.log("created new")
        res.send(user)
    },
    view_user: async function(req, res,next){
            let user = await user_services.find_user(req.query.user_id)
            if(user)
            {
                res.status(200).send({success:true , message: user});
            }
            else
            {
                res.status (401).send({success: false , message:"No user found "});
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
                res.send({
                    success:true,
                    compartment_id:id_generated
                })
            }
            else
            {
                res.send({success:false,message:"No user found"})
            }
    },

    add_device: async function(req, res,next){
        const newDevice = {
            client_id:req.body.client_id,
            device_name:req.body.mac_name,
            mac_id:req.body.mac_id,
            publish_topic:req.body.publish_topic,
            subscribe_topic:req.body.subscribe_topic
        }

            let id_generated_all_compartment = String(req.body.user_id)
            id_generated_all_compartment = id_generated_all_compartment.concat('$ALL_COMPARTMENT')

            let device = await device_services.find_device(req.body.client_id)
            if(device == null)
            {
                let device_registration = await device_services.create_device(req.body)
            }
            else
            {

                let device_update = await device_services.update_device(req.body.client_id,req.body.user_id)
                
            }
            
            let user = await user_services.find_user(req.body.user_id)
            if(user)
            {
                let user_updated = await user_services.add_device(newDevice,req.body.user_id,req.body.compartment_id)
                let user_updated_all_compartment = await user_services.add_device(newDevice,req.body.user_id,id_generated_all_compartment)
                res.send(user_updated)

            }
            else
            {
                res.send({success:false,message:"No user found"})
            }
    },
};


