import React from 'react';
import Palette from './Palette';
import './App.css';
import seedPalette from './seedPalettes';
import { generatePalette } from './ColorHelper';

class App extends React.Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedPalette[4])}/>
      </div>
    )
  }
}


export default App;
