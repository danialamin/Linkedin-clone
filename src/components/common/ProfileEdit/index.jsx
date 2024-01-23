/* eslint-disable react/prop-types */
import React from 'react'
import "./index.scss"
import { AiOutlineClose } from "react-icons/ai"
import { editProfile } from '../../../api/FirestoreAPI'
import { useState } from 'react'

export default function ProfileEdit({onEdit, currentUser}) {
  const [editInputs, setEditInputs] = useState({currentUser})
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
        <AiOutlineClose className="close-icon" onClick={onEdit} size={25} />
      </div>
      <div className='profile-edit-inputs'>
        
        <label htmlFor="">Name</label>
        <input 
        onChange={getInput} 
        className="common-input" 
        name="name" 
        placeholder='Name'
        value={editInputs.name} />

        <label htmlFor="">Bio</label>
        <input 
        onChange={getInput} 
        className="common-input" 
        name="headline" 
        placeholder='Bio' 
        value={editInputs.headline}/>

        <label htmlFor="">Country</label>
        <input 
        onChange={getInput} 
        className="common-input" 
        name="country" 
        placeholder='Country' 
        value={editInputs.country} />

        <label htmlFor="">City</label>
        <input 
        onChange={getInput} 
        className="common-input" 
        name="city" 
        placeholder='City' 
        value={editInputs.city} />

        <label htmlFor="">Company</label>
        <input 
        onChange={getInput} 
        className="common-input" 
        name="industry" 
        placeholder='Industry' 
        value={editInputs.industry}/>

        <label htmlFor="">College</label>
        <input 
        onChange={getInput} 
        className="common-input" 
        name="college" 
        placeholder='College' 
        value={editInputs.college}/>

        <label htmlFor="">Website</label>
        <input 
        onChange={getInput} 
        className="common-input" 
        name="website" 
        placeholder='Website' 
        value={editInputs.website} />

        <label htmlFor="">About</label>
        <textarea 
        name="aboutMe" 
        className='common-textArea'
        onChange={getInput} 
        value={editInputs.aboutMe} 
        placeholder='About Me'
        rows={5} />

        <label htmlFor="">Skills</label>
        <input 
        onChange={getInput} 
        className="common-input" 
        name="skills" 
        placeholder='Skills' 
        value={editInputs.skills} />        
      </div>
      <div className='save-container'>
        <button className='save-btn' onClick={updateProfileData}>Save</button>
      </div>
    </div>
  )
}
