import React from "react";
import { NavLink } from "react-router-dom";
import { MAIN_ROUTE } from "../utils/consts";
import '../css/navbar.css'
import logo from '../assets/svg/logo.png'

const NavBar = () => {
  return (
    <header>
      <a className="logo" href="/"><img src={logo} alt="logo" width={150} height={150}/></a>
        <nav>
          <ul className="nav__links">
            <li><NavLink to = {MAIN_ROUTE}>Контакты</NavLink></li>
            <li><NavLink to = {MAIN_ROUTE}>Тарифы</NavLink></li>
            <li><NavLink to = {MAIN_ROUTE}>Возможности</NavLink></li>
            <li className='on_focus'><NavLink to = {MAIN_ROUTE}>Войти</NavLink></li>
          </ul>
        </nav>
    </header>
  )
}

export default NavBar;