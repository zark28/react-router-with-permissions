import React, {  createContext, useState,  } from "react"


 export const AuthContext= createContext()



const AuthContextWrapper = ({children}) => {
    const [isLogedIn, setIsLogedIn]=useState({status:false,user:{}})
 
  return (
    <AuthContext.Provider value={{isLogedIn,setIsLogedIn}}>
        {
     
children
        
        }
    </AuthContext.Provider>
  )
}

export default AuthContextWrapper