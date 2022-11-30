import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { sidebarList } from '../data/sidebarData'
import { AuthContext } from '../context/AuthContext';
const Sidebar = ({role}) => {

const {setIsLogedIn}=useContext(AuthContext)
    
  return (
    <div className='flex flex-col items-center justify-between py-8 px-5 bg-notesColor w-fit h-full absolute left-0 top-0 bottom-0 '>
        {
            role.role.name==="admin"?

<ul className='w-full h-full flex flex-col justify-center gap-[2rem]'>
    <NavLink to='/' className='navlink text-xl font-semibold hover:text-l transition-all duration-75 cursor-pointer' >
    HOME
    </NavLink>
    {
        sidebarList?.map((item,i)=>(
            <NavLink to={item.toLowerCase()} className='navlink text-xl font-semibold hover:text-l transition-all duration-75 cursor-pointer' key={i} >{item.toUpperCase()}</NavLink>
        ))
    }
</ul>

        :<ul className='w-full h-full flex flex-col justify-center gap-[2rem]'>
              <NavLink to='/' className='navlink text-xl font-semibold hover:text-l transition-all duration-75 cursor-pointer' >
        HOME
    </NavLink>
            {
                role.role.permissions?.map((item,i)=>(
                    <NavLink to={item.toLowerCase()} className='navlink text-xl font-semibold hover:text-l transition-all duration-75 cursor-pointer' key={i}> {item.toUpperCase()} </NavLink>
                ))
            }
            <button onClick={()=>setIsLogedIn({status:false})} >logout</button>
        </ul>
        }
    </div>
  )
}

export default Sidebar