import React from "react";
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from './styles/NavbarStyles';



class Navbar extends React.Component {
  state = { format: "hex", open: false }

  handleFormatChange = (e) => {
    this.setState({
      format: e.target.value,
      open: true
    },
      () => this.props.handleChange(this.state.format)
    );
  }

  closeSnackbar = () => {
    this.setState({ open: false })
  }

  render() {
    const {showLevelBar, level, changeLevel, classes } = this.props
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">colorpicker</Link>
        </div>
        {showLevelBar && (
          <div>
            <span className={classes.level}>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={this.state.format} onChange={this.handleFormatChange}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed To {(this.state.format).toUpperCase()}</span>}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar) ;
