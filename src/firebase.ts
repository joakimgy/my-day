import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOO77q6ywn-pHqrkoY6Xi1hNPrXtsG07E",
  authDomain: "my-day-c1745.firebaseapp.com",
  databaseURL: "https://my-day-c1745.firebaseio.com",
  projectId: "my-day-c1745",
  storageBucket: "my-day-c1745.appspot.com",
  messagingSenderId: "784576081631",
  appId: "1:784576081631:web:f24d7ffe61640c66d4036a",
  measurementId: "G-WVZG648TDB",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
