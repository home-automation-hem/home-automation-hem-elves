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
import Scenes from '../../src/components/scenes/Scenes.jsx';
import Cameras from '../../src/components/cameras/Cameras.jsx';

export default function About() {
  let cards = [
    { iconUrl: '/images/sunny.svg', outlined: false},
    { iconUrl: '/images/alarm-clock.svg', outlined: false },
    { iconUrl: '/images/shower.svg', outlined: false },
    { iconUrl: '/images/tea-cup.svg', outlined: false },
    { iconUrl: '/images/rock.svg', outlined: false },
    { iconUrl: '/images/plus.svg', outlined: true },
  ];

  let cameras = [
    { videoUrl: '/videos/balcony.mp4' },
    { videoUrl: '/videos/bathroom.mp4' },
    { videoUrl: '/videos/front-door.mp4' },
    // { videoUrl: '/videos/garden.mp4' },
    { videoUrl: '/videos/kitchen.mp4' },
    // { videoUrl: '/videos/living room 2.mp4' },
  ];

  return (
    <>
      <Header
        left={<User />}
        right={
          <React.Fragment>
         
            <Weather />
            <Time />
          </React.Fragment>
        }
      />
      <Container maxWidth="xl">
        <Grid container justifyContent="center">
          <Grid item>
            <Button variant="contained" component={Link} noLinkStyle href="/">
              🏠 Home
            </Button>
          </Grid>
          <Thermostat />

          <Scenes cards={cards}/>
          <Cameras cameras={cameras} hasButton={true}/>
        </Grid>
      </Container>
    </>
  );
}
//iconUrl={'/images/rainy.svg'} outlined={true}
