import React from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  feedBack: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100px",
    color: "black",
    fontFamily: '"Soleil",Helvetica,Arial,sans-serif',
    padding: "0 40px",
    fontSize: "20px",
  },
};
function FeedBack(props) {
  return (
    <div className={props.classes.feedBack}>
      FeedBack
      <div>select:</div>
    </div>
  );
}
export default withStyles(styles)(FeedBack);
