const firebase = require('firebase');

module.exports = {
    getEvents: async (req, res) => {
        const db = firebase.firestore();
        const data = await db.collection('events').get();
        let allEvents = [];
        data.forEach(doc => allEvents.push({...doc.data(), id:doc.id}));
        res.status(200).send(allEvents);
    },
    addEvent: async (req, res) => {
        const db = firebase.firestore();
        const data = await db.collection('events').add({...req.body});
        res.status(200).send(data.id);
    },
    deleteEvent: async (req, res) => {
        const {id} = req.params;
        const db = firebase.firestore();
        const data = await db.collection('events').doc(`${id}`).delete();
        res.sendStatus(200);
    },
    updateEvent: async (req, res) => {
        const {id} = req.params;
        const db = firebase.firestore();
        const data = await db.collection('events').doc(`${id}`).set({...req.body});
        res.sendStatus(200);
    }
}