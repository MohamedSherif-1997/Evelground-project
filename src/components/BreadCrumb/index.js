import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

export default function Breadcrumb(props) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" onClick={props.handleClick}>
        Overview
      </Link>
      <Link color="inherit" onClick={props.handleClick}>
        Deliverses
      </Link>
      <Link color="inherit" onClick={props.handleClick}>
        Team
      </Link>
      <Link color="inherit" onClick={props.handleClick}>
        Feedback
      </Link>
      <Link color="inherit" onClick={props.handleClick}>
        History
      </Link>
    </Breadcrumbs>
  );
}
