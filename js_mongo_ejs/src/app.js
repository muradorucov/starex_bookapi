const express = require('express');
const bookRoutes = require('./routers/book.routes');
const reviewRoutes = require('./routers/review.routes');
const config = require('./config');
const mongooseConnection = require('./db');

const app = express();
mongooseConnection();

app.use(express.json());

app.use('/books', bookRoutes);
app.use('/books', reviewRoutes);


module.exports = app;