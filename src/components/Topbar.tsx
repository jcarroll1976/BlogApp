import {FaFacebookF } from 'react-icons/fa';
import {BsTwitter} from "react-icons/bs";
import {AiFillInstagram,AiOutlineSearch} from "react-icons/ai";
import React from 'react';
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="top">
        <div className="topLeft">
        <FaFacebookF className='topIcon' />
        <BsTwitter className='topIcon' />
        <AiFillInstagram className='topIcon' />
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE</li>
                <li className='topListItem'>LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className='topImage'
            src="https://scontent.fdet1-1.fna.fbcdn.net/v/t39.30808-6/312888249_10225288804200297_7141473085575978790_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=N1lqr6UQ1nMAX8U3Ezn&_nc_ht=scontent.fdet1-1.fna&oh=00_AfBpRw6qLIMFu36wP3_xKgnAsirvALOEhciR6D2inwBEYg&oe=641BEBB3"
            alt="Profile"/>
            <AiOutlineSearch className='searchIcon' />
        </div>
    </div>
  )
}

