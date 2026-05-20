"use client";

import axios from "axios";

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
    return signInWithPopup(
      auth,
      googleProvider
    );
  };

  const logOut = async () => {

    try {

      await axios.post(
        "https://pawpal-server-bay.vercel.app/logout",
        {},
        {
          withCredentials: true,
        }
      );

    } catch (error) {

      console.log(error);

    }

    return signOut(auth);

  };

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (currentUser) => {

          setUser(currentUser);

          if (currentUser?.email) {

            try {

              await axios.post(
                "https://pawpal-server-bay.vercel.app/jwt",
                {
                  email:
                    currentUser.email,
                },
                {
                  withCredentials: true,
                }
              );

            } catch (error) {

              console.log(error);

            }

          }

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
    <AuthContext.Provider
      value={authInfo}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;