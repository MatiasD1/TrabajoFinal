import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDq53hG6bWFChkjwfk5u2CKNg3CVVO26mQ",
  authDomain: "hotel-cf81a.firebaseapp.com",
  projectId: "hotel-cf81a",
  storageBucket: "hotel-cf81a.appspot.com",
  messagingSenderId: "485793598654",
  appId: "1:485793598654:web:38b1b29644220d60b6a2ef"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
