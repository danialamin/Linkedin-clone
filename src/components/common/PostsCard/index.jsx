/* eslint-disable react/prop-types */
import React from 'react'
import "./index.scss"
import { useNavigate } from "react-router-dom"
import LikeButton from '../Like Button'
import {getCurrentUser} from "../../../api/FirestoreAPI"
import { useMemo } from 'react'

export default function PostsCard(props) {
  let navigate = useNavigate()
  const [currentUser, setCurrentUser] = React.useState({})
  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])
  return (
    <div className='posts-card'>
      <p 
      className='name' 
      onClick={() => navigate('/profile', {
        state: {id: props.posts?.userID, email: props.posts.userEmail}
      })}>
        {props.posts.userName}</p>
      <p className='timestamp'>{props.posts.timeStamp}</p>
      <p>PostsCard</p>

      <LikeButton userId={currentUser?.id} postId={props.posts.id} />
    </div>
  )
}
