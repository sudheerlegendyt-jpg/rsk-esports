const mongoose = require("mongoose");

const GameTournamentSchema = new mongoose.Schema({
    tournamentName: {
        type: String,
        required: true
    },
    game: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    entryFee: {
        type: Number,
        required: true
    },
    prizePool: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["live", "upcoming", "completed"],
        default: "upcoming"
    },
    banner: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("GameTournament", GameTournamentSchema);
