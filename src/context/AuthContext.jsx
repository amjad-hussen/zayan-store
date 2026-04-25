"use client";

import { createContext, useEffect, useState } from "react";
import app from "@/firebase/firebase.config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile, // 🔥 ADD THIS
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ register + name save
  const registerUser = async (email, password, name) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    // 🔥 SAVE NAME
    await updateProfile(result.user, {
      displayName: name,
    });

    return result;
  };

  // login
  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // google login
  const googleLogin = () =>
    signInWithPopup(auth, googleProvider);

  // logout
  const logout = () => signOut(auth);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const value = {
    user,
    loading,
    registerUser,
    loginUser,
    googleLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}