const mongoose = require("mongoose")

const categoriesSchema = new mongoose.Schema({
  name: {type: String, require: true},
}, {timestamps: true});

const Categories = mongoose.model("Category", categoriesSchema);

exports.Categories = Categories;