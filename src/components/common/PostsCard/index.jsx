/* eslint-disable react/prop-types */
import React from 'react'
import "./index.scss"
import { useNavigate } from "react-router-dom"

export default function PostsCard(props) {
  let navigate = useNavigate()
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
    </div>
  )
}
