import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className="search-form">
        <input type="text" placeholder='find user' />
      </div>
      <div className="user-chat">
      <img src="https://images.pexels.com/photos/11201518/pexels-photo-11201518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="user-info">
            <span>yassine</span>
        </div>
      </div>
    </div>
  )
}

export default Search
