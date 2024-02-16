import React from 'react'
import logo from '../images/logo.png'

const Nav = () => {
  return (
    <nav className='nav'>
      <a href='#' className='logo'>
          <img src={logo} alt='logo'/>
      </a>
      <input type='checkbox' className='menu-btn' id='menu-btn' />
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><a href='#'>Возможности</a></li>
        <li><a href='#'>Тариф</a></li>
        <li><a href='#'>Контакты</a></li>
        <li><a href='#'>Войти</a></li>
      </ul>
    </nav>
  )
}

export default Nav