import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import { userData } from '../data/userData'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Layout = () => {
// let permissions = userData
const {isLogedIn}=useContext(AuthContext)
console.log(isLogedIn);
  return (
    <div className='flex items-center justify-between static'>
        <Sidebar role={isLogedIn.user}/>
        <Outlet className="flex flex-1"/>
    </div>
  )
}

export default Layout