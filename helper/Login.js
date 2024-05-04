import React, { useEffect } from 'react'
import { toast,ToastContainer } from 'react-toastify'

export default function Login() {
    useEffect(()=>{
        toast.warn('Signin Baby',{
            autoClose:2000
        })
    },[])
  return (
   <>
   <div>Login1</div>
   <ToastContainer limit={1}/>
   </>
    
  )
}
