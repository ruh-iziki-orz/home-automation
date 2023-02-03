const User = require('../models/users_module')

module.exports ={
    create_user: async function(newUser){
        let user = await User.create(newUser)
        return user
    },
    find_user: async function(id){
        let user = await User.findOne({id:id})
        return user
    }
}

