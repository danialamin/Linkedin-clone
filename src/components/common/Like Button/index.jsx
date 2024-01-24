/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import "./index.scss"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { likePost, getLikesByUser } from "../../../api/FirestoreAPI"
import { useMemo } from 'react'

export default function LikeButton({userId, postId}) {
  const [likesCount, setLikesCount] = useState(0)
  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    likePost(userId, postId, liked)
  }
  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount)
  }, [userId, postId])
  return (
    <div className='like-container' onClick={handleClick}>
      <p>{likesCount} People like this post</p>
      <div className='hr-line'>
        <hr />
      </div>
      <div className='likes-inner'>
        {liked ? <AiFillHeart size={30} color='red' /> : <AiOutlineHeart size={30} />}
      </div>

      <p className={liked ? 'blue' : 'black'}>Like</p>
    </div>
  )
}
