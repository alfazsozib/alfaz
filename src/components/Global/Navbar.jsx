import React from 'react'
import Logo from "../assets/logo/LOGO.png"
import MenuIcon from "../assets/icons/menu.png"
import BG from './BG'


function Navbar() {
  return (
    <>
    <div className='container'>
        <div className='logoSection flex justify-between items-center' >
            <img className='cursor-pointer' src={Logo} alt="Logo" /> 
            <img className='h-6 cursor-pointer' width={40} src={MenuIcon} alt="Menu" />
        </div>        
    </div>
    </>
  )
}

export default Navbar