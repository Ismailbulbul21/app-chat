import React from 'react'
import {auth} from '../Firebase'
import {useAuthState} from "react-firebase-hooks/auth"
import SignIn from './SignIn'
import { LogOut } from './LogOut'


const Nav = () => {
    const [user] =useAuthState(auth)
  return (
    <div className=' bg-gray-900 h-20 flex justify-between items-center p-4'>
        
<h1 className=' text-white text-2xl'>
<a href='#'>ChatApp</a>

</h1>
{user ? <LogOut /> : <SignIn />} 

    </div>
  )
}

export default Nav