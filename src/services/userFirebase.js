import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// 🔥 Firebase para USUÁRIOS do MsBinary (projeto separado)
const userFirebaseConfig = {
  apiKey: "AIzaSyB04XZEPsxmdLbT8Jm6ElQ9BQmbWDCctjw",
  authDomain: "msbinaryelite.firebaseapp.com",
  projectId: "msbinaryelite",
  storageBucket: "msbinaryelite.firebasestorage.app",
  messagingSenderId: "169713506243",
  appId: "1:169713506243:web:24cd6ee612c015ce798f76",
  measurementId: "G-V61ZD8MMKF"
};

let userApp;
const existingUserApp = getApps().find(app => app.name === 'users');

if (existingUserApp) {
  userApp = existingUserApp;
} else {
  userApp = initializeApp(userFirebaseConfig, "users");
}

export const auth = getAuth(userApp);
export const userDb = getFirestore(userApp);
