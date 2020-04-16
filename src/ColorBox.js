import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import styles from './styles/ColorBoxStyles';
import { withStyles } from '@material-ui/styles';


class ColorBox extends React.Component {
  state = { copied: false }

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 2000)
    });
  }

  render() {
    const { name, background, moreUrl, showingFullPalette, classes } = this.props;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ backgroundColor: background }}>
          <div
            className={`${classes.copyOverlay} ${this.state.copied && classes.showOverlay}`}
            style={{ background }}
          />
          <div className={`${classes.copyMessage} ${this.state.copied && classes.showMessage}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(e) => { e.stopPropagation() }}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);