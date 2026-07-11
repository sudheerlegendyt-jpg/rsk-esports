const express = require("express");
const router = express.Router();

const GameTournament = require("../models/GameTournament");

// Add Tournament
router.post("/add-tournament", async (req, res) => {
    try {
        const tournament = new GameTournament(req.body);

        await tournament.save();

        res.json({
            success: true,
            message: "Tournament Added Successfully"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// Get All Tournaments
router.get("/tournaments", async (req, res) => {

    const tournaments = await GameTournament.find().sort({createdAt:-1});

    res.json(tournaments);

});

module.exports = router;
