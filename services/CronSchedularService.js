const SchedularModel=require('../models/SchedularModel');
const mqttClient =require('../config/MqttServer');
const Device = require('../models/devices_module')

var schedule = require('node-schedule');


module.exports={

    scheduleService:async function (commond,user_id,client_id){

        let task_id = String(user_id);
        task_id = task_id.concat('$');
        task_id = task_id.concat(client_id);
        task_id = task_id.concat('$');
        task_id = task_id.concat(commond);

        var job = schedule.scheduleJob(task_id,commond, function(){
            console.log("running a task every 1 minutes")
       });

        let job_scheduled = {
            user_id:user_id,
            job_id:task_id
        }

        let device = await Device.updateOne(
            { "client_id": String(client_id) }, 
            { $push: { cron_scheduled: job_scheduled } }
        )
        
        const connected= await mqttClient.checkConnection();

        return {
            success:true,
            message:"successfully added",
            task_id:task_id,
            connected:  connected
        };        
    },
    cancel_schedule :async function (job_id){
        let current_job = schedule.scheduledJobs[job_id];
        current_job.cancel();
        return {
            success:true,
            message:"successfully done"
        }
    }
}

