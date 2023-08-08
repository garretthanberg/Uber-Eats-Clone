import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyBj40JNljR11ZJfM1l-pnVu2QFWncM1TIc",
  authDomain: "rn-uber-eats-clone-gh.firebaseapp.com",
  projectId: "rn-uber-eats-clone-gh",
  storageBucket: "rn-uber-eats-clone-gh.appspot.com",
  messagingSenderId: "909470529779",
  appId: "1:909470529779:web:9b7fd2276f861203e61f86",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
