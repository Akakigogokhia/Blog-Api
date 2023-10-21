const mongoose = require('mongoose');
const Category = require('../models/Category');

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  timestamp: Number,
});

const Post = mongoose.model('Post', PostSchema);
module.exports = { Post, PostSchema };
