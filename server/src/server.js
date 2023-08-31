const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8001;

const server = http.createServer(app)

async function startServer() {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
    await loadPlanetsData();
    
    server.listen(PORT, () => {
        console.log('Listening on port ' + PORT);
    })
}

startServer();
