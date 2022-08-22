import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFILLEn-rZIZDrL4JMwsQ4r4BYke7VQYA",
  authDomain: "crwn-clothing-db-49901.firebaseapp.com",
  projectId: "crwn-clothing-db-49901",
  storageBucket: "crwn-clothing-db-49901.appspot.com",
  messagingSenderId: "924071953960",
  appId: "1:924071953960:web:b7f3948fc692019201171d",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
