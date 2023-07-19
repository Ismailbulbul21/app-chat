import React from 'react'
import {auth} from "../Firebase"


export const LogOut = () => {

    const signOut= ()=>{

  signOut(auth)

    }

  return (
    <div>
       <button className='  border-2 p-2 bg-gray-100 text-gray-600 ' onClick={() => auth.signOut()}>
        LogOut
        
        </button> 


    </div>
  )
}
