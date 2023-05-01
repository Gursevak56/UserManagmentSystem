const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
app.use(cors());
app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({extended:true,limit:'50mb'}));
dotenv.config({path:'./utils/config.env'});
const userroute = require('./routes/userroute'); 
const db_url = process.env.DB_URL;
console.log(db_url);
// Database  connectivity
mongoose.connect(db_url,{useNewUrlParser:true}).then((value)=>{
    if(!value){
        console.log("Database connectivity error");
    }
    else
    {
        console.log('Database connected successfully');
    }
})
    
app.use('/api/user',userroute);
// app listen
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server running on port ${port} successfully`);
})