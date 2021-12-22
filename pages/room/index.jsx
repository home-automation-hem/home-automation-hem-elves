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
    {
      name: 'Living Room',
      type: 'living-room',
      id: 1,
      propertyId: 1,
      userId: 1,
    },
    {
      name: 'Bedroom',
      type: 'bedroom',
      id: 2,
      propertyId: 1,
      userId: 1,
    },
    {
      name: 'Bathroom',
      type: 'bathroom',
      id: 3,
      propertyId: 1,
      userId: 1,
    },
    {
      name: 'Toilet',
      type: 'toilet',
      id: 4,
      propertyId: 1,
      userId: 1,
    },
    {
      name: 'Patio',
      type: 'patio',
      id: 5,
      propertyId: 1,
      userId: 1,
    },
  ];

  let devices = [
    {
      "id": 1,
      "name": "Lightbulb",
      "iconUrl": "/images/plug.svg",
      "roomId": 1,
      "userId": 1
    },
    {
      "id": 2,
      "name": "Air Conditioner",
      "iconUrl": "/images/plug.svg",
      "roomId": 1,
      "userId": 1
    },
    {
      "id": 3,
      "name": "Eletctric Switch",
      "iconUrl": "/images/bulb.svg",
      "roomId": 1,
      "userId": 1
    },
    {
      "id": 4,
      "name": "Water Heater",
      "iconUrl": "/images/bulb.svg",
      "roomId": 3,
      "userId": 1
    }
  ]


  //state of selection should be here

  const [selected, setSelected] = React.useState(null);
  const onChange = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div>
      <Header left={<h1>LIVING ROOM</h1>} right={<h2>DEVICES 3</h2>} />
      <Navigation />
      <Container className={styles.rootContainer}>
        <Grid container sx={{ pt: '10%' }}>
          <Grid item xs={7}>
            <Typography variant="h4">Devices</Typography>
          </Grid>
          <Grid item xs={5} sx={{ pl: '120px' }}>
            <Typography variant="h4">Cameras</Typography>
          </Grid>
          <Grid item xs={7}>
            <Devices devices={devices} />
          </Grid>

          <Grid item xs={5} sx={{ pl: '120px' }}>
            <Cameras cameras={cameras} hasButton={true} />
          </Grid>

          <Grid item>
            <SceneComposer
              devices={devices}
              rooms={rooms}
              onScene={onChange}
              selected={selected}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
