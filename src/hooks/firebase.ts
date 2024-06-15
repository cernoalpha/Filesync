import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, push, get, child, onValue } from "firebase/database";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBD6ZsOT1P4lPZbQ0HVYHZrPGvaPk274ds",
  authDomain: "sih-e-f67f9.firebaseapp.com",
  databaseURL: "https://sih-e-f67f9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sih-e-f67f9",
  storageBucket: "sih-e-f67f9.appspot.com",
  messagingSenderId: "113038032158",
  appId: "1:113038032158:web:6b01cde8843a62e8841d0f",
  measurementId: "G-FWVHBTC79W"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage();

export { app, auth, database, storage, ref, set, push, get, child, onValue };