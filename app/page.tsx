"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import {signIn, useSession,signOut} from 'next-auth/react'

export default function Example() {
  const {data:session} = useSession()
  console.log(session?.user?.name);
  useEffect(()=>{
    toast.success('Welcome Guys!!',{
      autoClose:1000
    })
  },[])

   if(session){
    return(
      <>
      <h1>welcome  {session?.user?.name}</h1>
      <button onClick={()=>{signOut()}}>SignOut</button>
      </>
    )

   }else{
    return (
      <>
        <header className=''>
          <div className='flex item-center justify-center mt-2 ml-4'>Hello this is the landing page of the website!!</div>
          <h1 className='text-green-300 flex items-center justify-center mt-4'>Welcome to the World!</h1>
          <div className='flex item-center justify-center mt-4 '>
          <button onClick={()=>{signIn()}} className='p-4 bg-white rounded-full text-black hover:bg-blue-400 mr-4'>Login</button>
         
          </div>
        </header>
        <ToastContainer />
      </>
    );
   }

   { session &&  <>
    <h1>welcome  {session?.user?.name}</h1>
    <button onClick={()=>{signOut()}}>SignOut</button>
    </>
    

   }
}