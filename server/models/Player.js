const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    tournament:{
        type:String,
        default:"No Tournament Joined"
    },

    paymentStatus:{
        type:String,
        default:"Pending"
    },

    notice:{
        type:String,
        default:"No New Notice"
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Player", PlayerSchema);
