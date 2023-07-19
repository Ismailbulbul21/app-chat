

import React from 'react';
import Nav from './components/Nav';
import {auth} from './Firebase'
import {useAuthState} from "react-firebase-hooks/auth"
import Chat from './components/Chat';

function App() {
 const [user] =useAuthState(auth)

  return (
    <div className=" max-w-[720px]  mx-auto text-center">
   <section className='flex flex-col h-[90vh] bg-gray-100 mt-10 relative border'>

<Nav/>
{
  user ? 
  <Chat/> : null
}
</section>


    </div>
  );
}

export default App;
