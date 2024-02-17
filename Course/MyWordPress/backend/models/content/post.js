const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  userId: [],
  content: {type: Object, require: true},
  viewsCount: {type: Number, default: 0},
  categories: {type: String, require: true},
  tags: []
}, {timestamps: true});

const Post = mongoose.model("Post", postSchema);

exports.Post = Post;