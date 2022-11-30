import React, { useContext } from 'react'
import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const ProtectedRoute = () => {
  const location =useLocation()
  const {isLogedIn} =useContext(AuthContext)
  
    return (
    <div>
{
    isLogedIn.status?
    <Outlet/>
    :<Navigate to="/login" state={{from:location}} replace />
}
    </div>
  )
}

export default ProtectedRoute