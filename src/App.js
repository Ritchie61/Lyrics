import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Lyrics from './components/Lyrics';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div>
        <h1>Lyrics App</h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/lyrics/:id" component={Lyrics} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
