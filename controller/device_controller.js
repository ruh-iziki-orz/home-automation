
const device_services = require('../services/device_services');
const schedular_services=require('../services/CronSchedularService');
const SchedularModel=require('../models/SchedularModel');
const { model } = require('mongoose');
module.exports ={
    create_device: async function(req, res,next){
        const newDevice = {
            mac_id:req.body.mac_id,
            name:req.body.name
        }
            let device = await device_services.find_device(req.body.user_id)
            if(device)
            {
                console.log("already present")
                res.send(device)
            }
            else
            {
                device = await device_services.create_device(newDevice,req.body.user_id)
                console.log("created new")
                res.send(device)
            }
    },
    update_device: async function(req, res,next){
        const newDevice = {
            mac_id:req.body.mac_id,
            name:req.body.name
        }
            let device = await device_services.find_device(req.body.user_id)
            if(device)
            {
                device = await device_services.update_device(newDevice,req.body.user_id)
                res.send(device)
            }
            else
            {
                res.send("No user found")
            }
    },
    viewDevicesRegisteredToUserController: async function(req, res, next){
        let device = await device_services.find_device(req.query.user_id)
            if(device)
            {
                res.send(device.data)
            }
            else
            {
                res.send("No user found")
            }
    },

    scheduleTaskController: async function (req, res, next){
        
        const sModel= new SchedularModel({secound:req.body.secound, hour
        :req.body.hour, minute:req.body.minute,days:req.body.days, month:req.body.month, year :req.body.year });
        var commond = sModel.cronFuncitonCommondGenerator();
        console.log(commond);

        let message= schedular_services.scheduleService(commond);

        res.send(message);
        
        
            
    }
};


