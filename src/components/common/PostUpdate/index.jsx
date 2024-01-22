/* eslint-disable react/prop-types */
import React, {useState, useMemo} from 'react'
import "./index.scss"
import ModalComponent from "../Modal"
import { postStatus, getStatus } from "../../../api/FirestoreAPI"
import PostsCard from '../PostsCard' 
import getUniqueID from '../../../helpers/getUniqueID'
import { getCurrentTimeStamp } from '../../../helpers/useMoment'

// eslint-disable-next-line react/prop-types
export default function PostStatus({currentUser}) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [allStatuses, setAllStatus] = React.useState([])
  const [status, setStatus] = React.useState('')
  let userEmail = localStorage.getItem('userEmail')
  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp('LLL'),
      userEmail: userEmail.email,
      userName: currentUser.name,
      postID: getUniqueID()
    }
    await postStatus(status)
    await setModalOpen(false)
    await setStatus("")
  }

  useMemo(() => {
    getStatus(setAllStatus)
  }, [])
  return (
    <div className='post-status-main'>
      <div className='post-status'>
        <button className='open-post-modal' onClick={() => setModalOpen(true)}>Start a Post</button>
      </div>

      <ModalComponent 
      status={status} 
      setStatus={setStatus} 
      modalOpen={modalOpen} 
      setModalOpen={setModalOpen}
      sendStatus={sendStatus} />

      <div>
        {allStatuses.map((posts) => {
          return (
            <div key={posts.id}>
            <PostsCard posts={posts} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
