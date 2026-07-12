const express = require("express");
const router = express.Router();

const Tournament = require("../models/Tournament");
const cloudinary = require("../config/cloudinary");

// Add Tournament
router.post("/add", async (req, res) => {

    try {

        const tournament = new Tournament(req.body);

        await tournament.save();

        res.json({
            success: true,
            message: "Tournament Added Successfully"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

// Get All Tournaments
router.get("/all", async (req, res) => {

    try {

        const tournaments = await Tournament.find().sort({_id:-1});

        res.json({
            success:true,
            tournaments
        });

    } catch (err) {

        res.status(500).json({
            success:false,
            message:err.message
        });

    }

});

// Update Tournament
router.put("/:id", async (req,res)=>{

    try{

        await Tournament.findByIdAndUpdate(req.params.id,req.body);

        res.json({
            success:true,
            message:"Tournament Updated"
        });

    }catch(err){

        res.status(500).json({
            success:false,
            message:err.message
        });

    }

});

// Delete Tournament
router.delete("/:id", async(req,res)=>{

    try{

        await Tournament.findByIdAndDelete(req.params.id);

        res.json({
            success:true,
            message:"Tournament Deleted"
        });

    }catch(err){

        res.status(500).json({
            success:false,
            message:err.message
        });

    }

});

module.exports = router;
