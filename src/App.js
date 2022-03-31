import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { initReactI18next } from 'react-i18next';


import Login from './Pages/Login';

const Child = (props)=>{
  if(props.match.params.id === "login") return <Login {...props}/>
}

function App() {


    return (

      <Router>
      <Switch>
              <Route exact path='/:id' render={Child}/>
              <Route exact path='/' render={Child}/>

      </Switch>
    </Router>
      

  );
}
export default App;
