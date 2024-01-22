import React, { useMemo, useState } from "react";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";
import Profile from "../pages/Profile"

export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = React.useState({})
  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])
  return (
    <div>
      <Topbar />
      <Profile currentUser={currentUser}/>
    </div>
  )
}