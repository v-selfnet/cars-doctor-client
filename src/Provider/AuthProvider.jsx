import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signin
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user staatus observing
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current Uset Status:', currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    const getInfo = {
        user,
        loading, 
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={getInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;