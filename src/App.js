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
        <Route path='/Ian-s-React-Portfolio' exact component={About} />
        <Route path='/work' exact component={Work} />
        <Route path='/contact' exact component={Contact} />

      </Switch>
    </Router>
  );
}

export default App;
