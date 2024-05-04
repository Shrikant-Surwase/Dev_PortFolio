"use client"
import React from "react"
import { useSession, signIn, signOut } from 'next-auth/react'

import Success from '../../helper/Success'
import Login from '../../helper/Login'
export default function Home() {
  const { data: session } = useSession();
   console.log(session);
  if (session) {

    return (

      <>

        <Success/>
        <button onClick={() => signOut()}>signout</button>
      </>
    )
  } else {
    return (
      <div>
        <Login />
        <button onClick={() => {

          signIn()

        }}>Sign In</button>


      </div>
    )
  }
}
