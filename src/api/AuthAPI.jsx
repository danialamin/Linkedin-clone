import { signInWithEmailAndPassword, 
        createUserWithEmailAndPassword,
        GoogleAuthProvider,
        signInWithPopup,
        signOut } from "firebase/auth"
import { auth } from "../firebaseConfig"

export function LoginAPI(email, password) {
  try {
    let response = signInWithEmailAndPassword(auth, email, password)
    return response
  }catch(err) {
    alert(err)
  }
}

export function RegisterAPI(email, password) {
  try {
    let response = createUserWithEmailAndPassword(auth, email, password)
    return response
  }catch(err) {
    alert(err)
  }
}

export function GoogleSignInAPI(email, password) {
  try {
    let googleProvider = new GoogleAuthProvider
    let res = signInWithPopup(auth, googleProvider)
    return res
  }catch(err) {
    alert(err)
  }
}

export const onLogout = () => {
  try {
    signOut(auth)
  } catch (err) {
    return err
  }
}