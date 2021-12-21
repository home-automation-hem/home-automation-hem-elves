import React, { Fragment } from 'react';
import { Grid, Typography, Container } from '@mui/material';
import Header from '../../src/components/header/Header.jsx';
import Navigation from '../../src/components/navigation/Navigation.jsx';
import Devices from '../../src/components/devices/Devices.jsx';
import Cameras from '../../src/components/cameras/Cameras.jsx';
import User from '../../src/components/user/User.jsx';
import Weather from '../../src/components/weather/Weather.jsx';
import Time from '../../src/components/time/Time.jsx';

export default function RoomPage() {
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

  let devices = [
    { iconUrl: '/images/bulb.svg', title: 'ON' },
    { iconUrl: '/images/bulb.svg', title: 'OFF' },
    { iconUrl: '/images/plug.svg', title: 'OFF' },
    { iconUrl: '/images/plug.svg', title: 'OFFLINE' },
    { iconUrl: '/images/plus.svg' },
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
      <Container>
        <Grid container>
          <Typography>Devices</Typography>
          <Grid item xs={6}>
            <Devices devices={devices} />
          </Grid>{' '}
          <Typography>Cameras</Typography>
          <Grid item xs={6}>
            <Cameras cameras={cameras} hasButton={true} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
