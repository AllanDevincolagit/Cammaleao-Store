import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Index from './pages/Index';
import Footer from './pages/Footer/Index';

export default function Routes() {
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Index} />     

    </Switch> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <Footer /> 
    </BrowserRouter>
  )
}