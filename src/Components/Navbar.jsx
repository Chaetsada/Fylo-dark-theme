import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <nav className='container flex h-[10vh] items-center justify-center px-4'>
            <img className='w-[120px] h-[40px]' src={logo} alt="logo-icon" />
            <ul className='flex ml-auto space-x-5'>
                <li><a href="#">Feature</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Sign In</a></li>
            </ul>
        </nav>
    )
}

export default Navbar