import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// ----------------------------------------------------------------------------------------------------------------- Create Context
export const UserAuthContext = createContext();

// ----------------------------------------------------------------------------------------------------------------- Use Context
export function useUserAuthContext() {
  return useContext(UserAuthContext);
}

// ------------------------------------------------------------ ----------------------------------------------------- Use Context Provider
export function UserAuthContextProvider(props) {
  const [user, setUser] = useState("");

  //Register
  function Register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //Login
  function Login(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // Save the token/key to local storage
        const token = userCredential.accessToken; // or any other property that contains the token/key
        localStorage.setItem("token", token);
      }
    );
  }

  //Logout
  function Logout() {
    localStorage.removeItem("token");
    return signOut(auth);
  }
  //
  useEffect(
    () => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const UserAuthContextValues = { user, Register, Login, Logout };

  return (
    <UserAuthContext.Provider value={UserAuthContextValues}>
      {props.children}
    </UserAuthContext.Provider>
  );
}
