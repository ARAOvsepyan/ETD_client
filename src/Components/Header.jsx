import React from 'react'
import laptop from '../assets/icons/laptop.png'
import { Parallax } from "react-scroll-parallax";
import { Link } from 'react-scroll'


const Header = () => {

  return (
    <div className='header'>
    <Parallax speed={-10}>
      <div className='header__text'>
        <h1>ТВОЙ ИДЕАЛЬНЫЙ<br/>
            ИНСТРУМЕНТ ДЛЯ<br/>
            ОНЛАЙН-ЗАНЯТИЙ
        </h1>
        <p className='header__details'>Все нужные инструменты в одном месте</p>
      </div>
      </Parallax>
      <div className='header__image-wrapper'>
        <img src={laptop} alt="" className='image-item'/>
        <div class="image-btn">
          <a href='#' className='cv-btn'>Попробовать бесплатно</a>
          <div className='scroll-text'>
            <Link to={'ability'} 
                smooth={true} 
                duration={500}
                className='cv-text'
            >Возможности </Link>
            <div id="scroll-down">
              <span class="arrow-down"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header