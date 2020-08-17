require('dotenv').config();
const express = require('express');
const emailCtrl = require('./controllers/emailController');
const app = express();

app.use(express.json());

app.get("/api/email", emailCtrl.sendEmail)

app.listen(3030, () => console.log('listening'));