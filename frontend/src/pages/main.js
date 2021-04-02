import React from 'react';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }){
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
                        <img src = {like} alt='Dislike'/>
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
                        <img src = {like} alt='Dislike'/>
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
                        <img src = {like} alt='Dislike'/>
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
                        <img src = {like} alt='Dislike'/>
                        <img src = {dislike} alt='Dislike'/>
                    </button>
                </div>
            </li>
        </ul>

        
        </div>
    );
}