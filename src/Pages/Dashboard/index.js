import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  button: {
    margin: theme.spacing(2),
  },
}));

function Dashboard(props) {
  const classes = useStyles();

  const handleEnterRoom = () => {};
  return (
    <div className={classes.root}>
      <Button
        color="primary"
        variant="outlined"
        onClick={handleEnterRoom}
        className={classes.button}
      >
        Enter Game
      </Button>
    </div>
  );
}

export default Dashboard;
