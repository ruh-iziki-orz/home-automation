
const user_services = require('../services/user_services')

module.exports ={
    create_user: async function(req, res,next){
    
        const newUser = {
            id:req.body.id,
            name:req.body.name,
            number:req.body.number,
            email:req.body.email,
            image_url:req.body.image_url
        }

            let user = await user_services.find_user(req.body.id)
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

        const newUser = {
            id:req.body.id,
        }
            let user = await user_services.find_user(req.body.id)
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


