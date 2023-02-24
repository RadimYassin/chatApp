import React from 'react'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.js'
const Register = () => {

  const handlsubmit=async(e)=>{
        e.preventDefault()
        const dispalyname=e.target[0].value
        const email=e.target[1].value
        const password=e.target[2].value
        const avatar=e.target[3].files[0]
try {
  const res=await createUserWithEmailAndPassword(auth, email, password)
  
} catch (error) {
  console.log(error);
}

  
  }
  return (
    <div className='Container'>
           <div className='Containerform'>
                  <h1>Register</h1>
                  <form onSubmit={handlsubmit}  className='form'>
                      <input type="text" placeholder='name' />
                      <input type="text" placeholder='email' />
                      <input type="password"  placeholder='password' />
                      <input type="file" id='file' />
                      <label htmlFor="file">chose a avatar</label>
                      <button>sign up</button>
                  </form>
                  <p>you have an count ? login </p>
           </div>
    </div>
  )
}

export default Register
