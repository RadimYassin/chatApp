import React, { useState } from 'react'
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage } from '../firebase.js'
import {FcCameraAddon} from "react-icons/fc"; 
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
const Register = () => {
  const [error,setError]=useState(false)

  const handlsubmit=async(e)=>{
        e.preventDefault()
        const displayName=e.target[0].value
        const email=e.target[1].value
        const password=e.target[2].value
        const avatar=e.target[3].files[0]
try {
  const res=await createUserWithEmailAndPassword(auth, email, password)
 


  const storageRef = ref(storage, displayName);
  
  const uploadTask = uploadBytesResumable(storageRef, file);
  

  uploadTask.on('state_changed', 
    (error) => {
     setError(true)
    }, 
    () => {
     
      getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
         await updateProfile(res.user{
          displayName,
          photoURL:downloadURL
         })
      });
    }
  );
  
} catch (error) {
     setError(true)
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
                      <input style={{display:"none"}} type="file" id='file' />
                      <label htmlFor="file"><FcCameraAddon/><span>chose your avatar</span></label>
                      <button>sign up</button>
                      {error && <span>something went wrong</span>}
                  </form>
                  <p>you have an count ? login </p>
           </div>
    </div>
  )
}

export default Register
