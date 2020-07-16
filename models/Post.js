const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  postCategory: {
    type: String,
    required: true,
  },
});

module.exports = {
  Post: mongoose.model("posts", PostSchema),
};
