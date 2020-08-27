<<<<<<< HEAD
const imageController = require('./controllers/imageController');
=======
const eventsController = require('./controllers/eventsController');
>>>>>>> master

require('dotenv').config();
const express = require('express'),
      emailCtrl = require('./controllers/emailController'),
      eventsCtrl = require('./controllers/eventsController'),
      usersCtrl = require('./controllers/usersController'),
      imgCtrl = require('./controllers/imageController'),
      firebase = require('firebase'),
      session = require('express-session'),
      app = express(),
      {SESSION_SECRET, FIREBASE_API_KEY} = process.env;

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized:true,
    secret: SESSION_SECRET
}))

const config = {
    apiKey: FIREBASE_API_KEY,
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

app.get("/api/events", eventsCtrl.getEvents);
app.get("/api/events/:id", eventsCtrl.getEvent);
app.post("/api/events", eventsCtrl.addEvent);
app.post('/api/events/reply/:id', eventsCtrl.reply);
app.put("/api/events/:id", eventsCtrl.updateEvent);
app.put("/api/events/join/:id", eventsCtrl.joinEvent);
app.put("/api/events/leave/:id", eventsCtrl.leaveEvent);
app.delete("/api/events/:id", eventsCtrl.deleteEvent);

app.delete("/api/image/:id", imgCtrl.deleteImage);

app.post("/api/register", usersCtrl.register);
app.post("/api/login", usersCtrl.login);
app.post("/api/googleLogin", usersCtrl.googleLogin);
app.post("/api/googleRegister", usersCtrl.googleRegister);
app.get("/api/quickLogin", usersCtrl.quickLogin);
app.get("/api/logout", usersCtrl.logout);
app.get("/api/session", usersCtrl.sessionLogin);

app.delete('/api/users/:id', usersCtrl.deleteUser);
app.put('/api/users/:id', usersCtrl.updateUser);
app.get('/api/users', usersCtrl.getUsers)
app.get('/api/profile/:id', usersCtrl.getProfile);

app.listen(3030, () => console.log('listening'));