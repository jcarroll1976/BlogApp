import React from 'react';
import './App.css';
import Home from './components/Home';
import Single from './components/Single';
import Topbar from './components/Topbar';
import Write from './components/Write';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Write />
    </div>
  );
}

export default App;
