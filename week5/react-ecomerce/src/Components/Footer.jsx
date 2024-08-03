import React from 'react'
import logo from './Assets/logo_big.png'
import insta from './Assets/instagram_icon.png'
import pin from './Assets/pintester_icon.png'
import whatsapp from './Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt='footer' />
         <p>Shopper</p>
        </div>
        <div className='links'>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
      </div>

      <div className='social-icon'>
        <div className='icon-container'>
            <img src={insta}  />
        </div>
        <div className='icon-container'>
            <img src={pin}  />
        </div><div className='icon-container'>
            <img src={whatsapp}  />
        </div>
      </div>
      <div className='copyright'>
        <hr/>
        <p>&copy; 2024 Shopper. All rights reserved.</p>
      </div>
      </div>
    </>
  )
}

export default Footer
