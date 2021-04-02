import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './login.css';

export default function Login(){
const [username, setUsername] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        console.log(username);
    }

    return (
   <div className = "login-container">
       
        <img src = {logo} alt = 'Tindev'/>
       <form onSubmit = {handleSubmit}>
        <input 
        placeholder = "Digite seu usuário do GitHub"
        value = {username}
        onChange = {e => setUsername(e.target.value)
        }
        />
        <button>
           Enviar
        </button>
       </form>
   </div>

    );
}



