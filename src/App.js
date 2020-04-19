import React from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./ColorHelper";
import NewPaletteForm from "./NewPaletteForm";
import Page from "./Page";

class App extends React.Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedPalettes };
  }

  findPalette = (id) => {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  };

  deletePalette = (id) => {
    this.setState(
      (prevState) => ({
        palettes: prevState.palettes.filter((palette) => palette.id !== id),
      }),
      this.syncLocalStorage
    );
  };

  savePalette = (newPalette) => {
    this.setState(
      (prevState) => ({
        palettes: [...prevState.palettes, newPalette],
      }),
      this.syncLocalStorage
    );
  };

  syncLocalStorage = () => {
    // save palettes to local storage
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  };

  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={500}>
              <Switch location={location}>
                <Route
                  path="/palette/new"
                  exact={true}
                  render={(routeProps) => (
                    <Page>
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  path="/palette/:paletteId/:colorId"
                  exact={true}
                  render={(routeProps) => (
                    <Page>
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  path="/"
                  exact={true}
                  render={(routeProps) => (
                    <Page>
                      <PaletteList
                        deletePalette={this.deletePalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  path="/palette/:id"
                  exact={true}
                  render={(routeProps) => (
                    <Page>
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  render={(routeProps) => (
                    <Page>
                      <PaletteList
                        deletePalette={this.deletePalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
