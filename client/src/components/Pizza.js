import React from 'react'
import "../Styles/Pizza.css"
import { Link, useNavigate } from "react-router-dom";

const Pizza = (props) => {
    const navigate = useNavigate();
    const deletePizza = async () => {
      const res = await fetch(`http://localhost:3000/pizza/${props.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    navigate(0)
  }

  const handleDelete = () => {
    deletePizza()
  }

  return (
    <div className='tempalate-page'>
        <Link to={`pizza/${props.id}`} className="column">
            <div className='tempalate-content'>
                <div className='template-tittle'>
                    <p>{props.name}</p>
                </div>
                <div className='template-ing'>
                    <p>{props.ingredients}</p>
                </div>
                <div className='template-sale'>
                    <div className='template-price'>
                        <p>{props.price}</p>
                    </div>
                    <button className='template-button'>Koupit</button>
                </div>
            </div>
        </Link>
    </div>

    /*Přesunout template.js/css a Pizza.js*/
  )
}

export default Pizza;