import React from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  history: {
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
function History(props) {
  return (
    <div className={props.classes.history}>
      History
      <div>select:</div>
    </div>
  );
}
export default withStyles(styles)(History);
