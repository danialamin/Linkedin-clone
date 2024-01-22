import React, {useMemo} from 'react'
import Home from '../pages/Home'
import Topbar from '../components/common/Topbar'
import { getCurrentUser } from '../api/FirestoreAPI'

export default function HomeLayout() {
  const [currentUser, setCurrentUser] = React.useState({})
  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])
  return (
    <div>
      <Topbar />
      <Home currentUser={currentUser}/>
    </div>
  )
}
