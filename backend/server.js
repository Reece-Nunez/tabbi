const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/payments', require('./routes/paymentRoutes'));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
