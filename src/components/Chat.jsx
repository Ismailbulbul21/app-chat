import React from 'react'
import {useEffect ,useState ,useRef} from 'react'
import Message from './Message'
import {db} from '../Firebase'
import {query , collection , onSnapshot , orderBy, QuerySnapshot, doc} from "firebase/firestore"
import Sendmissage from "./Sendmissage"



const Chat = () => {
  const[messages , setMessages]=useState([])
    const scroll = useRef()
 useEffect(()=>{
const q = query(collection(db , 'messages'),
orderBy('timestamp'));

const unsubscribe=onSnapshot(q , (QuerySnapshot)=>{

let messages = [];
QuerySnapshot.forEach((doc)=>{
messages.push({...doc.data(), id: doc.id});

});

setMessages(messages);

})


return ()=>unsubscribe();

 },[]);


  return (
    <div className=''>
       <main className='flex flex-col p-[10px] relative'>
        
        {messages && messages.map((message)=>
        <Message key={message.id} message={message}/>
        
        
        
        )}
      


        </main> 
    
        <Sendmissage scroll={scroll}/>
<span ref={scroll}></span>

    </div>
  )
}

export default Chat