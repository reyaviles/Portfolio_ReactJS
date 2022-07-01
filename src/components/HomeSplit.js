import React from "react";
import HomeCards from "./HomeCards";
import { makeStyles } from "@mui/styles";
import dev from "../assets/dev.jpg";
import des from "../assets/des.jpg";
import useWindowPosition from "../hooks/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    "@media (max-width:900px)": {
      flexDirection: "column",
    },
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "10rem",
  },
}));

function HomeSplit() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="home-split">
      <HomeCards
        imageURL={des}
        title="I Design"
        desc="Works include: Logo Design, UI/UX, Ad Creation, Creative Direction, Packaging, Social Media, Graphic Design"
        checked={checked}
        url="/design"
      />
      <h1 className={classes.title}>&</h1>
      <HomeCards
        imageURL={dev}
        title="I Develop"
        desc="Works include: HTML, CSS, JavaScript, APIs, ReactJS, NodeJS, S, Liquid, EJS, MongoDB, JQuery, JSON, Git/Github "
        checked={checked}
        url="/dev"
      />
    </div>
  );
}

export default HomeSplit;
