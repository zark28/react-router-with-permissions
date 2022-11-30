import React, { useCallback, useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { userData } from '../data/userData'

const Login = () => {
    let users =userData.users
    const navigate=useNavigate()
    const [login,setLogin]=useState()
    const {isLogedIn, setIsLogedIn}=useContext(AuthContext)
    const handleChange=(event)=>{
        setLogin(event.target.value)
    }

    
    const handleSignin=()=>{

            let user = users.find((user)=>user.email==login)
            if (user){
                setIsLogedIn({status:true,user:user})
               navigate('/')
            }else{alert('wrong credentials')}
        
    }


  return (    <div className=' flex flex-col items-center justify-between gap-5 p-5 bg-newNotesColor'>
        <h1 className='w-full text-2xl font-bold text-center '>Login</h1>
        <input onChange={handleChange} className='p-2 outline-none border-none' type="email" name="email" id="useremail " placeholder='enter email'/>
        <button onClick={handleSignin} className="bg-buttonColor px-[4px]  py-1">Sign In</button>
    </div>
  )
}

export default Login