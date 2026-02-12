import './Burger.css';
import { Link } from 'react-router-dom';
import Home from '../../pages/Home';

import { useState } from 'react'
import Rec from '../../pages/Rec';
import Tickets from '../../pages/Tickets';
const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`fullscreen-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-content">

                <Link to="/" element={<Home/>} >
                <a href="">HOME</a>
                </Link>
                <Link to="/rec" element={<Rec/>} >
                <a href="">Recomendations</a>
                </Link>
                <Link to="/tickets" element={<Tickets/>} >
                <a href="">Tickets</a>
                </Link>
                
        </div>
      </div>
    </div>
  );
};

export default Burger;