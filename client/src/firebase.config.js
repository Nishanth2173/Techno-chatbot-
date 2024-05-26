import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTZJ9j1dDFTbuogAx8iCNnXPclWRrvYMo",
  authDomain: "chatbot-d8378.firebaseapp.com",
  projectId: "chatbot-d8378",
  storageBucket: "chatbot-d8378.appspot.com",
  messagingSenderId: "75187143306",
  appId: "1:75187143306:web:b6f128cf03bd582a37e373",
  measurementId: "G-8QVC6N1500"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const goggleAuthProvider = new GoogleAuthProvider();

const db = getFirestore(firebaseApp);

export { auth, goggleAuthProvider, db };