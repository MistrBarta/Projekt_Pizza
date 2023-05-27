import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../Styles/Pizza.css";

const Pizza = () => {
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
        <>
            <div className='tempalate-page'>
                <div className='tempalate-content'>
                    <div className='template-tittle'>
                        <strong>{pizza.result[0].name}</strong>
                    </div>
                    <div className='template-ing'>
                        <strong>Složení: {pizza.result[0].ingredients}</strong>
                    </div>
                        <div className='template-sale'>
                            <div className='template-price'>
                                <strong>Cena:  {pizza.result[0].price} </strong>
                            </div>
                            <button className='template-button'>Koupit</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Pizza;