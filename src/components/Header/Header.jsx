import React from 'react'
import "../Header/Header.css"
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='header'>
                <div className='header-logo'>
                    <h4>
                        <NavLink to="/">
                            Hospitals
                        </NavLink>
                    </h4>
                </div>
                <nav className='header-nav'>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/users">User</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>

                    </ul>
                </nav>

            </div>
        </div>

    )
}

export default Header