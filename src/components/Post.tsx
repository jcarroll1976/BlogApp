import React from 'react'
import "./Post.css"
import artificialIntelImage from "../assets/pexels-thisisengineering-3861969.jpg"

export default function Post() {
  return (
    <div className='post'>
        <img className='postImage' src={artificialIntelImage} alt="" />
        <div className="postInfo">
            <div className="postCategories">
                <span className="postCategory">Tech</span>
                <span className="postCategory">Life</span>
            </div>
            <span className='postTitle'>
                Lorem ipsum dolor sit.
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Aspernatur esse pariatur nihil nostrum assumenda sequi 
           voluptatem porro velit, voluptatibus placeat?
        </p>
    </div>
  )
}
