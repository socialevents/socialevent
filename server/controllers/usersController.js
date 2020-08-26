const firebase = require('firebase');
const bcrypt = require('bcryptjs');
require('dotenv').config();

module.exports = {
    register: async (req, res) => {
        const db = firebase.firestore();
        const {name, email, gender, state, password} = req.body;
        console.log(email);
        const user = await db.collection('users').where('email', '==', email).get();
        users = [];
        user.forEach(doc => users.push(doc.data()));
        console.log(users);
        if (users[0]) return res.status(401).send('Username already taken');

        const hash = bcrypt.hashSync(password, 10);
        const newUser = await db.collection('users').add({hash, email, name, gender, state, dob:'', description:'', profile_pic: '', profile_pics: []});
        req.session.user = {email, id:newUser.id, profile_pic: '', name, gender, dob:'', state, description:'', profile_pics:[]};

        return res.status(200).send(req.session.user);
    },
    login: async (req, res) => {
        const db = firebase.firestore();
        const {email, password} = req.body;
        const user = await db.collection('users').where('email', '==', email).get();
        users = [];
        user.forEach(doc => users.push({...doc.data(), id:doc.id}));

        if (!users[0]) return res.status(401).send('Username or Password is incorrect');

        const authorization = bcrypt.compareSync(password, users[0].hash);
        if (!authorization) return res.status(401).send('Username or Password is incorrect');
        delete users[0].hash
        users[0].id = users[0].id;
        req.session.user = users[0];
        return res.status(200).send(req.session.user);
    },
    logout: async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    sessionLogin: async (req, res) => {
        if (req.session.user) {
            const db = firebase.firestore();
            const {username} = req.session.user;
            const user = await db.collection('users').where('username', '==', username).get();
            users = [];
            user.forEach(doc => users.push(doc.id));
            if (!users[0]) return res.status(401).send('Invalid User');

            return res.status(200).send(req.session.user);
        } else {
            return res.sendStatus(200);
        }
        
    },
    deleteUser: async (req, res) => {
        const {id} = req.params;
        const db = firebase.firestore();
        const data = await db.collection('users').doc(`${id}`).delete();
        res.sendStatus(200);
    },
    updateUser: async (req, res) => {
        console.log(req.body)
        const {id} = req.params;
        const db = firebase.firestore();
        const data = await db.collection('users').doc(`${id}`).set(req.body, { merge: true });
        const newUser = await db.collection('users').doc(`${id}`).get();
        let user = newUser.data();
        user.id = newUser.id;
        delete user.hash;
        req.session.user = user;
        res.status(200).send(req.session.user);
    },
    googleLogin: (req, res) => {
        const {id} = req.body;
        const db = firebase.firestore();
        db.collection('users').doc(`${id}`).get().then(function(doc) {
            if (!doc.data()) return res.status(401).send('Register first');
            req.session.user = doc.data();
            req.session.user.id = doc.id;
            return res.status(200).send(req.session.user);
        });
    },
    googleRegister: async (req, res) => {
        const {id, name, gender, state, email, profile_pic} = req.body;
        const db = firebase.firestore();
        const data = await db.collection('users').doc(`${id}`).get().then( async function(doc) {
            if (doc.data()) {
                req.session.user = doc.data();
                return res.status(200).send(req.session.user);
            } else {
                const newUser = await db.collection('users').doc(`${id}`).set({email, name, gender, state, dob:'', description:'', profile_pic, profile_pics: []});
                req.session.user = {email, id, profile_pic, name, gender, dob:'', state, description:'', profile_pics:[]};
                return res.status(200).send(req.session.user);
            }
        })
    },
    quickLogin: async (req, res) => {
        if (req.session.user) {
            const db = firebase.firestore();
            const data = await db.collection('users').doc(`${req.session.user.id}`).get();
            let user = data.data();
            delete user.hash;
            user.id = data.id;
            req.session.user = user;
            return res.status(200).send(req.session.user);
        } else {
            res.sendStatus(200);
        }
    },

    getProfile: async (req, res) => {
        const {id} = req.params;
        const db = firebase.firestore();
        const data = await db.collection('users').doc(`${id}`).get();
        let profile = data.data();
        profile.id= data.id;
        res.status(200).send(profile);
    },

    getUsers: async (req, res) => {
        const db = firebase.firestore();
        const data = await db.collection('users').get();
        let users = [];
        data.forEach(doc => users.push({...doc.data(), id:doc.id}));
        res.status(200).send(users);
    }
}