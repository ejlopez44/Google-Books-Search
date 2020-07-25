const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  // This may need to be an array, need to first test API call
  authors: Array,
  googleId: String,
  image: String,
  description: String,
  link: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
