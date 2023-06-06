import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

let error = null;

const signUp = async (email, password) => {
  error = null;
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Something is wrong");
    }
  } catch (err) {
    error = err.message;
    console.log(error);
  }
};

const userSignUp=()=>{
    return {error, signUp}
}

export default userSignUp;