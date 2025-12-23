// src/firebase.js 
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = { 
apiKey: "SU_CLAVE_API" , 
authDomain: "SU_DOMINIO_AUTH" , 
projectId: "SU_ID_PROYECTO" , 
storageBucket: "SU_DEPÓSITO_DE_ALMACENAMIENTO" , 
messagingSenderId: "SU_ID_REMITENTE_DE_MENSAJERÍA" , 
appId: "SU_ID_DE_APP" 
}; 

const app = initializeApp(firebaseConfig); 
const db = getFirestore(app); 
const auth = getAuth(app); 
export { db, auth };