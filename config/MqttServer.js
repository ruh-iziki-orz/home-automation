const mqtt = require('mqtt')


const host = 'broker.emqx.io'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`


const connectUrl = `mqtt://${host}:${port}`

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'emqx',
  password: 'public',
  reconnectPeriod: 1000,
});


const connectMQTT = async() =>{
  try{
    client.on('connect', () => {
      console.log('Connected to MQTTT');
      
    });
    
  }
  catch(err)
  {
      console.log(err);
      process.exit(1);
  }
}

module.exports=connectMQTT;