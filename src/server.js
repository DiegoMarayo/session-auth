require('dotenv').config();

const express = require('express');
const path = require('path');

const sessionConfig = require('./config/session');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(sessionConfig);

app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});