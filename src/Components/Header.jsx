import React from 'react'
import laptop from '../images/laptop.png'
import { Parallax } from "react-scroll-parallax";

const Header = () => {

  return (
    <div className='main'>
    <Parallax speed={-10}>
      <div className='text'>
        <h1>ТВОЙ ИДЕАЛЬНЫЙ<br/>
            ИНСТРУМЕНТ ДЛЯ<br/>
            ОНЛАЙН-ЗАНЯТИЙ
        </h1>
        <p className='details'>Все нужные инструменты в одном месте</p>
      </div>
      </Parallax>
      <div className='image-wrapper'>
        <img src={laptop} alt="" className='image-item'/>
        <div class="image-btn">
          <a href='#' className='cv-btn'>Попробовать бесплатно</a>
          <div className='scroll-text'>
            <a href='#' className='cv-text'>Возможности</a>
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