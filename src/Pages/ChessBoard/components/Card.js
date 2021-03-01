import { Paper, Typography } from "@material-ui/core";
import React from "react";

export default ({
  title,
  image,
  onMouseEnter,
  onMouseOut,
  onClick,
  selected,
}) => {
  return (
    <div
      style={{
        backgroundColor: selected ? "grey" : "aliceblue",
        width: 100,
        height: 100,
      }}
      onMouseEnter={onMouseEnter}
      onMouseOut={onMouseOut ? onMouseOut : () => {}}
      onClick={onClick}
    >
      <Typography>{title}</Typography>
    </div>
  );
};
