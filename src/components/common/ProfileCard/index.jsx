/* eslint-disable react/prop-types */
import React, {useState} from "react";
import "./index.scss"
import ProfileEdit from "../ProfileEdit/index"
import { getStatus } from "../../../api/FirestoreAPI"
import { getSingleStatus, getSingleUser } from "../../../api/FirestoreAPI"
import { useMemo } from "react";
import PostsCard from "../PostsCard";

export default function ProfileCard({currentUser, onEdit}) {
  const [allStatuses, setAllStatus] = useState([])
  const [currentProfile, setCurrentProfile] = useState({})

  useMemo(() => {
    if (location?.state?.id) {
      getSingleStatus(setAllStatus, location?.state?.id)
    }
    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email)
    }
  }, [])
  return (
  <>
    <div className="profile-card">
      <div className="edit-btn">
        <button onClick={onEdit}>Edit</button>
      </div>
      <div className="profile-info">
        <div>
          <h3 className="userName">{currentUser.name}</h3>
          <p className="userEmail">{currentUser.email}</p>
          <p className="heading">{currentUser.headline}</p>
          <p>{currentUser.location}</p>
        </div>

        <div className="right-info">
          <p className="college">{currentUser.college}</p>
          <p className="company">{currentUser.company}</p>
        </div>
      </div>

      <div className="profile-status-main">
        {allStatuses.filter((item) => {
          return item.userEmail === localStorage.getItem("userEmail")
        }).map((posts) => {
          return (
            <div key={posts.id}>
              <PostsCard posts={posts}/>
            </div>
          )
        })}
      </div>
    </div>
  </>
  )
}