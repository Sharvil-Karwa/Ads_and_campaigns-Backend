const mongoose = require("mongoose");
const schema = mongoose.Schema({
  icon: String,
  title: String,
  content: String,
});
module.exports = mongoose.model("Product", schema);
