import firebase from 'firebase/app';
import 'firebase/auth';
import storage from "./storage";

const url = "https://react-seen-it-default-rtdb.firebaseio.com";
const firebaseAuth = {

    registerUser: (credentials) => {
        return firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
    },
    loginUser: (credentials) => {
        return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
    },
    isLoggedIn: ()=>firebase.auth().onAuthStateChanged(user=>{
        if(user) {
            storage.saveUser(user);
            return user;
        }
        return null;
    }),
    logoutUser: () => firebase.auth().signOut(),
    getCurrentUser: async ()=> {
        const user = await firebase.auth().currentUser;
        debugger;
        return user;
    }
}

export default firebaseAuth;