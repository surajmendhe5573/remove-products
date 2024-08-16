const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoute');
require('dotenv').config();

const app = express();

// middleware
app.use(express.json());

const port= process.env.PORT || 6000
const Mongo_URL= process.env.MONGO_URI

// Connect to MongoDB
mongoose.connect(Mongo_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

// Use product routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
