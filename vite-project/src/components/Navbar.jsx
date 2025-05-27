import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div>
            <h3 className='logo'>ChillDV</h3>
        </div>
        <div className='nav-items'>
            <p>Icecreams</p>
            <p>About</p>
            <p>Contact</p>
            <p>Dairy Shop</p>
        </div>
        <div className='icon'>
        <GiHamburgerMenu  size={24}/>
        </div>
    </div>
  )
}

export default Navbar