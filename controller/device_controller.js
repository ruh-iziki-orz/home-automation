
const device_services = require('../services/device_services');
const schedular_services=require('../services/CronSchedularService');
const SchedularModel=require('../models/SchedularModel');
const { model } = require('mongoose');
module.exports ={
    create_device: async function(req,res,next){
        const newDevice = {
            client_id:"to be updated",
            mac_id:req.body.mac_id
        }
        device = await device_services.create_device(newDevice)
        res.send(device)
    },
    update_device: async function(req, res, next){
        let device = await device_services.find_device(req.body.client_id)
        if(device)
        {
            let device = await device_services.update_device(req.body.client_id,req.body.user_id)    
            res.send(device)
        }
        else
        {
            console.log("Not registered")
            res.send({
                success:false,
                message:"No mac id registed found"
            })
        }
    },
    view_device_data: async function(req, res, next){
        let device = await device_services.find_device(req.query.client_id)
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
        const sModel= new SchedularModel({second:req.body.second,
            minute:req.body.minute, hour:req.body.hour,days:req.body.days, month:req.body.month, week :req.body.week });
        var commond = sModel.cronFuncitonCommondGenerator();
        let message=await schedular_services.scheduleService(commond,req.body.user_id,req.body.client_id);
        res.send(message);    
    },
    cancel_schedule: async function (req, res, next){
        let job_id = req.body.job_id
        let message=await schedular_services.cancel_schedule(job_id);
        res.send(message)
    }
};


