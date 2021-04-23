import firebase from "firebase";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAzCEz38ftT294k8C64wP04dIccB7DAjxc",
  authDomain: "reac-native-firebase-e4219.firebaseapp.com",
  projectId: "reac-native-firebase-e4219",
  storageBucket: "reac-native-firebase-e4219.appspot.com",
  messagingSenderId: "764835175865",
  appId: "1:764835175865:web:8846da59ca2049e431aa68",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default {
  firebase,
  db,
};
