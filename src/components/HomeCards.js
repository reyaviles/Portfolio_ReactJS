import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Collapse,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    margin: "20px",
  },
  media: {
    height: 440,
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#fff",
  },
  desc: {
    color: "#ddd",
  },
}));

function HomeCards({ url, imageURL, checked, title, desc }) {
  const classes = useStyles();
  return (
    <div className='home-card'>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Card
          className={classes.root}
          style={{ background: "rgba(0,0,0,0.5)", boxShadow: "none" }}
        >
          <CardMedia className={classes.media} image={imageURL} title="none" />
          <CardContent>
            <Typography
              gutterBottom
              className={classes.title}
              component="h1"
              variant="h3"
            >
              {title}
            </Typography>
            <Typography variant="body" component="p" className={classes.desc}>
              {desc}
            </Typography>
            <Link className='home-btn-ctn' to={url}>
              <button className="home-btn">Take Me There</button>
            </Link>
          </CardContent>
        </Card>
      </Collapse>
    </div>
  );
}

export default HomeCards;
