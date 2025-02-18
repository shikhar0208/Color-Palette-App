import React from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';
import { withStyles } from '@material-ui/styles';


class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
  }

  changeLevel = (level) => {
    this.setState({ level });
  };

  changeFormat = val => {
    this.setState({ format: val})
  }

  render() {
    const { level, format } = this.state;
    const { colors, emoji, paletteName, id } = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = colors[
      this.state.level
    ].map((color) => <ColorBox 
      background={color[format]} 
      name={color.name} 
      key={color.id}
      moreUrl={`/palette/${id}/${color.id}`}
      showingFullPalette={true}
    />);
    return (
      <div className={classes.Palette}>
        <Navbar 
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showLevelBar = {true}
        />
        <div className={classes.colors}>{colorBoxes}</div>
        <PaletteFooter 
          paletteName={paletteName}
          emoji={emoji}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);

