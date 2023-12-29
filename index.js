require('./db/mongoose');

const express = require('express');
const mongoose = require('mongoose');

const Book = require('./models/book');
const Customer = require('./models/customer');

const app = express();
app.use(express.json());

// app.post('/add-book', async (req, res) => {
//     const book = await new Book(req.body);
//     try{
//       book.save();
//       res.status(200).send(book);
//     }
//     catch(err){
//       console.log(err);
//     }

//     Book.create(req.body).then((book)=>{
//         res.status(200).send(book);
//     }).catch((err)=>{
//         console.log(err);
//     })
//   });

app.post('/add-books', (req, res) => {
  Book.insertMany(req.body)
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/add-customers', (req, res) => {
  Customer.insertMany(req.body)
    .then((customers) => {
      res.status(200).send(customers);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/', (req, res) => {
  res.redirect('/books');
});

app.get('/books', (req, res) => {
  Book.find()
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/customers', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).send(customers);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/books/:title', (req, res) => {
  Book.find({ title: req.params.title })
    .then((book) => {
      if (!book) {
        return res.status(404).send("Book doesn't exist");
      } else {
        res.send(book);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/customers/:name', async (req, res) => {
  const name = req.params.name;
  try {
    const customer = await Customer.find({ customer: name });
    res.status(200).send(customer);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.patch('/books/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((book) => {
      if (!book) {
        res.status(404).send('Error');
      } else {
        res
          .status(200)
          .send(`The book with id: ${req.params.id} has been updated`);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.patch('/customers/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customer.findByIdAndUpdate(id, req.body, {
      returnOriginal: false,
    });
    res.status(200).send(customer);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.delete('/books/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then((book) => {
      if (!book) {
        return res.status(404).send();
      }
      res.send(book);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete('/customers/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customer.findByIdAndDelete(id);
    res.status(200).send(`Deleted document is ${customer}`);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(3000, (req, res) => {
  console.log('listening...');
});
