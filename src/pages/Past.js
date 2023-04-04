import React from 'react'
import './Past.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Intro from '../components/Past/Intro-past'
import Toppings from '../components/Past/Toppings-past'
import Regional from '../components/Past/Regional-past'
import Other from '../components/Past/Other-past'
import Conclusion from '../components/Past/Conclusion'

export default function Past() {
  return (
    <div className='past-grid'>
        <div className='past-header'>
            <Header title={"Existing Research"} />
        </div>
        <div className='past-nav'>
            <Navbar />
        </div>
        <div className='past-intro'>
            <Intro />
        </div>
        <div className='toppings-past'>
            <Toppings />
        </div>
        <div className='regional-past'>
            <Regional />
        </div>
        <div className='other-past'>
            <Other />
        </div>
        <div className='conclusion-past'>
            <Conclusion />
        </div>
    </div>
  )
}
