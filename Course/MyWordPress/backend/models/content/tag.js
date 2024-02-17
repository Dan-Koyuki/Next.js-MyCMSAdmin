const mongoose = require("mongoose")

const tagSchema = new mongoose.Schema({
  name: {type: String, require: true},
}, {timestamps: true});

const Tag = mongoose.model("Tag", tagSchema);

exports.Tag = Tag;