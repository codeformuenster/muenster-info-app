import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "./components/SearchBar";
import Events from './components/Events';
import Info from './components/Info';
import Footer from './components/Footer';
import { DataProvider } from "./DataContext";

import logo from "./logo.png";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  logo: {
    width: "86%",
    maxWidth: "420px",
    margin: theme.spacing(1),
    marginBottom: 0
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <DataProvider>
          <img src={logo} alt="münster.jetzt logo" className={classes.logo} />
          <Switch>
            <Route exact path="/">
              <SearchBar />
              <Events />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
          </Switch>
          <Footer />
        </DataProvider>
      </div>
    </Router>
  );
}

export default App;
