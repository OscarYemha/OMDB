import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
    return(
        <header>
            <div className= "container">
                <div className= "inner-content">
                    <div className= "brand">
                        <Link to = "/"> Movie App</Link>
                    </div>

                    <ul className = "nav-links">
                        <li>
                            <Link exact to = "/">Logging</Link>
                        </li>
                        <li>
                            <Link to = "/watchlist">Watch List</Link>
                        </li>

                        <li>
                            <Link to = "/watched">Watched</Link>
                        </li>

                        <li>
                            <Link to = "/add" className="btn">Search movies</Link>
                        </li>

                        <li>
                            <Link to = "/register">Register</Link>
                        </li>
                    </ul>
                </div>            
            </div>
        </header>
    )
}