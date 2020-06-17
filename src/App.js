import React from 'react';
import './App.css';
import Example from './components/css transition/css.transition';
import Switch from './components/switch transition/switch.transition';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <Example />
      <Switch />
    </div>
  );
}

export default App;
