import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

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
    const signInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }
    const signInWithGithub = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider);
    }
    const logOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    const handleGoogleLogin = () => {
        const loader = toast.loading('Waiting for Login');
        () => loader;

        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            toast.dismiss(loader);
            toast.success('User Login Successful');
        })
        .catch(error => {
            console.error(error)
            toast.dismiss(loader);
            toast.error(error.message)
        })
    }

    const handleGithubLogin = () => {
        const loader = toast.loading('Waiting for Login');
        () => loader;

        signInWithGithub()
        .then(result => {
            const loggedUser = result.user;
            toast.dismiss(loader);
            toast.success('User Login Successful');
        })
        .catch(error => {
            console.error(error)
            toast.dismiss(loader);
            toast.error(error.message)
        })
    }

    const authInfo = {
        user,
        loader,
        createUser,
        updateProfileInfo,
        loginUser,
        handleGoogleLogin,
        handleGithubLogin,
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