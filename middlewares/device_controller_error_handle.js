
const device_controller_error_handle = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res, next);
        } catch (err) {
            next(err);
        }
    };
};

const schedule_controller_error_handler=(controller)=>{

    return async(req, res, next)=>{

        try {

            await controller(req, res, next);

        }
        catch(err){
            next(err);

        }

    };

}

module.exports = {device_controller_error_handle,
    schedule_controller_error_handler
    
};
