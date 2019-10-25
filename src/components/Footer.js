import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { makeStyles} from "@material-ui/core/styles";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EventIcon from '@material-ui/icons/Event';
import InfoIcon from '@material-ui/icons/Info';
import theme from '../theme';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    marginTop: '300px',
    backgroundColor: '#e0e0e0',
  },
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('events');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation showLabels value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction component={Link} to="/" label="Events" value="events" icon={<EventIcon />} />
        <BottomNavigationAction component={Link} to="/info" label="Info" value="info" icon={<InfoIcon />} />
      </BottomNavigation>
    </ThemeProvider>
  );
};

export default Footer;
