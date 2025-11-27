// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";
import { getStorage, type FirebaseStorage } from "firebase/storage";
import { getDatabase, type Database } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw5ei9emypQefTo91rUuQsxSec6MyAPsY",
  authDomain: "studio-6440466613-89ca6.firebaseapp.com",
  projectId: "studio-6440466613-89ca6",
  storageBucket: "studio-6440466613-89ca6.appspot.com",
  messagingSenderId: "97580529198",
  appId: "1:97580529198:web:0c496e23af214f64d691bf",
  databaseURL: "https://studio-6440466613-89ca6-default-rtdb.firebaseio.com"
};

// Initialize Firebase for SSR
const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db: Firestore = getFirestore(app);
const auth: Auth = getAuth(app);
const storage: FirebaseStorage = getStorage(app);
const database: Database = getDatabase(app);

export { app, db, auth, storage, database };
