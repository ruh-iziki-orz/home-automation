var cron = require('node-cron');
const SchedularModel=require('../models/SchedularModel');



//This is the structure 
//Link https://www.npmjs.com/package/node-cron 

// cron.schedule('1,2,4,5 * * * *', () => {
//     console.log('running every minute 1, 2, 4 and 5');

// });


module.exports={

    scheduleService:async function (commond){

        cron.schedule(commond, () => {
            console.log('running a task ', commond);
            
          });

          

          return "commond exceupted ";


    }
}

