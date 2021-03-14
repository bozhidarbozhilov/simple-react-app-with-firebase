import firebase from 'firebase/app';
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsG0Uki6G8PNGDwp_REcD_5tqF1Q_L-Rg",
    authDomain: "react-seen-it.firebaseapp.com",
    databaseURL: "https://react-seen-it-default-rtdb.firebaseio.com",
    projectId: "react-seen-it",
    storageBucket: "react-seen-it.appspot.com",
    messagingSenderId: "42014427246",
    appId: "1:42014427246:web:bcce57cc76506e9e4dbe7f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;