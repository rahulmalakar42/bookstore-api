const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  language: String,
  pages: Number
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;