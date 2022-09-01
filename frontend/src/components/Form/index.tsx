import './style.css';
import React, { useState } from "react";
import axios from 'axios';

const initialValue = {
    email: '',
    name: '',
    surname: '',
}

function Form() {

    const [values, setValues] = useState(initialValue);

    function onChange(ev: { target: { name: any; value: any; }; }){
        const {name, value} = ev.target;
        setValues({ ...values, [name]: value});
    }

    function onSubmit(ev: React.FormEvent<HTMLFormElement>){
        ev.preventDefault();

        axios.post('http://localhost:8080/user', values)
        .then(
            () => {
                document.location.reload();
            });
    }

    return (
        <div className="inicial_campo">
            <div className="inicial_textcampo">
                <h3>Deseja se tornar Civitas?<br />Preencha os campos abaixo:</h3><br />
                <form onSubmit={onSubmit}>
                    <div className="inicial_campos">
                        <label htmlFor="nome">Nome: </label>
                        <input
                            type="text"
                            name="name"
                            id="inicial_form"
                            required
                            onChange={onChange} />
                    </div>
                    <div className="inicial_campos">
                        <label htmlFor="sobrenome">
                            Sobrenome:
                        </label>
                        <input
                            type="text"
                            name="surname"
                            id="inicial_form"
                            required
                            onChange={onChange} />
                    </div>
                    <div className="inicial_campos">
                        <label htmlFor="email">E-mail: </label>
                        <input
                            type="email"
                            name="email"
                            id="inicial_form"
                            required
                            onChange={onChange} />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className='registrar'
                        >
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
