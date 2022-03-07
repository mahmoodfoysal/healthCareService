import initilizationAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

// firebase initilization
initilizationAuthentication();

// google provider 
const googleProvider = new GoogleAuthProvider();

// get auth 
const auth = getAuth();

const useFirebase = () => {
// declear states here 
const [user, setUser] = useState([]);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isLoading, setIsLoading] = useState(true);


    // handle registration 
    const handleRegistration = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            setUser(user);
            setUserName();
            console.log(user);
        })
    }

    // handle login 
    const handleLogin = (e) => {
        // e.preventDefault();
        return signInWithEmailAndPassword(auth, email, password)

    }

    // set user name 
    const setUserName = () => {
        updateProfile(auth.currentUser, {displayName: name})
            .then(result => { })
        
    }

    // full name input 
    const handleNameChange = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
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
        const auth = getAuth();
        return signInWithPopup(auth, googleProvider)
        
    }
    // onAuthChange 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
            setIsLoading(false)
          });
    }, [])
    // registration 


    // logOut 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .finally(() => setIsLoading(false))
    }
    return {
        googleSignIn,
        user,
        setUser,
        handleRegistration,
        handleLogin,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        logOut
    }
}

export default useFirebase;