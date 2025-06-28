import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// 🔥 Firebase para LICENÇAS do SwarleysLicence (projeto separado)
const licenseFirebaseConfig = {
  apiKey: "AIzaSyDFKPLW5njyzuTl8UQqG9-0NKsP_KLBVZU",
  authDomain: "swarleyslicence.firebaseapp.com",
  projectId: "swarleyslicence",
  storageBucket: "swarleyslicence.firebasestorage.app",
  messagingSenderId: "958068281106",
  appId: "1:958068281106:web:431283b3aff9b084d0edcb",
  measurementId: "G-J16JQWCVYT"
};

let licenseApp;
const existingLicenseApp = getApps().find(app => app.name === 'license');

if (existingLicenseApp) {
  licenseApp = existingLicenseApp;
} else {
  licenseApp = initializeApp(licenseFirebaseConfig, "license");
}

export const licenseDb = getFirestore(licenseApp);
