import React from 'react'
import './Sidebar.css'
import myPic from "../assets/Joshpic.jpg"
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className='profileImage' src={myPic} alt="Me" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla voluptate,
               quibusdam harum delectus hic!
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Movies</li>
                <li className="sidebarListItem">Tech</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <FaFacebookF className='sidebarIcon' />
                <BsTwitter className='sidebarIcon' />
                <AiFillInstagram className='sidebarIcon' />
            </div>
        </div>
    </div>
  )
}
