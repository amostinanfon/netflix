import { ArrowDropDown, NotificationImportant, Search } from '@material-ui/icons';
import React from 'react';
import './navbar.scss';


function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="left">
          <img
            src='https://thumbs.dreamstime.com/b/vecteur-de-logo-netflix-illustration-isol%C3%A9e-sur-le-fond-noir-fichier-modifiable-env-disponible-193529581.jpg'
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
          <img src="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=" alt="" />
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