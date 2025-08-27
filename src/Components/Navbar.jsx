import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
           
               
                {/* Button */}
                <li className='flex gap-2 justify-center text-4xl text-blue-500 mt-10 border-2 btn'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                </li>
                
            
        </div>
    );
};

export default Navbar;