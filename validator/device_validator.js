const { body, validationResult } = require('express-validator');
const { check } = require('express-validator/check');

// function validator(req,res,next){
//     console.log("asdasd ")
//     next()
// }

// function getAllDevicesRegisteredToUserValidator(req, res ,next){

//     next();

// }

// module.exports = {
//     validator,
//     getAllDevicesRegisteredToUserValidator

// }
const { check, validationResult } = require('express-validator');

const generateValidators = () => [
    // check('first_name')...,
    
    // check('last_name')...,
    
    // check('email')...,
    
    // check('password')...
];


const reporter = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);
        
        return res.status(400).json({
            errors: errorMessages
        });
    }
    
    next();
}

module.exports = {
    add: [
        generateValidators(),
        reporter
    ]
};