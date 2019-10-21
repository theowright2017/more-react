import React from 'react';
import Home from './Pages/Home.js';
import SingleRoom from './Pages/SingleRoom.js';
import Rooms from './Pages/Rooms.js';
import Error from './Pages/Error.js';

import {Route, Switch} from 'react-router-dom';

import NavBar from './Components/NavBar.js';


import './App.css';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms/" component={Rooms} />
        <Route path="/rooms/:id" component={SingleRoom} />

        <Route component={Error} />
      </Switch>

    </div>
  );
}

export default App;
