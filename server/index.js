require('dotenv').config();
const express = require('express');
const emailCtrl = require('./controllers/emailController');
const eventsCtrl = require('./controllers/eventsController');
const firebase = require('firebase');
const app = express();

app.use(express.json());

const config = {
    apiKey: "AIzaSyCQ8ekSC_ihYteUPp5X6ZhbnUdkTiHo_Io",
    authDomain: "socailevent.firebaseapp.com",
    databaseURL: "https://socailevent.firebaseio.com",
    projectId: "socailevent",
    storageBucket: "socailevent.appspot.com",
    messagingSenderId: "820788796021",
    appId: "1:820788796021:web:c2e6a480ecae394db5763c",
    measurementId: "G-Q1J5VW2WKN"
}

firebase.initializeApp(config);

app.get("/api/email", emailCtrl.sendEmail)

app.get("/api/posts", eventsCtrl.getEvents);
app.post("/api/posts", eventsCtrl.addEvent);
app.put("/api/posts/:id", eventsCtrl.updateEvent);
app.delete("/api/posts/:id", eventsCtrl.deleteEvent);

app.listen(3030, () => console.log('listening'));