const firebase = require('firebase');

module.exports = {
    getEvents: async (req, res) => {
        console.log("GE READ")
        const db = firebase.firestore();
        const data = await db.collection('events').get();
        let allEvents = [];
        data.forEach(doc => allEvents.push({...doc.data(), id:doc.id}));
        res.status(200).send(allEvents);
    },
    getEvent: async (req, res) => {
        console.log('GEV READ')
        const {id} = req.params;
        const db = firebase.firestore();
        const data = await db.collection('events').doc(`${id}`).get();
        let event = data.data();
        event.id = data.id;
        res.status(200).send(event);
    },
    addEvent: async (req, res) => {
        console.log('ADD EVENT READ')
        const db = firebase.firestore();
        const data = await db.collection('events').add({...req.body, attendees:[], messages:[]});
        res.status(200).send(data.id);
    },
    deleteEvent: async (req, res) => {
        console.log("DELETE EVENT READ")
        const {id} = req.params;
        const db = firebase.firestore();
        const data = await db.collection('events').doc(`${id}`).delete();
        res.sendStatus(200);
    },
    updateEvent: async (req, res) => {
        console.log("UPDATE EVENT READ");
        const {id} = req.params;
        const db = firebase.firestore();
        const data = await db.collection('events').doc(`${id}`).set({...req.body});
        res.sendStatus(200);
    },
    joinEvent: async (req, res) => {
        console.log("JOIN EVENT READ")
        const {id} = req.params;
        const {userId, name, photoURL} = req.body;
        const db = firebase.firestore();
        let attendees = [];
        attendees.push({id: userId, name, photoURL});

        const data = await db.collection('events').doc(`${id}`).update({ 
            attendees: firebase.firestore.FieldValue.arrayUnion({id: userId, name, photoURL})
        });
        res.sendStatus(200);
    },
    leaveEvent: async (req, res) => {
        console.log("LEAVE EVENT READ")
        const {id} = req.params;
        const {userId, name, photoURL} = req.body;
        const db = firebase.firestore();
        const data = await db.collection('events').doc(`${id}`).update({
            attendees: firebase.firestore.FieldValue.arrayRemove({id: userId, name, photoURL})
        });
        res.sendStatus(200);
    },
    reply: async (req, res) => {
        const {id} = req.params;
        const {name, photoURL, userId, text} = req.body;
        const db = firebase.firestore();
        const data = await db.collection('events').doc(`${id}`).update({
            messages: firebase.firestore.FieldValue.arrayUnion({...req.body})
        })
        res.sendStatus(200);
    }
}