import React from "react";
import BreadCrumb from "../../components/BreadCrumb/";
import Team from "../../components/BreadCrumb/team";
import Overview from "../../components/BreadCrumb/overview";
import FeedBack from "../../components/BreadCrumb/feedBack";
import History from "../../components/BreadCrumb/history";
import Deliverses from "../../components/BreadCrumb/deliverses";
import { withStyles } from "@material-ui/core";

const style = {
  breadCrumb: {
    paddingLeft: "50px",
    marginTop: " 50px",
  },
};

function BreadcrumbContanier(props) {
  const [team, setTeam] = React.useState(false);
  const [overview, setOverview] = React.useState(false);
  const [feedback, setFeedBack] = React.useState(false);
  const [history, setHistory] = React.useState(false);
  const [deliverses, setDeliverses] = React.useState(false);
  function handleClick(event) {
    if (event.target.text === "Overview") {
      setOverview(true);
    } else {
      setOverview(false);
    }
    if (event.target.text === "Team") {
      setTeam(true);
    } else {
      setTeam(false);
    }
    if (event.target.text === "Feedback") {
      setFeedBack(true);
    } else {
      setFeedBack(false);
    }
    if (event.target.text === "History") {
      setHistory(true);
    } else {
      setHistory(false);
    }
    if (event.target.text === "Deliverses") {
      setDeliverses(true);
    } else {
      setDeliverses(false);
    }

    event.preventDefault();
  }
  return (
    <div className={props.classes.breadCrumb}>
      <BreadCrumb handleClick={handleClick} />
      <div>
        {team ? (
          <Team />
        ) : overview ? (
          <Overview />
        ) : feedback ? (
          <FeedBack />
        ) : history ? (
          <History />
        ) : deliverses ? (
          <Deliverses />
        ) : null}
      </div>
    </div>
  );
}

export default withStyles(style)(BreadcrumbContanier);
