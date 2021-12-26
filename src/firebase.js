import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwdDAH9zEx2d0fdso52ro_s89W4DxWjxM",
  authDomain: "igreels-d4e5e.firebaseapp.com",
  projectId: "igreels-d4e5e",
  storageBucket: "igreels-d4e5e.appspot.com",
  messagingSenderId: "962997667047",
  appId: "1:962997667047:web:d420e502212bc44d374e42"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();