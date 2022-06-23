import { ArrowDropDown, NotificationImportant, Search } from '@material-ui/icons';
import React, { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom'


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
            src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
            alt=''
          />
            <Link to="/" className="link">
              <span>Accueil</span>
            </Link>
            <Link to="/series" className="link">
              <span>Series</span>
            </Link>
            <Link to="/movies" className="link">
              <span>Movies</span>
            </Link>
            <Link to="/series" className="link">
              <span>Ma Liste</span>
            </Link>
            <Link to="/series" className="link">
              <span>Nouveau et populaire</span>
            </Link>
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