import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import WelcomeContent from "./WelcomeContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  links: {
    marginTop: theme.spacing(2)
  }
}));

const Info = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <WelcomeContent />
      <Typography className={classes.links}>
        <div>
          <Link
            href="https://codeformuenster.org/impressum/#impressum"
            target="_blank"
            rel="noopener"
          >
            Impressum
          </Link>
        </div>
        <div>
          <Link
            href="https://codeformuenster.org/impressum/#datenschutz"
            target="_blank"
            rel="noopener"
          >
            Datenschutzerklärung
          </Link>
        </div>
      </Typography>
    </Container>
  );
};

export default Info;
