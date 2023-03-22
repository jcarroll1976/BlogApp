import React from 'react'
import './SinglePost.css'
import postImage from "../assets/pexels-thisisengineering-3861969.jpg"
import {AiFillEdit,AiFillDelete} from "react-icons/ai"

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={postImage} alt="" className="singlePostImage" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit.
                <div className="singlePostEditContainer">
                    <AiFillEdit className='singlePostIcon'/>
                    <AiFillDelete className='singlePostIcon'/>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Josh</b></span>
                <span className="singlePostDate">1 hour ago</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusamus animi quos veritatis, 
                    suscipit quo excepturi voluptatem vitae culpa? Voluptatibus nam eius minus aspernatur eveniet, 
                    repudiandae tenetur atque nihil iusto.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusamus animi quos veritatis, 
                    suscipit quo excepturi voluptatem vitae culpa? Voluptatibus nam eius minus aspernatur eveniet, 
                    repudiandae tenetur atque nihil iusto.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusamus animi quos veritatis, 
                    suscipit quo excepturi voluptatem vitae culpa? Voluptatibus nam eius minus aspernatur eveniet, 
                    repudiandae tenetur atque nihil iusto.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusamus animi quos veritatis, 
                    suscipit quo excepturi voluptatem vitae culpa? Voluptatibus nam eius minus aspernatur eveniet, 
                    repudiandae tenetur atque nihil iusto.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusamus animi quos veritatis, 
                    suscipit quo excepturi voluptatem vitae culpa? Voluptatibus nam eius minus aspernatur eveniet, 
                    repudiandae tenetur atque nihil iusto.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusamus animi quos veritatis, 
                    suscipit quo excepturi voluptatem vitae culpa? Voluptatibus nam eius minus aspernatur eveniet, 
                    repudiandae tenetur atque nihil iusto.
                </p>
            </div>
        </div>
    </div>
  )
}
