import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

import './index.css';
import  logoImg from '../../assets/img/logo-24.png';

function Menu() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
        <img src={logoImg} alt="Camaleao Store" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>
          <Link to="/conceitos">CONCEITOS</Link>
        </li>
        <li>
          <Link to="/personalizado">PEDIDOS PERSONALIZADOS</Link>
        </li>
        <li><Link to="/login"><FaUserCircle/></Link></li>
      </ul>
    </nav>


  );
}

export default Menu;
