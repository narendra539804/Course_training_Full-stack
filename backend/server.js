const express=require('express');
const app=express();
require('dotenv').config();
const path=require('path');
const logger=require('morgan');
const connection=require('./database');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(logger("dev"));

//with in whole app we can use mysql
app.use((req,res,next)=>{
    req.connection=connection;
    next();
})

const routes=require('./routes/index');
app.use('/api',routes.user);
app.get("/hi",(req,res)=>{
    res.send("hiii");
})
app.listen(process.env.PORT,()=>{
    console.log("Server is running",process.env.PORT);
})