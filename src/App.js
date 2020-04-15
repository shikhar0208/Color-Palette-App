import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import './App.css';
import seedPalettes from './seedPalettes';
import { generatePalette } from './ColorHelper';

class App extends React.Component {
  findPalette(id) {
    return seedPalettes.find(function(palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route path="/" exact={true} render={(routeProps) => <PaletteList palettes={seedPalettes} {...routeProps}/>}/>
        <Route 
          path="/palette/:id"  
          render={(routeProps) => (
            <Palette 
              palette={generatePalette(this.findPalette(routeProps.match.params.id))}
            />
          )}  
        />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedPalettes[4])}/>
      // </div>
    )
  }
}


export default App;
