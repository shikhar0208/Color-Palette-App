import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteFooterStyles';

const PaletteFooter = (props) => (
  <footer className={props.classes.PaletteFooter}>
    { props.paletteName }
    <span className={props.classes.emoji}>{ props.emoji }</span>
  </footer>
);

export default withStyles(styles)(PaletteFooter);