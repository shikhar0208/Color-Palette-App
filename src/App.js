import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import './App.css';
import seedPalettes from './seedPalettes';
import { generatePalette } from './ColorHelper';
import NewPaletteForm from './NewPaletteForm';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { palettes: seedPalettes}
  }
  
  findPalette = (id) => {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }

  savePalette = (newPalette) => {
    this.setState((prevState) => ({
      palettes: [...prevState.palettes, newPalette]
    }))
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact={true} render={(routeProps) => (
            <PaletteList 
              palettes={this.state.palettes} 
              {...routeProps}
            />
          )}
        />
        <Route path="/palette/new" exact={true} render={(routeProps) => (
            <NewPaletteForm 
              savePalette={this.savePalette}
              palettes={this.state.palettes}
              {...routeProps}
            />
          )} 
        />
        <Route 
          path="/palette/:id"  
          exact={true}
          render={(routeProps) => (
            <Palette 
              palette={generatePalette(this.findPalette(routeProps.match.params.id))}
            />
          )}  
        />
        <Route 
          path="/palette/:paletteId/:colorId" 
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId} 
              palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
            />
            )
          }
        />
      </Switch>
    )
  }
}


export default App;
