import React from 'react';
import { logo } from '../assets';

const Navbar = () => {
    return (
        <nav className="bg-primary p-4 fixed w-full top-0 z-10 font-Nunito">
            <div className="container mx-auto flex items-center justify-between ">
                <div className="text-white   font-bold flex gap-2 items-center cursor-pointer">
                    <img src={logo} alt="logo" className="h-10 w-10" /><span className='text-2xl  hover:text-gray-800 '>OMGVA</span>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className=" hover:text-gray-800 text-white ">Login</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
