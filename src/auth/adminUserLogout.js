import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

let error = null;

const logOut = async () => {
  error = null;
  try {
    await signOut(auth);
  } catch (err) {
    error = err.message;
  }
};

const userLogOut = () => {
  return { error, logOut };
};

export default userLogOut;
