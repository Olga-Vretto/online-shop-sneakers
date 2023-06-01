import React from 'react'
import headerLogo from '../../../assets/images/header-logo.png';
import cart from '../../../assets/svg/cart.svg';
import user from '../../../assets/svg/user.svg';

const Header = () => {
  return (
    <header className='header'>
    <div className='header-left'>
      <img className='header-logo' src={headerLogo} alt='header-logo' />
      <div className='header-info'>
        <h3 className='header-title'>Super sneakers</h3>
        <p>Магазин найкращих кросівок</p>
      </div>
    </div>
    <ul className='header-right'>
      <li className='header-right__li'>
        <img src={cart} alt='cart-icon' width={18} height={18} />
        <span>750 грн.</span>
      </li>
      <li>
        <img src={user} alt='user icon' width={18} height={18} />
      </li>
    </ul>
  </header>
  )
}

export default Header