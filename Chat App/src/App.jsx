import { useState, useRef } from 'react'
import './App.css'
import { Auth } from './components/Auth'
import Cookies from 'universal-cookie'
import { Chat } from './components/Chat';

import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

const cookies = new Cookies();

function App() {
 const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
const [room, setRoom] = useState(null);

const roomInputRef = useRef(null);

const signUserOut = async () => {
  await signOut(auth)
  cookies.remove("auth-token")
  setIsAuth(false)
  setRoom(null)
};

 if(!isAuth) {
  return (
    <div>
      <Auth setIsAuth={setIsAuth}/>
    </div>
  )
}

return (
<>
  {room ? (<Chat room={room} />) :(
    <div className='text-white mt-40 ml-20 h-[50vh] w-[75vw] flex flex-col justify-center items-center bg-gradient-to-r from-amber-200 to-yellow-400 rounded-2xl'>
      <label className='text-4xl text-white font-semibold text-center mb-10 block'>Enter Room Name: </label>
      <input ref={roomInputRef} className='block w-72 py-2.3 mb-6 rounded-lg text-black'/>
      <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-5 ptl' onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
    </div>
  )}
  <div className='sign-out'>
    <button className='mt-5 sm:ml-72 md:ml-72 lg:ml-[40vw] text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center' onClick={signUserOut}>Sign Out</button>
  </div> 
  </>
);
}

export default App
