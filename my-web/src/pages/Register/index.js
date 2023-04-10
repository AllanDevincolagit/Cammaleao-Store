import React from  'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import  logoImg from '../../assets/img/logo-24.png';


export default function Register() {

  return  (
    <div className="register-container">
      <div className="content">
    <section>
      <img src={logoImg} alt="Camaleao Store" />

      <h1>Faça seu Cadastro</h1>
      <p>Faça seu cadastro, entre na plataforma.</p>
      
      <Link className="back-link" to="/login">
        <FiArrowLeft size={16} color="#87C65C" />
        Já tenho cadastro
      </Link>
    </section>

    <form >
      <input placeholder="Nome Completo"/>
      <input placeholder="Digite sua senha"  />
      <input type="email" placeholder="E-mail" />
      <input type="CPF" placeholder="CPF" />
      <input type="Endereco" placeholder="Endrenço" />
      
      <div className="input-group">
        <input placeholder="Cidade"/>
        <input placeholder="UF" style={{width: 80}}/>
      </div>  

      <button className="button" type="submit">Cadastrar</button>
    </form>    
      </div>
    </div>
  )
}