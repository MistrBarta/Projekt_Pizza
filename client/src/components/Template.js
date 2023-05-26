import React from 'react'
import "../Styles/Template.css"
import Pizza from './Pizza';

const Template = () => {
  return (
    <div className='tempalate-page'>
        <div className='tempalate-content'>
            <div className='template-tittle'>
                <p>Nazev</p>
            </div>
            <div className='template-ing'>
                <p>ingredience</p>
            </div>
            <div className='template-sale'>
                <div className='template-price'>
                    <p>Cena</p>
                </div>
                <button className='template-button'>Koupit</button>
            </div>
        </div>
    </div>

    /*Přesunout template.js/css a Pizza.js*/
  )
}

export default Template;