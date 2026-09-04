// Firebase core imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC3XScXK6LoJPrvdWcK7g2Laac_cvRpPig",
  authDomain: "linyon-306dd.firebaseapp.com",
  projectId: "linyon-306dd",
  storageBucket: "linyon-306dd.firebasestorage.app",
  messagingSenderId: "205315838320",
  appId: "1:205315838320:web:8364be1edb018d94c23fb5",
  measurementId: "G-E99EQVMQ8P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
