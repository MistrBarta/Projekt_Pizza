import React from 'react'
import "../Styles/Pizza.css"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

const Pizza = (props) => {
    const { id } = useParams()
    const [pizza, setPizza] = useState({});
    const [loaded, setLoaded] = useState(false);

    const getPizza = async () => {
        const res = await fetch(`http://localhost:3000/pizza/${id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "GET",
        });
        const data = await res.json();
        setPizza(data);
        setLoaded(true);
    }

    useEffect(() => {
        getPizza();
        console.log(pizza.result)
    }, [])

    if (!loaded)
        return (
            <>
                <p>Loading pizza...</p>
            </>
        )

  return (
    <Link to={`pizza/${props.id}`} className="column">
      <div className='tempalate-page'>
              <div className='tempalate-content'>
                  <div className='template-tittle'>
                      <p>{pizza.result[0].name}</p>
                  </div>
                  <div className='template-ing'>
                      <p>{pizza.result[0].ingredients}</p>
                  </div>
                  <div className='template-sale'>
                      <div className='template-price'>
                          <p>{pizza.result[0].price}</p>
                      </div>
                      <button className='template-button'>Koupit</button>
                  </div>
              </div>
      </div>
    </Link>
    /*Přesunout template.js/css a Pizza.js*/
  )
}

export default Pizza;