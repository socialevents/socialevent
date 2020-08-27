const firebase = require("firebase");

module.exports = {
  deleteImage: async (req, res) => {
    const { id } = req.params;
    const db = firebase.firestore();
    console.log(data);
    const data = await db.collection("images").doc(`${id}`).delete({
      profile_pics: firebase.fireStore.FieldValue.arrayRemove({url: url})
    });
    res.sendStatus(200);
  },
};
