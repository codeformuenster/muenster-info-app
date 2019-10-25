import React from "react";
import PropTypes from 'prop-types';

import BaseCard from "./BaseCard";
import WelcomeContent from './WelcomeContent';

import CardContent from "@material-ui/core/CardContent";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  pretitle: {
    fontWeight: theme.typography.fontWeightLight
  },
  title: {
    marginBottom: theme.spacing(2)
  },
  heroDesciption: {
    marginBottom: theme.spacing(2)
  },
  aCode4MsProject: {
    display: "flex",
    marginTop: theme.spacing(3),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  }
}));

const WelcomeCard = ({ onHideClick }) => {
  const classes = useStyles();

  return (
    <BaseCard className={classes.welcomeCard} onHideClick={onHideClick}>
      <CardContent>
        <WelcomeContent />
      </CardContent>
    </BaseCard>
  );
};

WelcomeCard.propTypes = {
  onHideClick: PropTypes.func
}

export default WelcomeCard;
