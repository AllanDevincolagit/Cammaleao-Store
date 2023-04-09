import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function Nav() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="../../assets/img/logo-24.png" alt="Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Produtos</Link>
        </li>
        <li>
          <Link to="/">Conceitos</Link>
        </li>
        <li>
          <Link to="/">Pedidos Personalizados</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
