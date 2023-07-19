import React from 'react'
import { auth } from '../Firebase'

const style= {

message :'flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-full',
sent : ' bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-b-full  ',
recieved : 'bg-[#e5e5ea] text-black float-left rounded-br-full',

}


const Message = ({message}) => {

const messageClass = 
message.uid ===  auth.currentUser.uid
? `${style.sent}`: `${style.recieved}`


  return (
    <div className={`${style.message} ${messageClass}`} 
     >
        
<p className=' absolute mt-[-4rem]  text-gray-600 text-xs'>{message.name}</p>
<p>{message.text}</p>

    </div>
  )
}

export default Message