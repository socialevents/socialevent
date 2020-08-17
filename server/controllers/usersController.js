const firebase = require('firebase');
const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const db = firebase.firestore();
        const {username, password, email} = req.body;
        const user = await db.collection('users').where('username', '==', username).get();
        users = [];
        user.forEach(doc => users.push(doc.data()));

        if (users[0]) return res.status(200).send('Username already taken');

        const hash = bcrypt.hashSync(password, 10);
        const newUser = await db.collection('users').add({username, hash, email});
        req.session.user = {username, email, id:newUser.id, profile_pic: '', name:'', gender:'', dob:'', location:'', description:''};

        return res.status(200).send(req.session.user);
    },
    login: async (req, res) => {
        const db = firebase.firestore();
        const {username, password} = req.body;
        const user = await db.collection('users').where('username', '==', username).get();
        users = [];
        user.forEach(doc => users.push({...doc.data(), id:doc.id}));

        if (!users[0]) return res.status(401).send('Username or Password is incorrect');

        const authorization = bcrypt.compareSync(password, users[0].hash);
        if (!authorization) return res.status(401).send('Username or Password is incorrect');
        delete users[0].hash
        req.session.user = users[0];
        return res.sendStatus(200);
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
        const {id} = req.params;
        const {name, gender, dob, location, description, profile_pic} = req.body;
        const db = firebase.firestore();
        const data = await db.collection('users').doc(`${id}`).set({name, gender, dob, location,description, profile_pic}, { merge: true });
        res.sendStatus(200);
    }
}