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
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedPalettes}
  }
  
  findPalette = (id) => {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }

  deletePalette = (id) => {
    this.setState((prevState) => ({
      palettes: prevState.palettes.filter(palette => palette.id !== id)
    }), this.syncLocalStorage);
  }

  savePalette = (newPalette) => {
    this.setState((prevState) => ({
      palettes: [...prevState.palettes, newPalette]
    }), this.syncLocalStorage);
  }

  syncLocalStorage = () => {
    // save palettes to local storage
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact={true} render={(routeProps) => (
            <PaletteList 
              deletePalette={this.deletePalette}
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
