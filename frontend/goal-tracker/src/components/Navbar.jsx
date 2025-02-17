import React, { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

    // Toggle mobile menu visibility
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='bg-gray-900 text-white p-4 flex justify-between items-center border-b-1 border-white'>
            <div className='text-2xl font-bold'>Goal Tracker</div>


            <button 
                className="md:hidden text-2xl" 
                onClick={toggleMobileMenu}
            >
                ☰
            </button>

            <ul className='hidden md:flex space-x-6'>
                <li><a href="/" className='hover:text-gray-300 transition'>Home</a></li>
                <li><a href="/create" className='hover:text-gray-300 transition'>Add</a></li>
            </ul>


            <ul className={`md:hidden absolute top-16 left-0 w-full bg-gray-900 text-white space-y-4 p-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <li><a href="/" className='hover:text-gray-300 transition'>Home</a></li>
                <li><a href="/create" className='hover:text-gray-300 transition'>Add</a></li>
            </ul>


            <div>
                <button className="text-2xl p-2 cursor-pointer" onClick={toggleTheme}>
                    {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
