
const device_services = require('../services/device_services');
const schedular_services=require('../services/CronSchedularService');
const SchedularModel=require('../models/SchedularModel');
const { model } = require('mongoose');
module.exports ={
    create_or_update_device: async function(req, res, next){
        const newDevice = {
            mac_id:req.body.mac_id,
            connected_user:[req.body.user_id],
            cron_scheduled:[]
        }
        let device = await device_services.find_device(req.body.mac_id)
        if(device)
        {
            let device = await device_services.update_device(req.body.mac_id,req.body.user_id)    
            console.log("already present")
            res.send(device)
        }
        else
        {
            device = await device_services.create_device(newDevice)
            console.log("created new")
            res.send(device)
        }
    },
    view_device_data: async function(req, res, next){
        let device = await device_services.find_device(req.query.mac_id)
            if(device)
            {
                res.send(device)
            }
            else
            {
                res.send("No user found")
            }
    },
    scheduleTaskController: async function (req, res, next){
        
        const sModel= new SchedularModel({second:req.body.second, hour
        :req.body.hour, minute:req.body.minute, hour:req.body.hour,days:req.body.days, month:req.body.month, week :req.body.week });
        var commond = sModel.cronFuncitonCommondGenerator();
        

        let message=await schedular_services.scheduleService(commond);
        
        
        res.send(message);
        
        
            
    }
};


