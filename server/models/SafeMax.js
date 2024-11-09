const mongoose = require('mongoose')

const safeMaxSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
       
    },
    appointment :{
        type : Date,
        required : true
    },
    comment : {
        type : String ,
        
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    isActive : {
        type : Boolean,
        default : false
    }
})

const User = mongoose.model("users",safeMaxSchema);


module.exports = User;