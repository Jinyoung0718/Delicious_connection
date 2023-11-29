import firebase from "firebase/app"
import "firebase/auth" // 인증
import "firebase/database" // DB
import "firebase/storage" // 파일 저장


const firebaseConfig = {
    apiKey: "AIzaSyDOO5_dL_dW2THGcM7qG_gcWPOHX2fhYL8",
    authDomain: "delicious-connection.firebaseapp.com",
    projectId: "delicious-connection",
    storageBucket: "delicious-connection.appspot.com",
    messagingSenderId: "916116594464",
    appId: "1:916116594464:web:9526675f1455cb08e7c145",
    measurementId: "G-PLE3V989PF"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);