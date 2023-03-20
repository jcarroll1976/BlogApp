import React from 'react'
import "./Post.css"
import artificialIntelImage from "../assets/pexels-thisisengineering-3861969.jpg"

export default function Post() {
  return (
    <div className='post'>
        <img src={artificialIntelImage} alt="" />
        <div className="postInfo">
            <div className="postCategories"></div>
        </div>
    </div>
  )
}
