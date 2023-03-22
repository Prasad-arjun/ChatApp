import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDoAtf-vCFLUB0C9k-4kP74L2UkTzInMC8",
  authDomain: "gossiphub-arjunp.firebaseapp.com",
  projectId: "gossiphub-arjunp",
  storageBucket: "gossiphub-arjunp.appspot.com",
  messagingSenderId: "666994685572",
  appId: "1:666994685572:web:5a9fa90ec174095fa234d1",
  measurementId: "G-ER1WM4RR2C",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
/* 
const provider = new GoogleAuthProvider(); */

/* export const signWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name" ,name)
      localStorage.setItem("email" ,email)
      localStorage.setItem("profilePic" ,profilePic)
    })
    .catch((error) => {
     alert(error);
    });
}; */
