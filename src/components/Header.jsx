import * as React from 'react';
import {NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header>
                <div className="container">
                <nav>
                    <ul>              
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pokemones">Pokemones</NavLink>
                        </li>
                    </ul>
                </nav>
                </div>
        </header>
    )
};