// Import the functions you need from the SDKs you need


import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from 'firebase/compat/app';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line
const firebaseConfig = {
  apiKey: "AIzaSyCtfG1Jze4Z_sgwtBSP8Eo86nfC9GT6-TY",
  authDomain: "bogglesolver-7a351.firebaseapp.com",
  databaseURL: "https://bogglesolver-7a351-default-rtdb.firebaseio.com",
  projectId: "bogglesolver-7a351",
  storageBucket: "bogglesolver-7a351.appspot.com",
  messagingSenderId: "79740564620",
  appId: "1:79740564620:web:ff3a0de93bac1d46fef7a9",
  measurementId: "G-4JLHVWCSN8"
};


firebase.initializeApp(firebaseConfig);
export default firebase;