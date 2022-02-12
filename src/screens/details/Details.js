import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Details(props) {
  console.log(props);
  return (
    <Fragment>
      <div className="detailsPage-container">
        <Link to="/">
          <Typography component="button">{`< Back to Home`}</Typography>
        </Link>
        <div className="details-conatiner">
          <div class="movie-Image-conatiner"></div>
        </div>
      </div>
    </Fragment>
  );
}
