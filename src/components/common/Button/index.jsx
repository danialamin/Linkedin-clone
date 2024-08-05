/* eslint-disable react/prop-types */
import React from 'react'
import "./index.scss"

export default function Button({title, onClick}) {
  return (
    <button className='common-btn' onClick={onClick}>{title}</button>
  )
}
