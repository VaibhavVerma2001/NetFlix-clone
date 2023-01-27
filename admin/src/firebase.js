import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAtvTN7Cc8YFm_A-XaYKwjkwcnucTiyccI",
    authDomain: "netflix-clone-mern-vaibhav.firebaseapp.com",
    projectId: "netflix-clone-mern-vaibhav",
    storageBucket: "netflix-clone-mern-vaibhav.appspot.com",
    messagingSenderId: "1080978995010",
    appId: "1:1080978995010:web:88afd0c2c751e32b1dfadb",
    measurementId: "G-RT6QCWK9D8"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;