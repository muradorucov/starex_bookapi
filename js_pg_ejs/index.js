const express = require('express');
const sequelize = require('./src/db');

const bookRoutes = require('./src/routers/book.routes');
const reviewRoutes = require('./src/routers/review.routes');
const config = require('./src/config');


const app = express();
app.use(express.json());

app.use('/books', bookRoutes);
app.use('/books', reviewRoutes);


sequelize.sync({ alter: true }).then(() => {
    console.log('Connected to PostgreSQL successfully');
    app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
    });
}).catch(err => {
    console.error('Error connecting to PostgreSQL:', err);
});
