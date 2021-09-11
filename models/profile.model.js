const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
    },
    link: {
      type: String,
      trim: true,
    },
    tech: {
      type: String,
      trim: true,
    },
    desc: {
      type: Object,
      trim: false,
    },
    duration:{
      type:String,
      trim:false,
    }
  },
  {
    timestamps: true,
  }
);

const profiledata = mongoose.model(" profiledata", userSchema);

module.exports = profiledata;
