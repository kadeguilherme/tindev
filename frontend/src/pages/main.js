import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import './main.css';
import api from '../services/api';

export default function Main({ match }){

    const [users, setUsers] = useState([]);

    useEffect( () => {
        async function loadUsers(){
            const response = await api.get('/devs',{
                headers: {
                    user:match.params.id,
                }
            })
           setUsers(response.data);
        }
        loadUsers();
    },[match.params.id]);



    return(
        <div className = 'main-container'>
            <img src = { logo } alt = 'Tindev'/>
        <ul>
            <li>
                <img src='https://avatars.githubusercontent.com/u/2254731?v=4'/>
                <footer>
                    <strong>
                        Diego Rockseats
                        <p>
                        CTO at @Rocketseat. Passionate about education and changing people's lives through programming.
                        </p>
                    </strong>
                </footer>

                <div className = 'buttons'>
                    <button type = 'button'>
                        <img src = {like} alt='like'/>
                    </button>

                    <button type = 'button'>
                        <img src = {dislike} alt='Dislike'/>
                    </button>
                </div>
            </li>

            <li>
                <img src='https://avatars.githubusercontent.com/u/2254731?v=4'/>
                <footer>
                    <strong>
                        Diego Rockseats
                        <p>
                        CTO at @Rocketseat. Passionate about education and changing people's lives through programming.
                        </p>
                    </strong>
                </footer>

                <div className = 'buttons'>
                    <button type = 'button'>
                        <img src = {like} alt='like'/>
                    </button>

                    <button type = 'button'>
                        <img src = {dislike} alt='Dislike'/>
                    </button>
                </div>
            </li>

            <li>
                <img src='https://avatars.githubusercontent.com/u/2254731?v=4'/>
                <footer>
                    <strong>
                        Diego Rockseats
                        <p>
                        CTO at @Rocketseat. Passionate about education and changing people's lives through programming.
                        </p>
                    </strong>
                </footer>

                <div className = 'buttons'>
                    <button type = 'button'>
                        <img src = {like} alt='like'/>
                    </button>

                    <button type = 'button'>
                        <img src = {dislike} alt='Dislike'/>
                    </button>
                </div>
            </li>

            <li>
                <img src='https://avatars.githubusercontent.com/u/2254731?v=4'/>
                <footer>
                    <strong>
                        Diego Rockseats
                        <p>
                        CTO at @Rocketseat. Passionate about education and changing people's lives through programming.
                        </p>
                    </strong>
                </footer>

                <div className = 'buttons'>
                    <button type = 'button'>
                        <img src = {like} alt='like'/>
                    </button>

                    <button type = 'button'>
                        <img src = {dislike} alt='Dislike'/>
                    </button>
                </div>
            </li>
        </ul>

        
        </div>
    );
}