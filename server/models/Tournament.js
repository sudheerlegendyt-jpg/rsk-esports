const mongoose = require("mongoose");

const TournamentSchema = new mongoose.Schema(
{
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
        enum: ["Upcoming", "Live", "Completed"],
        default: "Upcoming"
    },
    description: {
        type: String
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Tournament", TournamentSchema);
