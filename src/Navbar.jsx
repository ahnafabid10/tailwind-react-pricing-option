import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/home"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const links = navigationData.map(link => <li className='mr-10'><a href={link.path}>{link.name}</a></li>)
    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex' onClick={()=> setOpen(!open)}>
                {
                    open ? 
                    <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>
                }
                <ul className='md:hidden'>
                {links}
                </ul>
                
            
            <h3 className='ml-4'>My NavBar</h3>
            </span>
             
            <ul className='md:flex hidden' >
            {
            links
        }
            </ul>
        

        <button>Sign In</button>


            {/* <ul className='flex '>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/">About</a></li>
                <li className='mr-10'><a href="/">Blog</a></li>
            </ul> */}
        </nav>
    );
};

export default Navbar;