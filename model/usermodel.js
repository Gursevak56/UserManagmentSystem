const mongoose = require('mongoose');
const userschema = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    fullName:{
        type:String
    },
    password:{
        type:String
    },
    plainPassword:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    profilePic:{
        type:String
    },
    Role:{
        type:String
    },
    status:{
       type:String
    },
    jwtToken:{
        type:String
    }
},{
    timestamps:true
})
const User = mongoose.model("user",userschema);
module.exports =User;