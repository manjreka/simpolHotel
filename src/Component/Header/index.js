import React from 'react'

import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

import './index.css'
const Header = () => {
    return (
        <nav className='header' >
            <div >
                <img src="https://res.cloudinary.com/dtzajnril/image/upload/v1724129022/phoenix-logo_ocmh8s.png" className='logo' alt="logo" />
            </div>
            <ul className='tabs' >
                <li>Home</li>
                <li>Order</li>
                <li>Food</li>
                <li>Restaurant</li>
                <li>Testimonal</li>
                <li>Contact Us</li>
            </ul>
            <div style = {{display: 'flex'}} >
                <FaWhatsapp className='icon' />
                <FaFacebookF className='icon' />
            </div>
        </nav>
    )
}

export default Header