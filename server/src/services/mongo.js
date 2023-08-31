const mongoose = require('mongoose');

const MONGO_URL = 'somemongourl';

mongoose.connection.once('open', () => {
  console.log('MongoDb connection ready!');
})

mongoose.on('error', (err) => {
  console.log(err);
})