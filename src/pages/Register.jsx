import React from 'react'

const Register = () => {
  return (
    <div className='Container'>
           <div className='Containerform'>
                  <h1>Register</h1>
                  <form  className='form'>
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
