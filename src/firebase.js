import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA7S64Lw6JHxIBAZREB-R5JKuP9_SVxDpM",
  authDomain: "linkedin-42669.firebaseapp.com",
  projectId: "linkedin-42669",
  storageBucket: "linkedin-42669.appspot.com",
  messagingSenderId: "232987251431",
  appId: "1:232987251431:web:39452950ded433d409c842"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;