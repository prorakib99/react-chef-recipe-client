import React, { createContext } from 'react';
import { Toaster } from 'react-hot-toast';

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const authInfo = {}
    return (
        <AuthContext.Provider value={authInfo}>
            <Toaster />
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;