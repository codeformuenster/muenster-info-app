import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2)
  }
}));

const BaseCard = ({ children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} raised={true}>
      {children}
    </Card>
  );
};

BaseCard.propTypes = {
  children: PropTypes.element.isRequired
};

export default BaseCard;
