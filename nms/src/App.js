import React from 'react';
import './App.css';
import Numbers from './Numbers';

const App = () => {
  return (
    <div className="App">
      <h1 align="center">Number Management Services</h1>
      <h4 align="center">Fetching Numbers</h4>
      <Numbers />
    </div>
  );
};

export default App;
