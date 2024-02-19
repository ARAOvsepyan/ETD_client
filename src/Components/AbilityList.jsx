import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const AbilityList = () => {
  return (
    <div className='ability' id='ability'>
      <h1>НАШИ ВОЗМОЖНОСТИ</h1>
      <div className='ability__cards'>
      <Parallax speed={-10}>
      <div class="ability__card calendar">
        <div class="ability__card__content">
          <div class="ability__card__content-inner">
            <div class="ability__card__title">Календарь</div>
            <div class="ability__card__description">Lorem ipsum doler amet...</div>
          </div>
        </div>
      </div>
      <div class="ability__card task">
        <div class="ability__card__content">
          <div class="ability__card__content-inner">
            <div class="ability__card__title">Задачник</div>
            <div class="ability__card__description">Lorem ipsum doler amet...</div>
          </div>
        </div>
      </div>
      </Parallax>
      <Parallax speed={4}>
      <div class="ability__card data">
        <div class="ability__card__content">
          <div class="ability__card__content-inner">
            <div class="ability__card__title">База учеников</div>
            <div class="ability__card__description">Lorem ipsum doler amet...</div>
          </div>
        </div>
      </div>
      </Parallax>
      </div>
    </div>
  )
}

export default AbilityList