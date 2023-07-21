import React from 'react'
import "../Header/Header.css"
const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='header'>
                <div className='header-logo'>
                    <h4>Hosiptals</h4>
                </div>
                <nav className='header-nav'>
                    <ul>
                        <li>
                            Login
                        </li>
                    </ul>
                </nav>

            </div>
        </div>

    )
}

export default Header