const express = require('express');
const route = express.Router();
const userController = require('./../Controller/usercontroller');
 //Defining routes

 route.post('/userLogin',userController);
 route.post('/userSignup',userController);
 route.get('/userDetails',userController);
 route.post('/updateUser',userController);
 route.get('/userLogout',userController);

 module.exports =route;