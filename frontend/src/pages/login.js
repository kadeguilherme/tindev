import React from 'react';
import logo from '../assets/logo.svg';
import './login.css';

export default function Login(){
    return (
   <div className = "login-container">
       
        <img src = {logo} alt = 'Tindev'/>
       <form>
        <input 
        placeholder = "Digite seu usuário do GitHub"
        />
        <button>
           Enviar
        </button>
       </form>
   </div>

    );
}



