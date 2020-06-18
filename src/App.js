import React from 'react';
import './App.css';
import BootNavbar from './components/BootNavbar/BootNavbarComponent';
import SpringsImage from './components/SpringsImage/SpringsImageComponent';
import BulmaFooter from './components/BulmaFooter/BulmaFooterComponent';

function App() {
  return (
    <div className="App">
      <BootNavbar />
      <SpringsImage />
      <BulmaFooter />
    </div>
  );
}

export default App;
