import React from 'react'
import { GrAdd } from 'react-icons/gr'
import './Write.css'

export default function Write() {
  return (
    <div className='write'>
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                 <GrAdd />
                </label>
                <input type="file" id="fileInput" style={{display:'none'}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' className='writeInput writeText'></textarea>
            </div>
        </form>
    </div>
  )
}
