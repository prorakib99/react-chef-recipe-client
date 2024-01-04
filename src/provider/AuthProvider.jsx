import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Toaster } from 'react-hot-toast';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            <Toaster />
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;