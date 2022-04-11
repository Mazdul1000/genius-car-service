import { initializeApp } from "firebase/app";       
import{getAuth}  from "firebase/auth"




const firebaseConfig = {
    apiKey: "AIzaSyD8NW283sYM0dgqScR5IC87c5vFqd76kgI",
    authDomain: "genius-car-service-c3124.firebaseapp.com",
    projectId: "genius-car-service-c3124",
    storageBucket: "genius-car-service-c3124.appspot.com",
    messagingSenderId: "314682563433",
    appId: "1:314682563433:web:884eace191f4a24aa5fbf8"
  };

  const app = initializeApp(firebaseConfig);
 
  const auth = getAuth(app);

  export default auth;
