import { createContext, useContext, useEffect, useState } from "react";
import {
  setPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  inMemoryPersistence,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [protect, setProtect] = useState(false);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setPersistence(auth, browserSessionPersistence);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleSignIn = () => {
    setPersistence(auth, inMemoryPersistence);
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        register,
        logIn,
        logOut,
        googleSignIn,
        protect,
        setProtect,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
