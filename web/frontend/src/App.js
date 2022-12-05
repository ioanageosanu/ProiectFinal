import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Donate from './components/pages/Donate';
import Login_Register from './components/pages/Login_Register';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/donate' component={Donate} />
          <Route path='/sign-up' component={Login_Register} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

