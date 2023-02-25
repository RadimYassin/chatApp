// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { Firestore, getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHx_1ecI_mSen_gFvLFLz49tj7yXoFEP4",
  authDomain: "chatapp-602b7.firebaseapp.com",
  projectId: "chatapp-602b7",
  storageBucket: "chatapp-602b7.appspot.com",
  messagingSenderId: "125356297159",
  appId: "1:125356297159:web:94895859ed9e4de52927e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth=getAuth()
export const storage = getStorage();
export const db = Firestore()