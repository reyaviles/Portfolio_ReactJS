import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { IconButton, Collapse } from "@mui/material";
import { Link as Scroll } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
    background: "none",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  container: {
    textAlign: "center",
  },
  icon: {
    color: "#fff",
    marginTop: "100px",
  },
}));

export default function() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div>
      <Navbar />
      <div className={classes.root} id="header">
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedHeight={50}
        >
          <div className={classes.container}>
            <h1 className={classes.title}>
              Hello,
              <br />
              I'm Rey.
            </h1>
            <Scroll to="home-split" smooth="true">
              <IconButton>
                <FaChevronDown
                  className={classes.icon}
                  size={20}
                  style={{ color: "#fff" }}
                />
              </IconButton>
            </Scroll>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
