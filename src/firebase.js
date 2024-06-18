
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCq8gEoN8dHjDVBBzczpq0jjc9WAbs-T2w",
  authDomain: "chat-47fd5.firebaseapp.com",
  projectId: "chat-47fd5",
  storageBucket: "chat-47fd5.appspot.com",
  messagingSenderId: "606819201253",
  appId: "1:606819201253:web:15dbd26f9fd0882963e40c",
  measurementId: "G-S5T9SLMFZZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();


const analytics = getAnalytics(app);