import React from 'react';
import './App.css';
import Home from './components/Home';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Home />
    </div>
  );
}

export default App;
