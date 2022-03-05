import initilizationAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

// firebase initilization
initilizationAuthentication();

// google provider 
const googleProvider = new GoogleAuthProvider();

// get auth 
const auth = getAuth();

const useFirebase = () => {
// declear states here 
const [user, setUser] = useState({});
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


    // handle registration 
    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            setUser(user);
        })
    }

    // email address input 
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    // password input 
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    // google authentication 
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUser(user);
        })
    }
    // onAuthChange 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
    }, [])
    // registration 


    // logOut 
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }
    return {
        googleSignIn,
        user,
        setUser,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        logOut
    }
}

export default useFirebase;