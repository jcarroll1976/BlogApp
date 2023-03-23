import React from 'react'
import './Settings.css'
import Sidebar from './Sidebar'
import profilePic from '../assets/Joshpic.jpg'
import {BiUserCircle} from 'react-icons/bi'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsProfilePicture">
                    <img src={profilePic} alt="" />
                    <label htmlFor="fileInput">
                    <BiUserCircle className='settingsProfilePictureIcon' />
                    </label>
                    <input type="file" id="fileInput" style={{display:'none'}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='Josh' />
                <label>Email</label>
                <input type="email" placeholder='carrolljosh1976@gmail.com' />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
