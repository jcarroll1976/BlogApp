import React from 'react'
import Header from './Header'
import Posts from './Posts'
import Sidebar from './Sidebar'
import './Home.css'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='home'>
        <Posts />
        <Sidebar />
      </div>
    </div>
  )
}
