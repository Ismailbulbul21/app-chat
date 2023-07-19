import React from 'react'
import GoogleButton  from "react-google-button"
import  {auth} from "../Firebase"
import {GoogleAuthProvider, signInWithRedirect} from "firebase/auth"

 const googleSognIn = ()=>{

   const provider = new GoogleAuthProvider()
   signInWithRedirect(auth,provider)  
 }

const SignIn = () => {
  return (
    <div className=''>
        
<GoogleButton onClick={googleSognIn}/>

    </div>
  )
}

export default SignIn