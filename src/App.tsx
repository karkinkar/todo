import React from 'react';
import './App.css';
import { Column } from './components/Column';

function App() {
  return (
    <div id="root">
      <Column background_color="#ff7575" column_header="ToDo"/>
      <Column background_color="#61ff8b" column_header="Done"/>
    </div>
  )
}

export default App;
