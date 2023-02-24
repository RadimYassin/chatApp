import React from 'react'
import {CiLogout} from "react-icons/ci"

export default function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>logo</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/11201518/pexels-photo-11201518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>yassine</span>
        <button><CiLogout/></button>
      </div>
    
    </div>
  )
}
