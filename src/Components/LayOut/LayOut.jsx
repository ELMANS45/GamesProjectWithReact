import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function LayOut() {
  return (
    <>
    <div className="bg-slate-700">
    <NavBar/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}
