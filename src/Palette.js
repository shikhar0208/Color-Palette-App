import React from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

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
    const { colors, emoji, paletteName } = this.props.palette
    const colorBoxes = colors[
      this.state.level
    ].map((color) => <ColorBox background={color[format]} name={color.name} key={color.id} />);
    return (
      <div className="Palette">
        <Navbar 
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;

