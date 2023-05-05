const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
    // default: 100,
    // min: 100,
    // max: 999,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rockets: {
    type: String,
    required: true,
  },
  targe: {
    type: mongoose.ObjectId,
    ref: 'Planet',
  }
})