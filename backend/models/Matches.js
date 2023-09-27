const mongoose = require("mongoose");

const MatchesSchema = new mongoose.Schema({
  matchId: {
    type: Number,
    primaryKey: true,
    allowNull: false,
  },
  primary_match: {
    type: Number,
  },
  secondary_match: {
    type: Number,
  },
});

module.exports = mongoose.model("Matches", MatchesSchema);
