import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '../../src/components/link/Link';
import Header from '../../src/components/header/Header.jsx';
import User from '../../src/components/user/User.jsx';
import Time from '../../src/components/time/Time.jsx';
import Weather from '../../src/components/weather/Weather.jsx';
import Thermostat from '../../src/components/thermostat/Thermostat.jsx';
import Card from '../../src/components/card/Card';

export default function About() {
  return (
    <>
      {' '}
      <Header left={<User />} right={<React.Fragment> <Weather/><Time /></React.Fragment>} />
      <Container maxWidth="xl">
        <Grid container justifyContent="center">
          <Grid item>
            <Button variant="contained" component={Link} noLinkStyle href="/">
              🏠 Home
            </Button>
          </Grid>
          <Thermostat/>
          <Card />
        </Grid>
      </Container>
    </>
  );
}
