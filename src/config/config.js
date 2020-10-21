import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFmd_su2EL9fYiw_Vp27BxB_sKforva6I",
  authDomain: "react-slack-clone-6ba70.firebaseapp.com",
  databaseURL: "https://react-slack-clone-6ba70.firebaseio.com",
  projectId: "react-slack-clone-6ba70",
  storageBucket: "react-slack-clone-6ba70.appspot.com",
  messagingSenderId: "794621631610",
  appId: "1:794621631610:web:4e9c0fe8a210544e172fc3",
  measurementId: "G-9ZSDTT3B9W",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
