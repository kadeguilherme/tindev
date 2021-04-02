import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './login.css';
import api from '../services/api';

export default function Login({ history }){
const [username, setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        const response = await api.post('/devs',{
            username,
        });
        console.log(response);

        const { _id } = response.data;
        
        history.push(`/dev/${_id}`);
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



