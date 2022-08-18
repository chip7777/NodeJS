import express from 'express';
import bodyParser from 'body-parser';
import ChatRouter from './routes/chats.js';
import MessageRouter from './routes/messages.js';
import cowsay from 'cowsay';
import mongoose from "mongoose";
import 'dotenv/config';

const URI = 'mongodb://localhost:27017/test'; //process.env.MONGODB_URI 

mongoose.connect(URI).then(() => {
  console.log(cowsay.say({
    text : "Mongoose connected",
    e : "oO",
    T : "U "
}));
}).catch(error => console.log(error));


const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/status', (req,res) => {
    res.send('OK');
})

app.use('/chats',ChatRouter);
app.use('/messages',MessageRouter);

app.listen(3000, ()=>console.log('server started on 3000 port'));