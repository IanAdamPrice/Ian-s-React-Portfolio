import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Work from './components/Work';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {


  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <About />
        </Route>
        <Route path='/work'>
          <Work></Work>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
