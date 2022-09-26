import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCCC8JMm6sjUwA3Bu7sOi1QJQ7Xv2t44rw",

  authDomain: "zelar-practise.firebaseapp.com",

  projectId: "zelar-practise",

  storageBucket: "zelar-practise.appspot.com",

  messagingSenderId: "903370382495",

  appId: "1:903370382495:web:4d3d689d2bae49915c16aa",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const storage = getStorage(app);

export { auth, app, db };
