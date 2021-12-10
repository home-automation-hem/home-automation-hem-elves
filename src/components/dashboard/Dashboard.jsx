import React from 'react';
import Header from '../header/Header';
import User from '../user/User';
import Weather from '../weather/Weather';
import Time from '../time/Time';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Thermostat from '../thermostat/Thermostat';
import Scenes from '../scenes/Scenes';
import Cameras from '../cameras/Cameras';
import Energy from '../energy/Energy';
import Rooms from '../rooms/Rooms';
import {Typography} from '@mui/material';
import Navigation from '../navigation/Navigation';

export default function Dashboard(props) {
  let rooms = [
    { iconUrl: '/images/sunny.svg', title: 'Living room'},
    { iconUrl: '/images/alarm-clock.svg', title: 'Bedroom' },
    { iconUrl: '/images/shower.svg', title: 'Toilet'},
    { iconUrl: '/images/tea-cup.svg', title: 'Patio' },
    { iconUrl: '/images/rock.svg', title: 'Bathroom' },
    { iconUrl: '/images/plus.svg', title: 'Create new' },
  ];

  let cards = [
    { iconUrl: '/images/sunny.svg', outlined: false },
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

    { videoUrl: '/videos/balcony.mp4' },
    { videoUrl: '/videos/bathroom.mp4' },
  ];


  return (
    <div>
      <Header
        left={<User />}
        right={
          <React.Fragment>
            <Weather />
            <Time />
          </React.Fragment>
        }
      />
      <Navigation />
      <Container
        minWidth="xs"
        maxWidth="100%"
        sx={{ backgroundColor: '#F8F8F8' }}
        p={0}
      >
        <Grid container justifyContent="center" xs={12}>
          <Grid item xs={6}>
            <Thermostat />
          </Grid>

          <Grid item xs={6}>
            <Scenes cards={cards} />
          </Grid>

          <Grid item xs={6}>
            <Cameras cameras={cameras} hasButton={true} />
          </Grid>

          <Grid item xs={6}>
            <Energy />
          </Grid>

          <Grid item xs={6}>
            <Rooms rooms={rooms}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

