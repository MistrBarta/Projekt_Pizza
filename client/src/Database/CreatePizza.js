import { useState } from "react"

const CreatePizza = () => {
    const [formData, setFormData] = useState({});
    const [success, setSuccess] = useState(false);

    const createPizza = async () => {
        const res = await fetch("http://localhost:3000/pizza", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json();
        if (data.msg == 'Pizza created') {
            setSuccess(true)
        } else {
            setSuccess(false)
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handlePost = (e) => {
        e.preventDefault();
        createPizza();
    }

    return (
        <>
            <form className="form">
                <div className="field">
                    <label className="label">Jméno</label>
                    <div className="control">
                        <input required name="name" className="input" type="text" placeholder="Jméno" onChange={e => handleChange(e)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Ingredience</label>
                    <div className="control">
                        <input required name="author" className="input" type="text" placeholder="Ingredience" onChange={e => handleChange(e)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Cena</label>
                    <div className="control">
                        <input required name="publisher" className="input" type="text" placeholder="Cena" onChange={e => handleChange(e)} />
                    </div>
                </div>

                {success ? <p className='has-text-success'>Úspěch!</p> : ''}

                <button className='button' onClick={handlePost}>
                    Přidat
                </button>
            </form>
        </>
    )
}

export default CreatePizza;