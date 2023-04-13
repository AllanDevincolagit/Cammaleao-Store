import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login/Index';
import Register from './pages/Register/index';
import Recuperar from './pages/Recuperar/Index'
import QuemSomos from './components/PageSomos/Index';
import PagePersonalizado from './components/PagePersonalizado/Index';

export default function Routes() {
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} /> 
      <Route path="/login" component={Login} /> 
      <Route path="/register" component={Register} /> 

      <Route path="/recuperar" component={Recuperar} /> 
      <Route path="/personalizado" component={PagePersonalizado} /> 
      <Route path="/quemsomos" component={QuemSomos} /> 

    </Switch>  


    </BrowserRouter>
    
  )
  

}