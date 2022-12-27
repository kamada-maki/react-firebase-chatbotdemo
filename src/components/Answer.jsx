import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles (() => ({
  root: {
  },
}));

const Answer = (props) => {
  // const classes = useStyles();
  return (
    <Button variant="contained" color = "primary" onClick={()=>props.select(props.content,props.nextId)}>
      {props.content}
    </Button>
  )
};

export default Answer;