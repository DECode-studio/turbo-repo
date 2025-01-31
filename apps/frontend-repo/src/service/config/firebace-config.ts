import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyAi_GBLbMbjMp2c30OnyTkNnBeRHDfMe1M",
    authDomain: "test-app-4ca3c.firebaseapp.com",
    projectId: "test-app-4ca3c",
    storageBucket: "test-app-4ca3c.firebasestorage.app",
    messagingSenderId: "35176540202",
    appId: "1:35176540202:web:423577e2cfd505e2aebb53",
    measurementId: "G-770B28Q30J"
  };
  
  const firebase = initializeApp(config, 'my-finance');
  export const database = getFirestore(firebase);