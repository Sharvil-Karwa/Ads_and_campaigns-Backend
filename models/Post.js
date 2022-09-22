const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  createdOn: Date,
  src: String,
  startDate: Date,
  endDate: Date,
  clicks: Number,
  budget: Number,
  location: String,
  platform: Number,
  status: String,
});

module.exports = mongoose.model("Post", schema);
