const express = require('express');

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

app.use('/v1/planets', planetsRouter);
app.use('/v1/launches', launchesRouter);