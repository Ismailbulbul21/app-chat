import React, { useState } from 'react'
import {db,auth} from "../Firebase"
import {addDoc , collection , serverTimestamp, } from "firebase/firestore"

const Sendmissage = ({scroll}) => {
    const[input , setInput]=useState('');

const Sendmissage= async (e)=>{

e.preventDefault()
if(input === ""){

    alert('hey write something')
    return
}
const {uid, displayName}=auth.currentUser
 await addDoc(collection(db , 'messages'), {

text : input,
name : displayName,
uid,
timestamp:serverTimestamp()

 })

 setInput('')
 scroll.current.scrollIntoView({behavior : 'smooth'})
}




  return (
    <form onSubmit={Sendmissage} className=' h-14 w-full max-w-[728px] flex text-xl absolute bottom-0'>

       <input value={input} onChange={(e)=>setInput(e.target.value)} className='w-full text-xl p-3  bg-gray-900 text-white'  type='text'/> 

<button className='w-[20%] bg-green-500 ' type='submit' >Send</button>


    </form>
  )
}

export default Sendmissage