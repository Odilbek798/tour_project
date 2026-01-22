import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import BurgerMenu from '../Burger/Burger'
const Header = () => {
  return (
    <div>
        <header>
            <div className="nav">
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>Recomendations</Link>
                <Link to={'/'}>Tickets</Link>
                <button>
                    <Link to={'/'}>Contact</Link>
                </button>
                <div className="menu">
                    <BurgerMenu/>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header