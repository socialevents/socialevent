import { useState, useEffect } from "react";
import firebase, {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../../../../../firebase/config";


const useStorage = (file, id) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("users").doc(`${id}`);
    console.log("USE STORE READ");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        console.log(url)
        // const createdAt = timestamp()
        await collectionRef.update({ 
          profile_pics: firebase.firestore.FieldValue.arrayUnion(url)
        });
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, url, error };
};
export default useStorage;
