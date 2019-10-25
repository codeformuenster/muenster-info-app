import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2),
    position: "relative"
  },
  hideButton: {
    margin: theme.spacing(1),
    position: "absolute",
    right: 0
  }
}));

const BaseCard = ({ children, className, onHideClick }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.card, className)} raised={true}>
      {onHideClick && (
        <IconButton
          size="small"
          className={classes.hideButton}
          aria-label="Verstecken"
          onClick={onHideClick}
        >
          <CloseIcon />
        </IconButton>
      )}
      {children}
    </Card>
  );
};

BaseCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  onHideClick: PropTypes.func
};

export default BaseCard;
