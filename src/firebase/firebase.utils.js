import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var config = {
  apiKey: "AIzaSyAZpTd8Fal9z-LuZcFpbYtnU7Rnh4ugwI4",
  authDomain: "crwn-db-6c269.firebaseapp.com",
  projectId: "crwn-db-6c269",
  storageBucket: "crwn-db-6c269.appspot.com",
  messagingSenderId: "998366827685",
  appId: "1:998366827685:web:3e24380e8b602212c1694c",
  measurementId: "G-0E897F1S35",
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
