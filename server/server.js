const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://kisanSmsApp:<password>@cluster0.q2nri.mongodb.net/<dbname>?retryWrites=true&w=majority'

// const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
// app.use(router);

server.listen(process.env.PORT || 5000, () => {
    console.warn(`Server has started on port ${process.env.PORT || 5000}`)
    console.warn(`Server has started ${new Date()}`)
    console.warn(`Server env local project`)
});

const connectDb = () => {
    try {
        mongoose.connect( mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
            console.log("Mongo db connected")            
        });                
    }
    catch (error) { 
        console.log("could not connect, Please wait conection retrying...");    
    }
}

connectDb();