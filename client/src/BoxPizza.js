import { Link, useNavigate } from "react-router-dom";


const BoxPizza = (props) => {
  const navigate = useNavigate();

  const deletePizza = async () => {
    const res = fetch(`http://localhost:3000/pizza/${props.id}`, {
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
                    <strong>{props.name}</strong>
                </div>
                <div className='template-ing'>
                    <strong>Složení: {props.ingredients}</strong>
                </div>
                <div className='template-sale'>
                    <div className='template-price'>
                    <strong>Cena: {props.price}</strong>
                    </div>
                    <button className='template-button'>Koupit</button>
                </div>
            </div>
        </Link>
    </div>   
  );
};
export default BoxPizza;