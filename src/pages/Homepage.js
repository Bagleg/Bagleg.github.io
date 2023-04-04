import React from 'react'
import './Homepage.css'
import Photo from '../components/Homepage/Photo-home'
import Body from '../components/Homepage/Body-home'
import Navbar from '../components/Navbar'

export default function Homepage() {
  return (
    <div className='homepage-grid'>
        <div className='photo'>
            <Photo />
        </div>
        <div className='text'>
            <Body />
        </div>
        <div className='nav'>
            <Navbar />
        </div>
    </div>
  )
}
