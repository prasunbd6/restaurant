import { auth } from "../firebaseConfig"; //projectAuth
import {signInWithEmailAndPassword} from "firebase/auth"

let error = null;

const login = async (email, password) => {
  // eslint-disable-next-line
  error = null;
  try {
    const res = await signInWithEmailAndPassword(auth,email, password);
    // eslint-disable-next-line
    error = null;
    console.log(res.user);
    return res;
  } catch (err) {
    // eslint-disable-next-line
    error = err.message;
    console.log(error);
  }
};

const userLogin = () => {
  return { error, login };
};
export default userLogin;
