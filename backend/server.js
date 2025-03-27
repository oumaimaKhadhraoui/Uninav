require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
require('./config/passport'); // Import Passport config

const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());  // Add cookie parser middleware here
app.use(passport.initialize());
app.use(cors({
  origin: "http://localhost:3000", // Allow only your frontend
  credentials: true, // Allow cookies to be sent
}));
app.options('*', cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
mongoose.connect(process.env.MONGO_URI, {
  
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
