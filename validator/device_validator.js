function validator(req,res,next){
    console.log("asdasd ")
    next()
}

function getAllDevicesRegisteredToUserValidator(req, res ,next){

    next();

}

modules.exports = {
    validator,
    getAllDevicesRegisteredToUserValidator

}