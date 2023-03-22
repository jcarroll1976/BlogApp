import React from 'react';
import './App.css';
import Home from './components/Home';
import Single from './components/Single';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Single />
    </div>
  );
}

export default App;
