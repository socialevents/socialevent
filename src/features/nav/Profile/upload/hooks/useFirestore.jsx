  
// import { useState, useEffect } from 'react';
// import { projectFirestore } from '../../../../../firebase/config';

// const useFirestore = (collection, id) => {
//   const [docs, setDocs] = useState([]);

//   useEffect(() => {
    // const unsub = projectFirestore.collection(collection).doc(`${id}`).get()
    // .then(doc => console.log(unsub))
    //   .orderBy('createdAt', 'desc')
      // .onSnapshot(snap => {
      //   let documents = [];
      //   snap.forEach(doc => {
      //     documents.push({...doc.data(), id: doc.id});
      //   });
      //   setDocs(documents);
      // }, [collection]);

    // return () => unsub();
  // }, [collection]);

  // return { docs };
// }

// export default useFirestore;