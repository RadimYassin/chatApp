import React from 'react'
import {FcAddImage} from "react-icons/fc"
import {AiOutlineSend} from "react-icons/ai"
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='type something ...' />
      <div className="send">
        <input style={{display:"none"}} type="file" id='file'  />
        <label htmlFor="file">
          <FcAddImage/>
        </label>
        <button>
          <AiOutlineSend/>
        </button>
      </div>
    </div>
  )
}

export default Input
