import React, {useEffect} from 'react'
import HomeComponent from '../components/HomeComponent'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { useNavigate } from "react-router-dom"
import Loader from '../components/common/Loader'

// eslint-disable-next-line react/prop-types
export default function Home({currentUser}) {
  const [loading, setLoading] = React.useState(false)
  let navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/")
      } else {
        setLoading(false)
      }})
  }, [])
  return (
    loading ? <Loader /> : <HomeComponent currentUser={currentUser} />
  )
}
