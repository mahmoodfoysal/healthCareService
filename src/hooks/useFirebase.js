import initilizationAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

// firebase initilization
initilizationAuthentication();

// google provider 
const googleProvider = new GoogleAuthProvider();

// get auth 
const auth = getAuth();



const useFirebase = () => {
// declear states here 
const [user, setUser] = useState({});

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUser(user);
        })
    }
    return {
        googleSignIn,
        user,
        setUser
    }
}

export default useFirebase;