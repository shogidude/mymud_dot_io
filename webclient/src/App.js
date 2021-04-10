import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import UserContextProvider from './context/UserContextProvider';

import Header from './Header';
// import Footer from './Footer';

import About from './pages/About';
import Features from './pages/Features';
import Play from './pages/Play';
import Levels from './pages/Levels';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
    <UserContextProvider>
    <Router>

      <Header />

      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/levels">
            <Levels />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Features />
          </Route>
        </Switch>

      {/* <Footer /> */}

    </Router>
    </UserContextProvider>
    </div>
  );
}

export default App;
