import React from 'react'
import './Goal.css'
import Header from '../components/Header'
import Photo from '../components/Goal/Photo-goal'
import Body from '../components/Goal/Body-home'
import Navbar from '../components/Navbar'

export default function Goal() {
  return (
    <div className='goal-grid'>
       <div className='header'>
          <Header title={"Project Objective"} />
       </div>
       <div className='image'>
          <Photo />
       </div>
       <div className='body'>
          <Body />
       </div>
       <div className='nav'>
          <Navbar />
       </div>
    </div>
  )
}
