const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: String,
      allowNull: false,
    },
    lastName: {
      type: String,
      allowNull: false,
    },
    bio: {
      type: String,
      allowNull: false,
    },
    intrest: {
      type: String,
      allowNull: false,
    },
    age: {
      type: String,
      allowNull: false,
    },
    location: {
      type: String,
      allowNull: false,
    },
    sexuality: {
      type: String,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", ProfileSchema);
