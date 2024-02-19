import React from 'react'

const Tarif = () => {
  return (
    <div className="tarifs" id='tarifs'>
      <div className="hover-text-one">
        <figure className="effect-text-two">
           <div className='photo beginner'/>
            <figcaption>
	            <h1>БАЗОВЫЙ</h1>
	            <p>До 5 учнеников <br/> <br/>
                  Доступ ко всем инструментам <br/> <br/>
                  Хранение файлов до 750 МБ
              </p>
            </figcaption>			
        </figure>
      </div>
      <div className="hover-text-one">
        <figure className="effect-text-two">
           <div className='photo advance'/>
            <figcaption>
	            <h1>ПРОДВИНУТЫЙ</h1>
	            <p>До 5 учнеников <br/> <br/>
                  Доступ ко всем инструментам <br/> <br/>
                  Хранение файлов до 750 МБ
              </p>
            </figcaption>			
        </figure>
      </div>
      <div className="hover-text-one">
        <figure className="effect-text-two">
           <div className='photo premium'/>
            <figcaption>
	            <h1>ПРЕМИУМ</h1>
	            <p>До 5 учнеников <br/> <br/>
                  Доступ ко всем инструментам <br/> <br/>
                  Хранение файлов до 750 МБ
              </p>
            </figcaption>			
        </figure>
      </div>
    </div>
  )
}

export default Tarif