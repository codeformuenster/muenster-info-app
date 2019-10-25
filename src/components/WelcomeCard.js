import React from "react";
import BaseCard from "./BaseCard";

import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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

const WelcomeCard = () => {
  const classes = useStyles();

  return (
    <BaseCard>
      <CardContent>
        <Typography variant="h6" className={classes.preTitle}>
          Willkommen auf der
        </Typography>
        <Typography
          gutterBottom
          variant="h4"
          component="h1"
          className={classes.title}
        >
          Münster Info App
        </Typography>
        <Typography variant="body2" className={classes.heroDesciption}>
          Deine zentrale Anlaufstelle für alle Veranstaltungen und Events in
          Münster.
        </Typography>
        <Typography variant="subtitle2">
          Teil des{" "}
          <Link
            href="https://www.muenster.jetzt/"
            target="_blank"
            rel="noopener"
            className={classes.link}
          >
            Münster Info Hub
          </Link>
          . Entstanden auf dem{" "}
          <Link
            href="https://www.muensterhack.de/"
            target="_blank"
            rel="noopener"
            className={classes.link}
          >
            Münsterhack 2019
          </Link>
          .
        </Typography>
        <Box className={classes.aCode4MsProject}>
          Ein Projekt von{" "}
          <Link
            href="https://codeformuenster.org/"
            target="_blank"
            rel="noopener"
          >
            <img
              alt="Code for Münster"
              src="https://codeformuenster.org/img/cfm_logo.png"
            />
          </Link>
        </Box>
        <Typography variant="subtitle2">
          <Link
            href="https://github.com/codeformuenster/muenster-info-app/"
            target="_blank"
            rel="noopener"
            className={classes.link}
          >
            Quellcode auf GitHub
          </Link>
        </Typography>
      </CardContent>
    </BaseCard>
  );
};

export default WelcomeCard;
