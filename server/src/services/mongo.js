const mongoose = require('mongoose');

mongoose.connection.once('open', () => {
  console.log('MongoDb connection ready!');
})

mongoose.on('error', (err) => {
  console.log(err);
})