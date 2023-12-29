const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customer: String,
  book: String
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;