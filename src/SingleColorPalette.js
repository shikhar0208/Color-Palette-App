import React from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';
import { withStyles } from '@material-ui/styles';

class SingleColorPalette extends React.Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex"}
  }

  gatherShades(palette, colorToFilterBy){
    let shades = [];
    let allColors = palette.colors;

    for(let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }

  changeFormat = val => {
    this.setState({ format: val})
  }

  render() {
    const { format } = this.state
    const {classes} = this.props
    const { paletteName, emoji, id } = this.props.palette
    const colorBoxes = this._shades.map((color) => (
      <ColorBox 
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ))
    return(
      <div className={classes.Palette}>
        <Navbar 
          handleChange={this.changeFormat}
          showLevelBar = {false}
        />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`} className='back-button'>Go Back</Link>
          </div>  
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  };
};

export default withStyles(styles)(SingleColorPalette);