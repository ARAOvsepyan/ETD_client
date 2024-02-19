import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import logo from '../assets/icons/logo.png'

const Nav = () => {
  return (
    <nav className='nav'>
      <a href='#' className='nav_logo'>
          <img src={logo} alt='logo'/>
      </a>
      <ul>
        <li>
          <Link to={'ability'} 
                smooth={true} 
                duration={500}
                className='cursor'
          > Возможности </Link>
        </li>
        <li>
          <Link to={'tarifs'} 
                smooth={true} 
                duration={500}
                className='cursor'
          > Тариф </Link>
        </li>
        <li>
          <Link to={'contacts'} 
                smooth={true} 
                duration={500}
                className='cursor'
          > Контакты </Link>
        </li>
        <li>
          <a className='cursor' href='#'>Войти</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav