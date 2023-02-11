import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyA7fvXzYBlBL5YGYMwgFlQ4f62Op7Ep4Ho",
    authDomain: "disney-f7ffd.firebaseapp.com",
    projectId: "disney-f7ffd",
    storageBucket: "disney-f7ffd.appspot.com",
    messagingSenderId: "73949634407",
    appId: "1:73949634407:web:3ea6da6c36c76bafea19c2"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

export { auth, provider, storage };
export default db;