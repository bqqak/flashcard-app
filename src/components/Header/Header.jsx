import React from 'react'
import { NavLink } from 'react-router'
function Header() {
  return (
    <div className='flex justify-around pt-10 pb-30'>
        <NavLink to='/'>
          <p className='text-3xl text-white font-[Montserrat]'>
            The Hook
        </p>
        </NavLink>
        <NavLink to='/createCards' className='text-white font-[Montserrat]'>Create cards</NavLink>
        <NavLink to='/myCards' className='text-white font-[Montserrat]'>View my cards</NavLink>
    </div>
  )
}

export default Header