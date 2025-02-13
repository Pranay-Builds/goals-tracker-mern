import React from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useTheme } from '../context/ThemeContext'

function Navbar() {

    const { theme, toggleTheme } = useTheme();

    return (
        <nav className='bg-gray-900 text-white p-4 flex justify-between items-center border-b-1 border-white'>
            <div className='text-2xl font-bold'>Goal Tracker</div>

            <ul className='hidden md:flex space-x-6'>
                <li><a href="/" className='hover:text-gray-300 transition'>Home</a></li>
                <li><a href="/add" className='hover:text-gray-300 transition'>Add</a></li>
            </ul>


            <div>
                <button className="text-2xl p-2 cursor-pointer" onClick={toggleTheme}>
                    {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
                </button>
            </div>

            
            <button className="md:hidden text-2xl">☰</button>
        </nav>
    )
}

export default Navbar