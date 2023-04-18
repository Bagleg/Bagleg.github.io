import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar() {
  return (
    <div>
        <ul className='list'>
            <Link to="/">
                <li>
                    <h4>
                        Home
                    </h4>
                </li>
            </Link>
            <Link to="/goal">
                <li>
                    <h4>
                        My goal
                    </h4>
                </li>
            </Link>
            <Link to="/past">
                <li>
                    <h4>
                        Past Research
                    </h4>
                </li>
            </Link>
            <Link to="/research">
                <li>
                    <h4>
                        My Research
                    </h4>
                </li>
            </Link>
            <Link to="/conclusion">
                <li>
                    <h4>
                        Conclusion
                    </h4>
                </li>
            </Link>
        </ul>
    </div>
  )
}
