import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyArReAuSxobQHOprk87Fte6NmJSVAKcND0",
  authDomain: "talent-exchange-4456e.firebaseapp.com",
  projectId: "talent-exchange-4456e",
  storageBucket: "talent-exchange-4456e.firebasestorage.app",
  messagingSenderId: "617029447041",
  appId: "1:617029447041:web:35beb28f9949e2fb594c80"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
