import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3rmH-LA50dSUk6TDDaUG3R5D47jiLv0c",
  authDomain: "whatsapp-2-3a146.firebaseapp.com",
  projectId: "whatsapp-2-3a146",
  storageBucket: "whatsapp-2-3a146.appspot.com",
  messagingSenderId: "976072077309",
  appId: "1:976072077309:web:711b6396b14181eeb5b394",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
