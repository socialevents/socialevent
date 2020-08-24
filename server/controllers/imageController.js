const firebase = require("firebase");

module.exports = {
  deleteImage: async (req, res) => {
    const { id } = req.params;
    const db = firebase.firestore();
    const data = await db.collection("images").doc(`${id}`).delete();
    res.sendStatus(200);
  }
};
