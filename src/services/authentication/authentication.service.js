import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { MyApp } from "../../../App";

const auth = getAuth(MyApp);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
