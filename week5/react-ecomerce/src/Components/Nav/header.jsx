import React, { useContext, useState } from 'react'
import "./index.css"
import logo from "../Assets/logo.png"
import cart from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  const { totalCartItems } =useContext(ShopContext);

  const [ activeMenu ,setActiveMenu] = useState("");
  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };
  return (
    <>
      <nav className='navbar '>
      <div className="nav-logo">
        <img src={logo} alt='logo' />
        <p>SHOPPER</p>
      </div>
      <div className='nav-menu'>
        <ul className='menu-list'>
          <li className={`nav-item ${activeMenu === 'shop' ? 'active' : ''} `} onClick={() => handleMenuClick('Shop')}>
            <Link to='/Shop'>Shop</Link>
          </li>
          <li className={`nav-item ${activeMenu === 'shop' ? 'active' : ''} `} onClick={() => handleMenuClick('man')}><Link to='/mens' >Man</Link></li>
          <li className={`nav-item ${activeMenu === 'shop' ? 'active' : ''} `}onClick={() => handleMenuClick('women')}><Link to='/womens'>Women</Link></li>
          <li className={`nav-item ${activeMenu === 'shop' ? 'active' : ''} `} onClick={() => handleMenuClick('kids')}><Link to='/kids'>Kids</Link></li>
        </ul>
      </div>
        <div className='nav-btn'>
            <Link to='/login' className='login-btn'>Login</Link>
            <Link to='/cart'>
            <img className='cart ' src={cart} alt='cart' />
            </Link>

            <div className='cart-counter'>{totalCartItems()}</div>
        </div>

      </nav>
    </>
  )
}

export default Navbar
