const express = require("express");
const router = express.Router();

const Player = require("../models/Player");

// Signup
router.post("/signup", async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const exists = await Player.findOne({ email });

        if (exists) {
            return res.json({
                success: false,
                message: "Email already registered"
            });
        }

        const player = new Player({
            name,
            email,
            password
        });

        await player.save();

        res.json({
            success: true,
            message: "Signup Successful"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
});

// Login
router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const player = await Player.findOne({ email, password });

        if (!player) {

            return res.json({
                success: false,
                message: "Invalid Email or Password"
            });

        }

        res.json({
            success: true,
            message: "Login Successful",
            player
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

module.exports = router;
