const firebase = require('firebase');

module.exports = {
    getEvents: async (req, res) => {
        const db = firebase.firestore();
        const data = await db.collection('events').get();
        let allEvents = [];
        data.forEach(doc => allEvents.push(doc.data()));
        res.status(200).send(allEvents);
    },
    addEvent: async (req, res) => {
        const {title, body, author, date} = req.body;
        const db = firebase.firestore();
        console.log({title, body, author, date})
        const data = await db.collection('events').add({title, body, author, date});
        res.sendStatus(200);
    },
    deleteEvent: async (req, res) => {
        const {id} = req.params;
        const db = firebase.firestore();
        const data = await db.collection('events').doc(`${id}`).delete();
        res.sendStatus(200);
    },
    updateEvent: async (req, res) => {
        const {title, body, author, date} = req.body;
        const {id} = req.params;
        const db = firebase.firestore();
        const data = await db.collection('events').doc(`${id}`).set({title, body, author, date});
        res.sendStatus(200);
    }
}