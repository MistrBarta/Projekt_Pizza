import { useState, useEffect } from "react";
import BoxPizza from "./BoxPizza";

const Content = () => {
  const [users, setUsers] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getUsers = async () => {
    const res = await fetch("http://localhost:3000/user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setUsers(data);
    setLoaded(true);
  };

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
    getUsers();
    getPizzas();
  }, []);

  if (!loaded) {
    return (
      <>
        <p>Users and Pizzas are loading...</p>
      </>
    );
  }
  return (
    <>

      {pizzas.result.map((pizza) => (
        <BoxPizza  id={pizza.id} name={pizza.name} publisher={pizza.price} author={pizza.ingredients} />
        
      ))}
    </>
  );
};

export default Content;