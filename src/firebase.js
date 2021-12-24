import { collection, QuerySnapshot } from '@firebase/firestore';
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCGyCh42-XpeJY4OG5sH9HgzsJ9JdUE9dM",
    authDomain: "final-assignment-5abc7.firebaseapp.com",
    projectId: "final-assignment-5abc7",
    storageBucket: "final-assignment-5abc7.appspot.com",
    messagingSenderId: "296396049185",
    appId: "1:296396049185:web:54f3e99f4c09fc08334c60"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

/*export default firebaseConfig;*/