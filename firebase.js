import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDD8GRYM5w05puXBSA7D8FLcWMSZSg75jU",
  authDomain: "whatsapp-97bb2.firebaseapp.com",
  projectId: "whatsapp-97bb2",
  storageBucket: "whatsapp-97bb2.appspot.com",
  messagingSenderId: "491820687543",
  appId: "1:491820687543:web:e98b7856240b2089c62d32",
};

const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
: firebase.app();

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};