import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import BurgerMenu from '../Burger/Burger'
const Header = () => {
  return (
    <div>
        <header>
            <div className="nav">
                <div className="logo">
                    LOGO
                </div>
                <div className="links">
                    <a href="">
                <Link to={'/'}>Home</Link>
                    </a>
                    <a href="">
                <Link to={'/rec'}>Recomendations</Link>
                    </a>
                    <a href="">
                <Link to={'/tickets'}>Tickets</Link>
                    </a>
                    
                
                   

      
        <Link to="/africa">Africa</Link>
        
      




                </div>
                <div className="other">
                <button>
                    <a href="">
                    <Link to={'/'}>Contact</Link>
                    </a>
                </button>

                <div className="menu">
                    <BurgerMenu/>
                </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header