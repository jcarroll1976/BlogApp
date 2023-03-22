import React from 'react'
import Sidebar from './Sidebar'
import './Single.css'
import SinglePost from './SinglePost'

export default function Single() {
  return (
    <div className='single'>
        <SinglePost />
        <Sidebar />
    </div>
  )
}
