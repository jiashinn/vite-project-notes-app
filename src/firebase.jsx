// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALatUc9Rrvhhf1ddzb9OErcnvPvPPkNg8",
  authDomain: "notes-app-f4fc1.firebaseapp.com",
  projectId: "notes-app-f4fc1",
  storageBucket: "notes-app-f4fc1.appspot.com",
  messagingSenderId: "1044390549986",
  appId: "1:1044390549986:web:94ee519a8021e2767d81bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
