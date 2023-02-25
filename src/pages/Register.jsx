import React, { useState } from 'react'
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,db,storage } from '../firebase.js'
import {FcCameraAddon} from "react-icons/fc"; 
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
const Register = () => {
  const [error,setError]=useState(false)

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {

            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
           
          
        });
      });
    } catch (err) {
      setError(true);
     
    }
  };

  return (
    <div className='Container'>
           <div className='Containerform'>
                  <h1>Register</h1>
                  <form onSubmit={handleSubmit}  className='form'>
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
