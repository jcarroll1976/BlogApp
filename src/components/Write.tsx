import React from 'react'
import {GrAddCircle } from 'react-icons/gr'
import postImage from "../assets/pexels-thisisengineering-3861969.jpg"
import './Write.css'

export default function Write() {
  return (
    <div className='write'>
        <img src={postImage} alt="" className="writeImage" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                 <GrAddCircle className="writeIcon" />
                </label>
                <input type="file" id="fileInput" style={{display:'none'}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
