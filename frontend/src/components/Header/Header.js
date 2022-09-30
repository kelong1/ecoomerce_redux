import React from 'react'
import{Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <h1>Ecommerce</h1>
        </div>
        <div className='nav'>
            <ul>
                <li>
                    <Link to="/" className='li'>Home</Link>
                </li>
                <li>
                <Link to="/Login"className='li'>Login</Link>
                </li>
                <li>
                <Link to="/Register"className='li'>Register</Link>
                </li>
                <li>
                <Link to="/AddProduct"className='li'>NewProduct</Link>
                </li>
                
              
            </ul>
        </div>
    </div>
  )
}

export default Header