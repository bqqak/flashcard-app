import React from 'react'
import './css.css'
import { NavLink } from 'react-router'
function Header() {
  return (
    <div className='flex justify-around pt-3 pb-10 items-center'>
        <NavLink to='/'>
          <p className='text-3xl text-white font-[Montserrat] header-text'>
            The Hook
        </p>
        </NavLink>
        <NavLink to='/createCards' className='text-white font-[Montserrat]'>Create cards</NavLink>
        <NavLink to='/myCards' className='text-white font-[Montserrat]'>View my cards</NavLink>
    </div>
  )
}

export default Header