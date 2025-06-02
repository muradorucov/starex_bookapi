const express = require('express');
const bookRoutes = require('./src/routers/book.routes');
const reviewRoutes = require('./src/routers/review.routes');
const config = require('./src/config');
const mongooseConnection = require('./src/db');

const app = express();
mongooseConnection();

app.use(express.json());

app.use('/books', bookRoutes);
app.use('/books', reviewRoutes);


app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});
