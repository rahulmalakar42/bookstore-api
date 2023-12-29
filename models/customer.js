const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customer: String,
  book: String,
  quantity: Number
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;