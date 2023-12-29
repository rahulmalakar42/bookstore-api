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
  
  app.get('/books/:id', (req, res) => {
    Book.findById(req.params.id)
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

app.listen(3000, (req, res) => {
  console.log('listening...');
});
