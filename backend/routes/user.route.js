const express=require('express');
const app=express();
const Router=express.Router();
const {signupUser}=require('../controllers/user.controller');

Router.post('/signup',signupUser);



module.exports=Router;