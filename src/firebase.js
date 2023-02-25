// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHx_1ecI_mSen_gFvLFLz49tj7yXoFEP4",
  authDomain: "chatapp-602b7.firebaseapp.com",
  projectId: "chatapp-602b7",
  storageBucket: "chatapp-602b7.appspot.com",
  messagingSenderId: "125356297159",
  appId: "1:125356297159:web:94895859ed9e4de52927e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()