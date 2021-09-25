import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="Header">
           <div className="logo headerComponent">
               logo
           </div>

           <div className="headerComponent">
               Home
           </div>

           <div className="headerComponent">
               About
           </div>

           <div className="headerComponent">
               Services
           </div>

           <div className="headerComponent">
               Contact
           </div>
        </div>
    )
}

export default Header
