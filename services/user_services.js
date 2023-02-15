const User = require('../models/users_module')

module.exports ={
    create_user: async function(newUser){
        let user = await User.create(newUser)
        let id_updated = await User.updateOne({_id:user._id},{$set: {user_id:user._id}})
        return {
            success:true,
            user_id:user._id
        }
    },
    find_user: async function(user_id){
        let user = await User.findOne({user_id:user_id})
        return user
    },
    add_compartment: async function(newDevice,user_id){
        let device = await User.updateOne(
            { "user_id": String(user_id) }, 
            { $push: { compartment_data: newDevice } }
        )
        return device
    },
    add_device: async function(newDevice,id,compartment_id){
        console.log(compartment_id)
        let device = await User.updateOne(
            { "user_id":id,"compartment_data.user_id":compartment_id}, 
            { $push: { "compartment_data.$.connected_device_data": newDevice } }
        )
        return device
    }
}

