const express=require('express');
const app=express();
require('dotenv').config();
const path=require('path');
const logger=require('morgan');


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(logger("dev"));

app.get("/hi",(req,res)=>{
    res.send("hiii");
})
app.listen(process.env.PORT,()=>{
    console.log("Server is running",process.env.PORT);
})