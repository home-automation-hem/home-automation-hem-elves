
import { Grid, Typography, Container } from '@mui/material';
import Header from '../../src/components/header/Header.jsx';
import Navigation from '../../src/components/navigation/Navigation.jsx';
import Devices from '../../src/components/devices/Devices.jsx';
import Cameras from '../../src/components/cameras/Cameras.jsx';
import styles from './Room.module.scss';
import SceneComposer from '../../src/components/scenes/SceneComposer.jsx';
import Scenes from '../../src/components/scenes/Scenes.jsx';
import Rooms from '../../src/components/rooms/Rooms.jsx';
import React from 'react';


export default function Index() {
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

  let rooms = [
    { iconUrl: '/images/sunny.svg', title: 'Living room'},
    { iconUrl: '/images/alarm-clock.svg', title: 'Bedroom' },
    { iconUrl: '/images/shower.svg', title: 'Toilet'},
    { iconUrl: '/images/tea-cup.svg', title: 'Patio' },
    { iconUrl: '/images/rock.svg', title: 'Bathroom' },
    { iconUrl: '/images/plus.svg', title: 'Create new' },
  ];

  let devices = [
    { iconUrl: '/images/bulb.svg', title: 'on' },
    { iconUrl: '/images/bulb.svg', title: 'off'},
    { iconUrl: '/images/plug.svg', title: 'off' },
    { iconUrl: '/images/plug.svg', title: 'offline' },
    { iconUrl: '/images/plus.svg', title: '' },
  ];

  return (
    <div>
      <Header
        left={<h1>LIVING ROOM</h1>}
        right={
        <h2>DEVICES 3</h2>
        }
      />
      <Navigation />
      <Container className={styles.rootContainer}>
        <Grid  container sx={{ pt: '10%',  }}>
          <Grid item xs={7}>
            <Typography variant="h4">Devices</Typography>
          </Grid>
          <Grid item xs={5} sx={{pl: '120px'}}>
            <Typography variant="h4">Cameras</Typography>
          </Grid>
          <Grid item xs={7} >
            <Devices devices={devices} />
          </Grid>

          <Grid item xs={5} sx={{pl: '120px'}}>
            <Cameras cameras={cameras} hasButton={true} />
          </Grid>
          <Grid item ><SceneComposer devices={devices} rooms={rooms}  onScene={(e) => {onScene(e.target.value)}} scene={<Scenes/>}/></Grid>
        </Grid>
      </Container>
    </div>
  );
}
