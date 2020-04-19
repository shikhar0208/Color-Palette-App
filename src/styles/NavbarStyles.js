import sizes from './sizes';

export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    background: "#eceff1",
    fontFamily: "'Roboto', sans-serif",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black"
    },
    [sizes.down("xs")]: {
      fontSize: "1.2rem"
    }
  },
  level: {
    [sizes.down("xs")]: {
      fontSize: "0.9rem",
      marginLeft: "12px"
    }
  },
  slider: {
    width: "320px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-rail": {
      height: "6px"
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginTop: "-4px"
    },
    [sizes.down("md")]: {
      width: "200px"
    },
    [sizes.down("sm")]: {
      width: "130px"
    } 
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
    "& .MuiInputBase-input": {
      [sizes.down("xs")]: {
        fontSize: "0.8rem"
      }
    }
  }
};