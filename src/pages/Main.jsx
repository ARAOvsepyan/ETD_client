import React from "react";
import laptop from '../assets/svg/laptop.png'
import '../css/main.css'

const Main = (() => {
  return (
    <main>
      <section className="wrapper">
        <div className="container">
          <div className="grid-row-2">
            <div className="grid-item-1">
              <h1 className="main-heading">
              ТВОЙ ИДЕАЛЬНЫЙ
              <br />
              ИНСТРУМЕНТ ДЛЯ
              <br />
              ОНЛАЙН-ЗАНЯТИЙ
              </h1>
              <p className="info-text">
              Bсе нужные инструменты в одном месте
              </p>
            </div>
            <div className="grid-item-2">
              <img className="laptop"src={laptop} alt=""/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
})

export default Main;