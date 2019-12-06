import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnCFd2xtTOdk583jRMETclzIRFUutCdNo",
  authDomain: "gustbuddy-ac5c8.firebaseapp.com",
  databaseURL: "https://gustbuddy-ac5c8.firebaseio.com",
  projectId: "gustbuddy-ac5c8",
  storageBucket: "gustbuddy-ac5c8.appspot.com",
  messagingSenderId: "850830487849",
  appId: "1:850830487849:web:7eb4726bcfc83593d08738",
  measurementId: "G-E6G122XJLB"
}

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;