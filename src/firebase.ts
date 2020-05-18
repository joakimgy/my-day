import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const development = process.env.NODE_ENV === "development";

export const firebaseConfig = {
  apiKey: development
    ? process.env.REACT_APP_FIREBASE_KEY
    : "AIzaSyAOO77q6ywn-pHqrkoY6Xi1hNPrXtsG07E",
  authDomain: "my-day-c1745.firebaseapp.com",
  databaseURL: "https://my-day-c1745.firebaseio.com",
  projectId: "my-day-c1745",
  storageBucket: "my-day-c1745.appspot.com",
  messagingSenderId: "784576081631",
  appId: "1:784576081631:web:f24d7ffe61640c66d4036a",
  measurementId: "G-WVZG648TDB",
};

console.log(firebaseConfig.apiKey);

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
