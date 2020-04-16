import React from 'react';
import { withStyles } from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.8px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.3)"
    }
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "rgba(0, 0, 0, 0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
}

const DraggableColorBox = (props) => (
  <div 
    className={props.classes.root}    
    style={{backgroundColor: props.color}}
  >
    <div className={props.classes.boxContent}>
      <span>{props.name}</span>
      <DeleteIcon className={props.classes.deleteIcon} />
    </div>
  </div>
);

export default withStyles(styles)(DraggableColorBox);

