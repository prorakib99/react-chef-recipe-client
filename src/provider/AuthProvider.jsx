import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { Toaster } from 'react-hot-toast';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateProfileInfo = (createdUser, name, photoURL) => {
        return updateProfile(createdUser, {
            displayName: name, photoURL: photoURL
          })
    }
    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        loader,
        createUser,
        updateProfileInfo,
        loginUser,
        logOut
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])



    return (
        <AuthContext.Provider value={authInfo}>
            <Toaster />
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;