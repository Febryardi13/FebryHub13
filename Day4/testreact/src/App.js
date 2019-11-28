import React from 'react';
import './App.css';
import Navbar from './components/navbar'

// App.js untuk merubah body di html
function App() {
  return (
    <div className="header">
      <center>
        <h3>
          <Navbar/>
        </h3>
      </center>
    </div>
  );
}

export default App;
