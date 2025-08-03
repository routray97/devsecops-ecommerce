const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product'); // ✅ NEW LINE

dotenv.config();

const app = express();
app.use(express.json());

console.log("📦 DB_URI from .env:", process.env.DB_URI);

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB error:', err));

// Routes
app.use('/api/users', userRoute);
app.use('/api/products', productRoute); // ✅ NEW LINE

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
