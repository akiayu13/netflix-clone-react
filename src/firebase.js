import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID,
  // apiKey: "AIzaSyDv30nh7c6yvkBksw_DuFJLN0XHfdb2Fyk",
  // authDomain: "netflix-clone-91959.firebaseapp.com",
  // projectId: "netflix-clone-91959",
  // storageBucket: "netflix-clone-91959.appspot.com",
  // messagingSenderId: "909239482400",
  // appId: "1:909239482400:web:534bb5116f517e2733e445",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
