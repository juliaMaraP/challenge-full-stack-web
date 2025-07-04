const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const studentRoutes = require('./routes/studentRoutes');
const authMiddleware = require('./middlewares/authMiddleware'); // 👈 IMPORTA o middleware
const authRoutes = require('./routes/authRoutes'); // 👈 Rota pública para login, se existir

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);

app.use('/api/students', authMiddleware, studentRoutes);

module.exports = app;
