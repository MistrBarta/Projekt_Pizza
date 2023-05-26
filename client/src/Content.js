import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "./Box";

const Content = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getPizzas = async () => {
    const res = await fetch("http://localhost:3000/pizza", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setPizzas(data);
    setLoaded(true);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  if (!loaded) {
    return (
      <>
        <p>pizzas are loading...</p>
      </>
    );
  }
  return (
    <>
      <Link to='create'>
        <button className='button crud is-success'>
          Vytvořit uživatele
        </button>
      </Link>
      {pizzas.result.map((pizza) => (
        <Box id={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} />
      ))}
    </>
  );
};

export default Content;
