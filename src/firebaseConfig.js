// Importa la función para inicializar la aplicación Firebase
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"; 

// Configuración con los datos obtenidos de la consola de Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyDq53hG6bWFChkjwfk5u2CKNg3CVVO26mQ",
  authDomain: "hotel-cf81a.firebaseapp.com",
  projectId: "hotel-cf81a",
  storageBucket: "hotel-cf81a.appspot.com",
  messagingSenderId: "485793598654",
  appId: "1:485793598654:web:38b1b29644220d60b6a2ef"
};

// Inicializa Firebase con la configuración proporcionada
const app = initializeApp(firebaseConfig); 
// Obtiene la instancia de Firestore asociada a la aplicación de Firebase
const db = getFirestore(app); 

export { db }; // Exporta la instancia de Firestore para que pueda ser usada en otros archivos

