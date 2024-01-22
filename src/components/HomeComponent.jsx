import React from 'react'
import PostStatus from './common/PostUpdate'

// eslint-disable-next-line react/prop-types
export default function HomeComponent({currentUser}) {
  return (
    <div className='home-component'>
      <PostStatus currentUser={currentUser}/>
    </div>
  )
}
