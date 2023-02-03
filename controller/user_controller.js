
const User = require('../models/users_module')
module.exports ={
    create_user: async function(req, res,next){
    
        const newUser = {
            id:req.body.id,
            name:req.body.name,
            number:req.body.number,
            email:req.body.email,
            image_url:req.body.image_url
        }

            let user = await User.findOne({id:req.body.id})
            if(user)
            {
                console.log("already present")
                res.send(user)
            }
            else
            {
                user = await User.create(newUser)
                console.log("created new")
                res.send(user)
            }
    },
    view_user: async function(req, res,next){

        const newUser = {
            id:req.body.id,
        }
            let user = await User.findOne({id:req.body.id})
            if(user)
            {
                res.send(user)
            }
            else
            {
                res.send("No user found")
            }
    },
};


