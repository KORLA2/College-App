import  express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import Router from './router'

let app=express();
app.use('/user',Router)
app.use(bodyParser.json({limit:'30mb',extended:'true'}))

app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

app.use(cors())

let connectionurl ="mongodb+srv://Goutham:7@i!H!!L22$QB_-@cluster0.qtqcwlf.mongodb.net/?retryWrites=true&w=majority";

let PORT=process.env.PORT||5000;

mongoose.connect(connectionurl,{}).then(()=>app.listen(PORT,()=>{console.log('sever running ')})).catch(()=>console.log('rejcted'));

mongoose.set('useFindModify',false)