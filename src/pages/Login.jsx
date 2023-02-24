import React from 'react'

export default function Login() {
  return(
   <div className='Container'>
           <div className='Containerform'>
                  <h1>login</h1>
                   
                  <form  className='form'>
             
                     <input type="text" placeholder='email' />
                     <input type="password"  placeholder='password' />
                 
                     <button>sign in</button>
               </form>
     
                  <p>you dont have  an acount ? register </p>
           </div>
    </div>
  )
}
