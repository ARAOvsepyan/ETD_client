import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const AbilityList = () => {
  return (
    <div className='ability' id='ability'>
      <h1>НАШИ ВОЗМОЖНОСТИ</h1>
      <div className='ability_cards'>
      <Parallax speed={-10}>
      <div class="card calendar">
        <div class="card__content">
          <div class="card__content-inner">
            <div class="card__title">Календарь</div>
            <div class="card__description">Lorem ipsum doler amet...</div>
          </div>
        </div>
      </div>
      <div class="card task">
        <div class="card__content">
          <div class="card__content-inner">
            <div class="card__title">Задачник</div>
            <div class="card__description">Lorem ipsum doler amet...</div>
          </div>
        </div>
      </div>
      </Parallax>
      <Parallax speed={5}>
      <div class="card data">
        <div class="card__content">
          <div class="card__content-inner">
            <div class="card__title">База учеников</div>
            <div class="card__description">Lorem ipsum doler amet...</div>
          </div>
        </div>
      </div>
      </Parallax>
      </div>
    </div>
  )
}

export default AbilityList