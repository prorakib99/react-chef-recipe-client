import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { Toaster } from 'react-hot-toast';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

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

    const authInfo = {
        user,
        createUser,
        updateProfileInfo,
        loginUser
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
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