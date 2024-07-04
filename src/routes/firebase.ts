import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRKxq_ku45zwFElMbdHTddFfvUtWbYf_U",
  authDomain: "twitter-clone-97a0b.firebaseapp.com",
  projectId: "twitter-clone-97a0b",
  storageBucket: "twitter-clone-97a0b.appspot.com",
  messagingSenderId: "79193524121",
  appId: "1:79193524121:web:3a89b60472d2a37d7ab508",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
