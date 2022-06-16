const e = require('express');
const {createUser}=require('../models/user.model');

const signupUser=(req,res)=>{
createUser(req.connection,req.body,(err,result)=>{
    if(!err)
    {
        res.send({success:true,message:"User created sucesss"});
    }
    else{
        res.send({success:false});
    }
})

}


module.exports={
    signupUser,
}