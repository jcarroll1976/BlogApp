import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Settings from './components/Settings';
import Single from './components/Single';
import Topbar from './components/Topbar';
import Write from './components/Write';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Login />
    </div>
  );
}

export default App;
