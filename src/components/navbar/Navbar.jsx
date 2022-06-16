import { ArrowDropDown, NotificationImportant, Search } from '@material-ui/icons';
import React, { useState } from 'react';
import './navbar.scss';


function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false)

window.onscroll = () => {
  setIsScrolled(window.pageYOffset === 0 ? false : true);
  return () => ( window.onscroll = null );
}

console.log(isScrolled);

  return (
    
    <div className={ isScrolled ? "navbar scrolled " : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src='https://cdn.futura-sciences.com/buildsv6/images/wide1920/0/3/0/030dc01da7_50145928_netflix-logo.jpg'
            alt=''
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className='icon'/>
          <span className='icon'>KID</span>
          <NotificationImportant className='icon'/>
          <img src="https://s7d1.scene7.com/is/image/kyndryl/atwork_Youngwomanwatchingtablet_1x1?qlt=85&wid=1024&ts=1652131435079&dpr=off" alt="" />
          <div className="profile">
            <ArrowDropDown className='icon'/>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Navbar