import React from 'react';
import './App.css';

const App = () => (
    <div className="container">
      <div className="wrapper">
        <div className="col">
          <label htmlFor="USD">USD</label>
          <input type="number" id="USD"/>
        </div>
        <div className="col">
          <label htmlFor="EUR">EUR</label>
          <input type="number" id="EUR"/>
        </div>
      </div>
    </div>
);

export default App;
