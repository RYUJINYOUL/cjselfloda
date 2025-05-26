import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcjXJdtsEpwxCximZrpM23aPsbZ2XCrdc",
  authDomain: "cjselfloda.firebaseapp.com",
  projectId: "cjselfloda",
  storageBucket: "cjselfloda.firebasestorage.app",
  messagingSenderId: "703997895594",
  appId: "1:703997895594:web:55c9586747a66c60f2c1d3"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
// export const auth = getAuth(app);

export default app
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()