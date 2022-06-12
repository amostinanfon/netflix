import React from 'react';
import './navbar.scss';


function Navbar() {
  return (
    <div className='navbar'>
      <div className="left">
        <img
          src='https://thumbs.dreamstime.com/b/netflix-logo-editorial-vector-136495254.jpg'
          alt=''
        />
        <span>Homepage</span>
        <span>Series</span>
        <span>Movies</span>
        <span>New and popular</span>
        <span>My List</span>
      </div>
      <div className="right"></div>
    </div>
  )
}


export default Navbar