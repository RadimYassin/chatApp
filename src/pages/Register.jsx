import React from 'react'

const Register = () => {
  return (
    <div className='Container-Register'>
           <div>
                  <h1>chat</h1>
                  <form>
                    <input type="text" placeholder='name' />
                     <input type="text" placeholder='email' />
                     <input type="password" />
                     <input type="file" />
                     <button>sign up</button>
                  </form>
                  <p>you have an count ? login </p>
           </div>
    </div>
  )
}

export default Register
