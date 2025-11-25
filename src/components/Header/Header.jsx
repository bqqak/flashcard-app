import React from 'react'
import { NavLink } from 'react-router'
function Header() {
  return (
    <div className='flex justify-around pt-10 pb-30'>
        <p className='text-3xl text-white'>
            The Hook
        </p>
        <NavLink to='/hello' className='text-white '>Create cards</NavLink>
    </div>
  )
}

export default Header