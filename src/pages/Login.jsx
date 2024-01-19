import LoginComponent from '../components/LoginComponent'
import React, {useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { useNavigate } from "react-router-dom"
import Loader from '../components/common/Loader'

export default function Login() {
  const [loading, setLoading] = React.useState(false)
  let navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/home")
      } else {
        setLoading(false)
    }})
  }, [])
  return (
    loading ? <Loader /> : <LoginComponent />
  )
}
