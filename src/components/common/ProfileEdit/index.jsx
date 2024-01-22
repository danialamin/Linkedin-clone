/* eslint-disable react/prop-types */
import React from 'react'
import "./index.scss"
import { editProfile } from '../../../api/FirestoreAPI'
import { useState } from 'react'

export default function ProfileEdit({onEdit, currentUser}) {
  const [editInputs, setEditInputs] = useState({})
  const getInput = (event) => {
    setEditInputs((prev) => { return({...prev, [event.target.name]: event.target.value})})
  }
  const updateProfileData = async () => {
    await editProfile(currentUser?.userID, editInputs)
    await onEdit()
  }
  return (
    <div className='profile-card'>
      <div className="edit-btn">
        <button onClick={onEdit}>Edit</button>
      </div>
      <div className='profile-edit-inputs'>
        <input onChange={getInput} className="common-input" name="name" placeholder='Name' />
        <input onChange={getInput} className="common-input" name="location" placeholder='Location' />
        <input onChange={getInput} className="common-input" name="headline" placeholder='Bio' />
        <input onChange={getInput} className="common-input" name="company" placeholder='Company' />
        <input onChange={getInput} className="common-input" name="college" placeholder='College' />
      </div>
      <div className='save-container'>
        <button className='save-btn' onClick={updateProfileData}>Save</button>
      </div>
    </div>
  )
}
