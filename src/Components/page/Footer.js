import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: { height: 50, backgroundColor: theme.palette.primary.main },
  };
});

const Footer = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default Footer;
