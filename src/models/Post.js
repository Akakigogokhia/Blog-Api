const mongoose = require("mongoose");
const Category = require("../models/Category");

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: Category,
  timestamp: Number,
});
