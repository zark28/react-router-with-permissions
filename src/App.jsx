import React, { useState } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import {nanoid} from 'nanoid'
import Login from './pages/Login'
import AuthContextWrapper from './context/AuthContext'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Categories from './pages/Categories'
import Users from './pages/Users'
import Content from './Content'
import Organisation from './pages/Organisation'
import Layout from './components/Layout'



const App = () => {
 
  return (
   <BrowserRouter>
    
    <div className='container m-auto px-[15px]'>
<AuthContextWrapper>
  <Routes>
    <Route path= "/login" element={<Login/>}/>
   <Route element={ <ProtectedRoute/>}>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='categories' element={<Categories/>}/>
      <Route path='users'  element={<Users/>} />
      <Route path='content' element={<Content/>} />
      <Route path='organisation' element={<Organisation/>} />
    </Route>

</Route>
 
  </Routes>
</AuthContextWrapper>
    </div>
    </BrowserRouter>
  )
}

export default App