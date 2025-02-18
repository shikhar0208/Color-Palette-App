import {DRAWER_WIDTH} from '../constants';
import sizes from './sizes';

const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px",
    alignItems: "center",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  navBtns: {
    marginRight: "0.8rem",
    "& a": {
      textDecoration: "none", 
    },
    [sizes.down("xs")]: {
      marginRight: "0.4rem"
    }
  },
  button: {
    margin: "0 0.4rem", 
    [sizes.down("xs")]: {
      margin: "0 0.2rem",
      padding: "0.2rem",
      fontSize: "0.7rem"
    } 
  },
});

export default styles;