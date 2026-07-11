const mongoose = require("mongoose");

const TournamentSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
  },
  gameUID: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tournament", TournamentSchema);
