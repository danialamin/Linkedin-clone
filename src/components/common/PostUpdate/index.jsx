import React, {useMemo} from 'react'
import "./index.scss"
import ModalComponent from "../Modal"
import { postStatus, getStatus } from "../../../api/FirestoreAPI"
import PostsCard from '../PostsCard' 
import { getCurrentTimeStamp } from '../../../helpers/useMoment'

export default function PostStatus() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [allStatuses, setAllStatus] = React.useState([])
  const [status, setStatus] = React.useState('')
  let userEmail = localStorage.getItem('userEmail')
  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp('LLL'),
      userEmail: userEmail
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
            <PostsCard posts={posts} key={posts}/>
          )
        })}
      </div>
    </div>
  )
}
