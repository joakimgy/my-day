import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { User } from "./providers/UserProvider";

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

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (
  user: User,
  additionalData: firebase.firestore.DocumentData
) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async (uid: any) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
