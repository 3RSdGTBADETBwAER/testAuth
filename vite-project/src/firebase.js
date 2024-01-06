import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDL1xrd-7ihcoryBwZZfF-hcsB6vYoZrWc",
  authDomain: "autenticationproject-bb43f.firebaseapp.com",
  projectId: "autenticationproject-bb43f",
  storageBucket: "autenticationproject-bb43f.appspot.com",
  messagingSenderId: "584528703999",
  appId: "1:584528703999:web:0989372de47c3bda49f7ca"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export { auth }