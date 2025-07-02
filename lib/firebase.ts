// lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBiwjpCBn40NafqnOwEbsvAGgxQZFsvQGA",
  authDomain: "yashaweb-d644a.firebaseapp.com",
  projectId: "yashaweb-d644a",
  storageBucket: "yashaweb-d644a.appspot.com",
  messagingSenderId: "705320832063",
  appId: "1:705320832063:web:fd6cdcebbf1da96f40fc8a",
  measurementId: "G-7Y705DDTP6"
};

// Prevent re-initialization in dev mode (Next.js hot reload)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Export Firestore instance
export const db = getFirestore(app);
