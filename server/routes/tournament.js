const express = require("express");
const router = express.Router();

const Tournament = require("../models/Tournament");

// Tournament Registration
router.post("/register", async (req, res) => {
    try {
        const { playerName, gameUID, email, phone } = req.body;

        const newRegistration = new Tournament({
            playerName,
            gameUID,
            email,
            phone,
        });

        await newRegistration.save();

        res.status(201).json({
            success: true,
            message: "Registration Successful",
            data: newRegistration,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
});

// Admin - Get All Registrations
router.get("/all", async (req, res) => {
    try {
        const registrations = await Tournament.find().sort({ createdAt: -1 });
        res.json(registrations);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
});

module.exports = router;
