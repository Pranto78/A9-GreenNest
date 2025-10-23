// src/Provider/AuthProvider.jsx
import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Create user
  const createUser = (email, password, name, photo) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
    .then(
      (result) => {
        if (name || photo) {
          return updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          }).then(() => {
            setUser({ ...result.user });
          });
        }
      }
    );
  };

  // 🔹 Login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 🔹 Google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // 🔹 Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // 🔹 Track user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const userData = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logOut,
  };

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
