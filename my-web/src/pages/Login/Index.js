import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi';

import './styles.css';

import Menu from '../../components/Menu';
export default function Login(){

  return  (

    <Menu />,
    <div className="logon-container">
      <div className="content">
    <section>
     

      <h1>Bem Vindo (a) Camaleão Store</h1>
      <p>Faça seu Login,  na plataforma.</p>
      
      <Link className="back-link" to="/register">
        <FiLogIn size={16} color="#87C65C" />
        Não tenho cadastro
      </Link>

      <Link className="back-link" to="/recuperar">
        <FiLogIn size={16} color="#87C65C" />
       Recuperar minha Senha?
      </Link>
    </section>

    <form >
      
    <input placeholder="Seu E-mail" /> 
    <input placeholder="Digite sua senha" type='password'/>
    <button className="button" type="submit">Entrar</button> 

    </form>    
      </div>
    </div>
  )
}