import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import badgeStyle from "./badgeStyle.jsx";

function Badge({ ...props }) {
  const { classes, color, children, className } = props;
  return (
    <span className={classes.badge + " " + classes[color] + " " + className}>{children}</span>
  );
}

Badge.defaultProps = {
  color: "gray"
};

Badge.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ])
};

export default withStyles(badgeStyle)(Badge);
