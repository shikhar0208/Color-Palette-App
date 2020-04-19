import sizes from './sizes';
import bg from './bg.svg';
export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 0.5s ease-out"
    }
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#394bad",
    backgroundImage: `url(${bg})`,
    overflow: "auto"
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "500",
    [sizes.down("xs")]: {
      fontSize: "1.5rem"
    }
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    // [sizes.down("xl")]: {
    //   width: "80%"
    // },
    // [sizes.down("xs")]: {
    //   width: "75%"
    // }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
      gridGap: "1.5rem",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem",
    }
  },
};