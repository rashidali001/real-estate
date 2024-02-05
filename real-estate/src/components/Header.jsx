import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-200 p-2'>
        <div className='flex justify-between items-center'>      
        <Link to="/">
        <div className='font-bold text-sm sm:text-2xl'>
            <span className='text-slate-500'>International</span>
            <span className='text-slate-700'> S-H</span>
        </div>
        </Link>  
        <form className='flex bg-slate-100 items-center p-1 '>
            <input type="text" placeholder='Search ...' 
            className='bg-transparent focus:outline-none rounded-lg w-32 sm:w-64'
            />
            <FaSearch />
        </form>
        <ul className='flex gap-4'>
            <Link to="/">
            <li className='hidden sm:inline hover:cursor-pointer hover:underline'>Home</li>
            </Link>
            <Link to="/about">
            <li className='hidden sm:inline hover:cursor-pointer hover:underline'>About</li>
            </Link>
            <Link to="/signin">
            <li className='hover:cursor-pointer hover:underline'>Sign In</li>
            </Link>
            
            
            
        </ul>

    </div>

    </div>
    

  )
}
