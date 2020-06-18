import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import Header from "../../components/header";
// import Filter from "../components/filter";
import BreadCrumbContainer from "../../container/BreadCrumbContainer";
// import SearchConatiner from "../components/search";
const styles = {
  login: {
    direction: "column",
    justify: "space-evenly",
    alignItems: "center",
  },
};
class ConceptContaine extends Component {
  render() {
    return (
      <Grid container className={this.props.classes.login}>
        <Header />
        {/* <Filter history={this.props.history} /> */}
        <BreadCrumbContainer />
        {/* <SearchConatiner /> */}
      </Grid>
    );
  }
}
export default withStyles(styles)(ConceptContaine);
