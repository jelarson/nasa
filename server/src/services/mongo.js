const mongoose = require('mongoose');

const MONGO_URL = 'somemongourl';

mongoose.connection.once('open', () => {
  console.log('MongoDb connection ready!');
})

mongoose.on('error', (err) => {
  console.log(err);
})

async function mongoConnect() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
}

module.exports = {
  mongoConnect,
}