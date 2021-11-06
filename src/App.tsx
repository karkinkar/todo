import React from 'react';
import './App.css';
import { Column } from './components/Column';

function App() {
  return (
    <div id="root">
      <Column background_color="red"/>
      <Column background_color="green"/>
    </div>
  )
}

export default App;
