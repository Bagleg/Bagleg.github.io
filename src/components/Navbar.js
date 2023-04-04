import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
        <ul className='list'>
           <a href='/'>
                <li>
                    <h4>
                        Home
                    </h4>
            </li>
            </a>
            <a href='/goal'>
                <li>
                    <h4>
                        My goal
                    </h4>
                </li>
            </a>
            <a href='/past'>
                <li>
                    <h4>
                        Past Research
                    </h4>
                </li>
            </a>
            <a href='/research'>
                <li>
                    <h4>
                        My Research
                    </h4>
                </li>
            </a>
            <a href='/conclusion'>
                <li>
                    <h4>
                        Conclusion
                    </h4>
                </li>
            </a>
        </ul>
    </div>
  )
}
