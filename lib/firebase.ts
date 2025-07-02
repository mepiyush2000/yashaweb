// lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

// Prevent re-initialization in dev mode (Next.js hot reload)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Export Firestore instance
export const db = getFirestore(app);
