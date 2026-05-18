"use client";

import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      }
    );

    return () => {
      unsubscribe();
    };

  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    googleLogin,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;