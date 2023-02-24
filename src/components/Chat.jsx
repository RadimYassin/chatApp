import React from 'react'
import {AiOutlineVideoCameraAdd} from "react-icons/ai"
import Input from './Input'
import Mesages from './Mesages'
const Chat = () => {
  return (
    <div className='Chat'>
          <div className="chta-info">
            <span>yassine</span>
            <div className="chaticons">
                 <AiOutlineVideoCameraAdd/>
            </div>
           
          </div>
            <Mesages/>
            <Input/>
    </div>
  )
}

export default Chat
