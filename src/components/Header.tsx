import React from 'react';
import "./Header.css";
import headerImg from "../assets/pexels-jackson-jorvan-605494.jpg"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='smallHeaderTitle'>React & Node</span>
            <span className='largeHeaderTitle'>Blog</span>
        </div>
        <img
        className='headerImage'
        src={headerImg}
        alt='meadow'/>
    </div>
  )
}
