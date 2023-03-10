const path = require('path')
const http = require('http')
const dotenv = require('dotenv')
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const ErrorHandler = require("./utility/error");
const connectMQTT = require('./config/MqttServer');

const app = express();

const server = http.createServer(app);

app.use(bodyParser.json());

process.env.TZ = "Asia/Calcutta";

// load config for mongo db connection
dotenv.config({path: './config/config.env'})


// connect db
connectDB()
connectMQTT.clientConnection();



// routes
app.use('/', require('./routes/router_index'))


app.use(ErrorHandler)


const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`App running ${PORT}'`));