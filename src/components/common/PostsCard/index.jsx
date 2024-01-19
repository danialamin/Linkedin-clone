/* eslint-disable react/prop-types */
import React from 'react'
import "./index.scss"

export default function PostsCard(props) {
  return (
    <div className='posts-card'>
      <p className='timestamp'>{props.posts.timeStamp}</p>
      <p>PostsCard</p>
    </div>
  )
}
