import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi';

import './styles.css';

import  LogoMarcaImg from '../../assets/img/Ilustração.png';
import  logoImg from '../../assets/img/logo-24.png';


export default function Login(){

  return(      

   <div className="logon-container">

       <div className="container-ilustracao">

        <img src={LogoMarcaImg} alt="Camaleao" />
        
       </div>

     <section className="form">  


    <form>

    <img src={logoImg} alt="Camaleao Store" />

      <h1>Faça seu Login</h1>

      <input placeholder="Seu E-mail" /> <p></p>

      <input placeholder="Digite sua senha" type='password'/>

      <button className="button" type="submit">Entrar</button>

      <Link className="back-link" to="/recuperar">
        <FiLogIn size={16} color="#87C65C" />
        Recuperar Senha
      </Link>     

      <Link className="back-link" to="/register">
        <FiLogIn size={16} color="#87C65C" />
        Não tenho cadastro
      </Link>

    </form>

  </section>

   </div>   
  );
}