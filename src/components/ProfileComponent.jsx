/* eslint-disable react/prop-types */
import React, {useState} from "react";
import ProfileCard from "./common/ProfileCard"
import ProfileEdit from "../ProfileEdit/index"

export default function ProfileComponent({ currentUser }) {
  const [isEdit, setisEdit] = useState(false)

  const onEdit = () => {
    setisEdit((prev) => !prev)
  }
  return (
    <div>
      {isEdit ? <ProfileEdit onEdit={onEdit} currentUser={currentUser} /> 
        : <ProfileCard currentUser={currentUser} onEdit={onEdit}/>}
    </div>
  )
}
