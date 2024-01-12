require('../.env')
const mongoose = require('mongoose');
mongoose
  .connect(DBURL)
  .then(() => {
    console.log('connection successful');
  })
  .catch((err) => {
    console.log(err);
  });
