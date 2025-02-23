"use client"
import React from 'react';

import Link from "next/link";

const Navbar=()=>
{
    return(
        <div className="top-0 bg-gray-200 w-full p-4">
      <nav className="flex justify-between items-center flex-row w-full">
        <div className='text-xl font-semibold'>Transliterall Syncing app</div>
        <div>
        <ul className='hidden md:flex space-x-6'>
            <li>
                <Link href="/">Home</Link>
                
            </li>
            
        </ul>
        </div>
        <div>
          <ul className='flex space-x-6 mr-6'>
          <li>
                <Link href="/Login">Login</Link>
            </li>
            <li>
                <Link href="/Register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
        </div>

    )
}

export default Navbar;