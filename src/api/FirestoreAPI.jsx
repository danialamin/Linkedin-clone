import { firestore } from "../firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
  setDoc,
  deleteDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";

let dbRef = collection(firestore, 'posts')

export const postStatus = (object) => {
  addDoc(dbRef, object)
  .then((res) => {
    toast.success('Document has been added successfully')
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getStatus = (setAllStatus) => {
  onSnapshot(dbRef, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id }
      })
    )
  })
}