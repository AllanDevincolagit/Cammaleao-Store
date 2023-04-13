import React from 'react';

export default function Recuperar(){

  return  (
    
    <div className="logon-container">
      <div className="content">
    <section>     

      <h1>Bem Vindo (a) Camaleão Store</h1>
      <p> Esqueceu a senha? </p>
      
    </section>

    <form >
    <input placeholder="Seu E-mail" /> 
    <button className="button" type="submit">Enviar</button> 

    </form>    
      </div>
    </div>
  )
}