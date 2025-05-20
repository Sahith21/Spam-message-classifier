const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const messageRoutes = require('./routes/messages');
const { loadModel } = require('./model');

loadModel();

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/messages', messageRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
