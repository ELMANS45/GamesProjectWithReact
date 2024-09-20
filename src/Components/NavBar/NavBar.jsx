import React from 'react'
import gameLogo from '../../assets/logo-sm.png'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
  return (
    <>
      <div className="bg-indigo-600">
      <div className=' container p-5 flex justify-between text-white'>
          <div className='flex justify-center items-center gap-x-5'>
            <img src={gameLogo} width={50} height={50} alt="" />
            <NavLink to=""><h1>Home</h1></NavLink>
          </div>
          <div className='flex justify-center items-center gap-x-7'>
            <NavLink to={'/platforms'}><h1>Platforms</h1></NavLink>
            <NavLink to={'/categories'}><h1>Categories</h1></NavLink>
          </div>
    </div>
      </div>
    </>
  )
}
